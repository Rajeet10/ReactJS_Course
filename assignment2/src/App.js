import React, { Component } from "react";
import "./App.css";
import Valid from './Valid/valid';
import Char from './Char/Char';

class App extends Component {
  state={
    userinput:''
  };
  findlength=(event)=>{
    this.setState({
      userinput:event.target.value
    });
  };
  deletecharHanlder=(index)=>{
    const text=this.state.userinput.split('');
    text.splice(index,1);
    const updatedtext=text.join('');
    this.setState({userinput:updatedtext});
  };

  render() {
    const charList=this.state.userinput.split('').map((ch,index)=>{
      return <Char 
      character={ch} 
      key={index}
      clicked={()=>this.deletecharHanlder(index)}
      />;
    });
    return (
      <div className="App">
        <h1>WELCOME TO ASSIGNMENT 2</h1>
        <input type="text" className="iptext" onChange={this.findlength} value={this.state.userinput}></input>
        <p>{this.state.userinput}</p>
        <Valid inputlength={this.state.userinput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
