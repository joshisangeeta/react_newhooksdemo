import React,{useState,useEffect} from 'react';

function Hooksdemo3(){
    const [date]=useState(new Date());
    const [second,setSecond] = useState(date.getMilliseconds());
  
    useEffect(() => {
        console.log("invoked");
        const interval = setInterval(() => setSecond(second=>second + 1), 1000);
        return ()=>{
              console.log("clearing interval");
            clearInterval(interval)};
    }, [])
                
    return(
 
        <div>
            <h1>Todays date and current time is{date.toDateString()}</h1>
            <h2> {second}</h2>
        </div>

    )
}
export default Hooksdemo3;