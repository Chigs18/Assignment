import React, {useState, useEffect} from 'react'


export default function StateChange() {

  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(document.title = `count is : ${count}`);
    }, 2000);
  });

  return (
    <>
      <div className='text-center'>
        <h2>{count}</h2>
        <button onClick={() => { setCount(count + 1) }}>Increase Counter</button>
        <button onClick={() => { setCount(count - 1) }}>Decrease Counter</button>
      </div>
    </>
  )
}
