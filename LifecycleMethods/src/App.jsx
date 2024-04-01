import React, { Component } from 'react'
import './App.css'

export default class App extends Component 
{
  constructor()
  {
    super();
    console.log("constructor called")
    this.state={
      count:0
    }
  }
  componentDidMount()
  {
    console.log("Mounting happened")
  }ent
  shouldComponentUpdate()
  {
    console.log("Should component update called")
    return true;
  }
  componentDidUpdate()
  {
    console.log("Component updated")
  }
  render() {
    return (
      <div>
        <p>Count:{this.state.count}</p>
        <button onClick={()=>this.setState((state)=>{return{count:state.count+1}})}>+</button>
      </div>
    )
  }
}
