import { use, useState } from "react";

function Counter() {
  const [count,setCount] = useState(0);
  
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    if(count > 0){
      setCount(count - 1);
    }
  }
  function reset() {
    setCount(0)
  }
  function save() {
    localStorage.setItem(count, {count})
    alert('セーブしました！')
  }
  function load() {
    const savedValue = localStorage.getItem("count")
    console.log(savedValue);
    setCount(savedValue)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={count === 0} >-</button>
      <button onClick={reset}>reset</button>
      <button onClick={save}>save</button>
      <button onClick={load}>load</button>

    </>
  )
}

export default Counter;
