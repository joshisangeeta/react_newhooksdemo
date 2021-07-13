import React,{useState, useEffect} from 'react';
function Hooksdemo2(){

  const [count,setCount] = useState(100);

  useEffect(()=>{
    
      document.title = `You clicked ${count} times`;
  });
  return(
      <div>
       <h1>This button is clicked for {count} times</h1>
       <button onClick={()=>setCount(count+1)} >Click to increase count</button>

      </div>
  )
}
export default Hooksdemo2;