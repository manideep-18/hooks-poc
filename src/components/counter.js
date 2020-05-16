import React,{useState, useEffect} from 'react'

function Counter(){
const [counter,setCounter]=useState(0)
const [timer,incerementCounter]=useState(0)

useEffect(()=>{
setInterval(()=>{
    incerementCounter(prevtimer=>prevtimer+1)
},1000)
},[])

return <div>
    <div>
    counter - {counter}
    <button onClick={()=>setCounter(counter+1)}>Incerement By 1</button>
    </div>
    timer in seconds - {timer}
</div>
}

export default Counter