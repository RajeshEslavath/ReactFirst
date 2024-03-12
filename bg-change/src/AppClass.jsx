import { Component } from "react";
import './App.css'

class AppClass extends Component
{
    constructor()
    {   super()
        this.state={
            background:'#FFFFFF'
        }
    }
    change =()=>
    {
        console.log(Math.round(Math.random()*10000000).toString(16))
        const random_color="#"+Math.round(Math.random()*1000000).toString(16);
   
        console.log(random_color)
        this.setState(random_color) 
    }
    render(){
        return(
            <div className="changer" style={{backgroundColor:this.state.background}}>
                <input type="color" name="color" id="color" onChange={this.change} formTarget="this.change" />
            </div>
        )
    }
}
export default AppClass