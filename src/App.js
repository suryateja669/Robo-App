import React,{Component} from 'react';
//import logo from './logo.svg';
import Searchbox from './searchbox';
import {Robots} from './robot.js';
import RoboList from './robo.js';


class App extends Component {
  constructor(){
  super()
  this.state={
    Robots:{Robots},
    Searchbar:""
  }
}


  onSearchChange=(event)=>{return(
    console.log(event.target.value),
    this.setState({Searchbar:event.target.value}));
  }


  render(){
    const filteredRobots=Robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.Searchbar.toLowerCase());
    }
  )
    return (
      <div className="tc">
        <h1>Robo friends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <RoboList Robots={filteredRobots}/>
      </div>
    );
  }

}

export default App;
