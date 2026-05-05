import { use, useState } from "react";

function Counter() {
  const [text,setText] = useState("");
  
  const getColor = ()=> {
    if(text.length > 20 ) return 'red';
    if(text.length > 10 ) return "white";
    return "green";
  }


  return (
    <>
      <input 
        value={text}
       onChange={(e)=> setText(e.target.value)}  
      />
    <p style={{ color:getColor() }}>文字数: {text.length}</p>
    </>
  )
}

export default Counter;
