import { useState } from "react";

function App()
{
  const[background,setbackground]=useState('#000000')
  function change()
  {
    console.log(Math.round(Math.random()*10000000).toString(16))
    const random_color="#"+Math.round(Math.random()*1000000).toString(16);
    console.log(random_color)
    setbackground(random_color)

  }
  let obj={backgroundColor:background}
  return(
    <div className="changer" style={{obj}}>
      <button onClick={change}>change</button>
    </div>
  )
}
export default App