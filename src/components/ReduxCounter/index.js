import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrementCount, incrementCount } from '../redux/counter/action'

function ReduxCounter(){
const counterValue=useSelector(state=>state)
const dispatch=useDispatch()
    return(
        <div>
            <span>redux counter value - {counterValue}</span>
            <button onClick={()=>{dispatch(decrementCount())}}>decrement value</button>
            <button onClick={()=>{dispatch(incrementCount())}}>increment count</button>
        </div>
    )
}

export default ReduxCounter