import React, { useContext, useState ,useReducer,useEffect} from 'react'
import { DataContext } from '../App'
import axios from 'axios'



function PostData(){
const [postId,setId]=useState(0)
    const dataContext=useContext(DataContext)



return <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
     <input type="text" value={postId} onChange={(e)=>setId(e.target.value)}/>
   <button onClick={()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response=>{            
       dataContext.dispatch({type:'FETCH_SUCCES',payload:response.data})
    })
    .catch(error=>{
    dataContext.dispatch({type:'FETCH_FAILURE',payload:''})
    })      
        
    }}>Get Data</button>

    DataContext - {dataContext.postData.title} 
</div>
}

export default PostData