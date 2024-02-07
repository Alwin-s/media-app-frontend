import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allApi'

function WatchHistory() {
  
   const[history,setHistory]=useState([])
  const handleHistory= async()=>{
    //make api call 

    const {data}=await getAllHistory()
    setHistory(data);
   
  }
  // console.log(history);
useEffect(()=>{
  handleHistory()
},[])

const  handleDelteHistory=async(id)=>{
  //make api call
  await deleteHistory(id)
  //return remaining history
  handleHistory()
}

  return (
    <>
<div className="container mt-5 d-flex justify-content-between">
  <h3>Watch-History</h3>
  <Link to={"/home"} style={{textDecoration:"none",fontSize:"20px",color:"blueviolet"}}><i class="fa-solid fa-circle-arrow-left fa-fade" ></i> Back To Home</Link>
</div>

<table className=' mt-5 mb-5 container'>
  <thead style={{color:"yellow"}}>
   <tr>
   <th>#</th>
    <th>Name</th>
    <th>URL</th>
    <th>TimeStamp</th>
    <th>Action</th>
   </tr>
  </thead> 
 <br />

  <tbody className='mt-5' style={{lineHeight:"43px"}}>
    {
      history.length>0?history?.map((item,index)=>(
        <tr key={item?.id}>
        <td>{index+1}</td>
        <td>{item?.caption}</td>
        <td><a href={item?.embedLink} target='_blank'>{item?.embedLink}</a></td>
        <td>{item?.timeStamp}</td>
        <td><button onClick={()=>handleDelteHistory(item?.id)} style={{border:"none",backgroundColor:"transparent"}}><i class="fa-solid fa-trash-can" style={{color:"red"}}></i></button></td>
        </tr>
      )):<p className='fw-bolder text-danger fs-5'>You Haven't Watched any Videos !!</p>
    }
   
  </tbody>
</table>
    </>
  )
}

export default WatchHistory 