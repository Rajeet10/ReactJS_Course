import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route,NavLink,Switch} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
// import Newpost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';


const AsyncNewPost=asyncComponent(()=>{
    return import('./NewPost/NewPost');
});
class Blog extends Component {
    state={
        auth:true
    }

   render () {
   

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts/" 
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color:'#fa923f',
                                textDecoration:'underline'
                            }}>Posts</NavLink></li>
                            <li><NavLink  to={{
                                
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=><h1>Home</h1>}/>  
                <Route path="/" exact render={()=><h1>Home2</h1>}/>             */}
              
                <Switch>
                {this.state.auth?<Route path="/new-post" exact component={AsyncNewPost}/>:null}
                <Route path="/posts" component={Posts}/>
                <Route render={()=><h1>Not found</h1>}/>
                {/* <Route path="/" component={Posts}/>//same as reddirect  */}
                {/* <Redirect from="/" to="/posts"></Redirect> */}
                
               
                </Switch>
            </div>
        );
    }
}

export default Blog;