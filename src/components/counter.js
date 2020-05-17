import React,{useState, useEffect} from 'react'

function Counter(){
const [counter,setCounter]=useState(0)

return <div>
    counter - {counter}
    <button onClick={()=>setCounter(counter+1)}>Incerement By 1</button>
    </div>
}

export default Counter