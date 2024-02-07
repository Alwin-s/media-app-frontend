import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideo } from '../services/allApi'


function View({uploadVideoServerResponse}) {


  const[allvideos,setAllVideos]=useState([])
  
const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  const getAllUploadedVideos=async ()=>{
    const {data}= await getAllVideo()
    setAllVideos(data);
  } 
useEffect(()=>{
getAllUploadedVideos()
setDeleteVideoStatus(false)
},[uploadVideoServerResponse,deleteVideoStatus])
// console.log(allvideos);



  return (
    <>
 <Row style={{paddingLeft:"30px"}} className='mt-3'>
  {
    allvideos.length>0?
    allvideos.map(videos=>(

      <Col sm={12} md={6} lg={4} xl={3} >
      <VideoCard displayData={videos} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </Col>
    ))
    : <p className='fw-bold text-danger fs-5'>Nothing to display</p>
  }
    
    </Row>
    </>
  )
}

export default View