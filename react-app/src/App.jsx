import Profile from './Profile';
import users from "./users.json"
import { useState } from 'react';

console.log(users)
function App(){
  return (
    <>
      {users.map((user,index)=> (
        <Profile 
          key={index}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      ))}
    </>
  )
}

function counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>現在のカウント{count}</p>
      <p>test</p>
      <button  onClick={()=> setcount(count + 1)}>カウントアップ</button>

    </>
  )
}
export default App;
