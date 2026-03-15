import { useState } from "react";

function Counter () {
  const [count,setCounter] = useState(0);
  const handleIncrease = ()=> {
    setCounter(prev => prev + 1)
  }
  const handleDecrease = () => {
    setCounter(prev => Math.max(prev - 1,0))
  }
  const reset = () => {
    setCounter(0)
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default Counter;
