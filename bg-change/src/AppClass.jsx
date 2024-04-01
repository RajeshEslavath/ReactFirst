import { Component } from "react";
import './App.css'

class AppClass extends Component
{
    constructor()
    {   super()
        this.state={
            background:'#00000'
        }
    }
    change =()=>
    {
        console.log('Hi')
        const random_color="#"+Math.round(Math.random()*1000000).toString(16);
        this.setState({background:random_color}) 
    }
    render(){
        return(
            <div className="changer" style={{backgroundColor:this.state.background}}>
                <button onClick={this.change}>change</button>
            </div>
        )
    }
}
export default AppClass