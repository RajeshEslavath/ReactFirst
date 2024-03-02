import Movies from './Movies';
import {Component} from 'react';

class App extends Component
{
  render(){
  return(
      <div className="app">
        <h1>Hello world</h1>
        <Movies/>
        <br/>
        <Movies/>
        <br/>
        <Movies/>
        <br/>
        <Movies/>
      </div>
      )}
}
export default App;