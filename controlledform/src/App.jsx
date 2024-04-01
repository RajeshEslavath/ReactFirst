import React ,{useState}from "react";
import "./App.css";

const App = () => {
  const [formDetails, setFormDetails] = useState({
    username: "",
    email: "",
    password:" "
  });
  const change=(e)=>
  {
    const{name,value}=e.target;
    setFormDetails({...formDetails,[name]:value})
  }
  const submit=(e)=>
  {
    e.preventDefaults()
    console.log(e.target.value)
    console.log(formDetails)
  }
  return (
    <div style={{padding:"100px"}}>
      <h1>Contact Information</h1>
      <form action="" className="myform" onSubmit={submit} style={{backgroundImage:"url('RoseFlower.webp')",padding:"10px",borderRadius:"10px"}}>
        <input
          type="text"
          name="username"
          id="un"
          placeholder="Enter username"
          onChange={change}
        />
        <br />
        <br />
        <input 
          type="email" 
          name="email" 
          id="em" 
          placeholder="Entere email" 
          onChange={change}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="pwd"
          placeholder="Enter password"
          onChange={change}
        />
        <br />
        <br />
        <button type="submit" >submit</button>
      </form>
    </div>
  );
};

export default App;
