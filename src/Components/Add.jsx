import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoServerResponse}) {

  const[video,setVideo]=useState({
    id:"",caption:"",url:"",embedLink:""
  })

console.log(video);


const getEmbedLink=(e)=>{
  const {value}=e.target
if(value){
  const link = `https://www.youtube.com/embed/${value.slice(-11)}`
  setVideo({...video,embedLink:link})
}else{
  setVideo({...video,embedLink:""})
}
}

const handleUpload=async ()=>{
  const {id,caption,url,embedLink} =video
  if(!id || !caption || !url || !embedLink){
    toast.warning("Please fill all input fields")
  }else{
    //make api call
    const response =await uploadVideo(video)

 if(response.status>=200 && response.status<300){
  toast.success(`${response.data.caption} Video uploaded successfully...`)
  //set sever response
  setUploadVideoServerResponse(response.data)

  //reset input fields
  setVideo({
    id:"",caption:"",url:"",embedLink:""
  })


  //hide modal
  handleClose()
 }else{
  toast.error("something went wrong")
 }
  }
}



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="d-flex align-items-center">
      <h4 className='text-white'>Upload Videos</h4>
      <button className='btn' onClick={handleShow} style={{border:"none",backgroundColor:"transparent",boxShadow:"none"}}><i class="fa-solid fa-circle-plus fa-xl fa-beat" style={{color:"#FFD43B",marginLeft:"-80%" }}></i></button>
    </div>
{/* 
modal */}   


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{color:"yellow",fontWeight:"bold"}}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video
            <br />
           
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body className='p-4'>
        <p className='text-white fw-light'>Please Fill The Following Fields</p>
         <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" className='bg-dark text-white'  placeholder="Enter Vidoe Id"  onChange={(e)=>setVideo({...video,id:e.target.value})}/>
      </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" className='bg-dark text-white'  placeholder="Enter Vidoe Titile " onChange={(e)=>setVideo({...video,caption:e.target.value})} />
      </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" className='bg-dark text-white'  placeholder="Enter Video Image Url" onChange={(e)=>setVideo({...video,url:e.target.value})} />
      </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Control type="tetx" className='bg-dark text-white' placeholder="Enter Video Link" onChange={getEmbedLink}/>
      </Form.Group>
         </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className='btn-sm' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" className='btn-sm' onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-center'
      theme='dark'
      autoClose={2000}
      
      />
    </>
  )
}

export default Add