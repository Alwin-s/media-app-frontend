import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteVideo } from '../services/allApi';


function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {setShow(true);

//make api call to "http..."
const {caption,embedLink}=displayData;
let today=new Date();

let timeStamp =(new Intl.DateTimeFormat('en-us',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today))

let videoDetails={caption,embedLink,timeStamp}

await addToHistory(videoDetails)
console.log(today);
  }
  

//delete a video

const removeVideo = async (id) => {
  const confirmed = window.confirm("Are you sure you want to remove this video?");
  if (confirmed) {
    const response = await deleteVideo(id);
    setDeleteVideoStatus(true);
  }
};

const dragStarted=(e,id)=>{
  console.log("drage strted" + id );
  e.dataTransfer.setData('videoId',id)
}


  return (
    <>
      <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} variant="top" src={displayData?.url} style={{width:"205px",height:"190px",objectFit:"cover",cursor:"pointer"}} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
    <h6 className='text-white'>{displayData?.caption}</h6>
    { insideCategory?"" : <button onClick={()=>removeVideo(displayData?.id)} style={{border:"none",backgroundColor:"transparent"}}><i class="fa-solid fa-trash-can" style={{color:"red"}}></i></button> }
        </Card.Title>
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose} style={{marginTop:"-2%"}}>
      <div style={{backgroundColor:"black",borderRadius:"30px",color:"white"}}>
        <Modal.Header closeButton  style={{backgroundColor:"black"}}>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="416" src= {`${displayData?.embedLink}?autoplay=1`}  title={displayData?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen  ></iframe></Modal.Body>
        <Modal.Footer style={{backgroundColor:"black"}}>
          <Button variant="secondary" className='btn-sm' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
    </>
  )
}

export default VideoCard