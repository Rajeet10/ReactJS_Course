import React,{Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state={
    namelist:[
      {name:"RAJEET",position:"STRIKER"},
      {name:"MESSI",position:"WINGER"},
      {name:"Ronaldo",position:"MID-FIELDER"} 
    ]
  }
  SwitchList=(event)=>{
    this.setState({
      namelist:[
        {name:"RAJEET CHAUDHARY",position:"STRIKER"},
        {name:"MESSI LIONEL",position:"WINGER"},
        {name:"Ronaldo CRISTIANO",position:"MID-FIELDER"} 
      ]
    })
  }
  overwrite=(event)=>{
    this.setState({
      namelist:[
        {name:event.target.value,position:"STRIKER"},
        {name:event.target.value,position:"WINGER"},
        {name:event.target.value,position:"MID-FIELDER"} 
      ]
    })
  }
  render(){
  return (
    <div className="App">
      <h1>WELCOME TO ASSGINMENT 1</h1>
      <p>By RAJEET CHAUDHARY</p>
      <button onClick={this.SwitchList} className="btn">SWITCH </button><br></br>
      <UserInput changevalues={this.overwrite} currentname={this.state.namelist[0].name}/>
      <UserOutput name={this.state.namelist[0].name} position={this.state.namelist[0].position}  />
      <UserOutput name={this.state.namelist[1].name} position={this.state.namelist[1].position}/>
      <UserOutput name={this.state.namelist[2].name} position={this.state.namelist[2].position}/>

    </div>
  );
}
}

export default App;
