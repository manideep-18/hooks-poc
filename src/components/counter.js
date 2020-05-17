import React,{useState, useEffect} from 'react'

function Counter(){
const [counter,setCounter]=useState(0)
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
    <div>
    counter - {counter}
    <button onClick={()=>setCounter(counter+1)}>Incerement By 1</button>
    </div>
    <div>
    timer in seconds - {timer}
    <button onClick={()=>clearInterval(interval)}>Stop Timer</button>
    </div>
</div>
}

export default Counter