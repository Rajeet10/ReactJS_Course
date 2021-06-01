import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        selectedPostID:null,
        error:false
    }
    componentDidMount(){
       axios.get('/posts')
       .then(Response=>{
           const posts=Response.data.splice(0,4);
           const updatedPosts=posts.map(post=>{
               return{
                   ...post, 
                   author:'Max'
               }
           });
         
           this.setState({posts:updatedPosts})
        //    console.log(Response);
       })
       .catch(error=>{
        //    console.log(error);
        this.setState({error:true});
       });
    }
    postSelectHandler=(id)=>{
this.setState({selectedPostID:id})
    }
    render () {
        let posts=<p style={{textAlign:'center'}}>SOmething went wrong</p>;
        if(!this.state.error){
             posts=this.state.posts.map(post=>{
                return <Post key={post.id} 
                title={post.title} 
                author={post.author} 
                clicked={()=>this.postSelectHandler(post.id)}/>
            });
        }
     
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostID}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;