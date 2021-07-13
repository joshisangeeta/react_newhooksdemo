import React,{useState} from 'react';
function StateHook1 (){
    const [fruit,setFruit] = useState('Mango');
    const [hook,setHook]   = useState('stateHook');

       return(
           <div>
               <div>
               <h1>current fruit is: {fruit}</h1>              
               <button onClick={()=>setFruit('Blueberry')}>Change to my fav fruit</button>
               </div>
               <div>
                   <h1>Current Hook info is about {hook}</h1>
                   <button onClick={()=>setHook('Effect Hook')}>Change hook to useEffect</button>
               </div>
           </div>
   



       );
 



}
export default StateHook1;