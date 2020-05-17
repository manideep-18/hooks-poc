import React,{useState,useEffect} from 'react'

function Timer(){

const [timer,incerementCounter]=useState(0)

let interval

useEffect(()=>{
interval=setInterval(()=>{
    incerementCounter(timer+1)
},1000)

return ()=>{
    clearInterval(interval)
}
},[timer])

return <div>
timer in seconds - {timer}
<button onClick={()=>clearInterval(interval)}>Stop Timer</button>
</div>
}

export default Timer