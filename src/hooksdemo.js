import React, { useState } from 'react';

function Hooksdemo (){
  const [count,setCount] = useState(0);

  return(
      <div>
          <h2> You have clicked {count} times </h2>
         <button onClick= { ()=>setCount(count+1)}  >Click Me </button>

      </div>
  )


}
export default  Hooksdemo;
