import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allApi';
import VideoCard from './VideoCard';

function Category() {
  const [allcategories,setAllCategories]=useState([])
  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory= async()=>{
    if(categoryName){
      let body={
        categoryName,allVideos:[]
      }
      //make api call
      const response = await addToCategory(body);
      // console.log(response);
      if(response.status>=200 && response.status<300){
        //hide modal
        handleClose()
        //reset
        setCategoryName("")
        toast.success("Category added successfully...",{
          autoClose: 700
        })
      }else{
        toast.error("Something whent wrong")
      }
    }else{
      toast.warning("Provide a category Name !!")
    }
  }

  const getCategories=async ()=>{
    const {data}=await getAllCategory()
    setAllCategories(data)

  }
  console.log(allcategories);
  useEffect(()=>{
getCategories()
  },[])

  const handleDelte = async (id)=>{
    const confirm=window.confirm("Are you sure you want to remove this Category?");
    if(confirm){
      await deleteCategory(id)
      getCategories()
    }
   
  }
  const videoDrop= async (e,categoryId)=>{
    console.log("video drop inside category id: " +categoryId);

    const videoId=e.dataTransfer.getData("videoId")
    console.log("video card Id: " ,videoId);
    //get video details
     const {data}=await getAVideo(videoId)
     console.log(data);

//get categories details
    const selectCategory = allcategories?.find(item=>item.id==categoryId);
    selectCategory.allVideos.push(data)
    console.log(selectCategory);

 //make api call to get update category
    await updateCategory(categoryId,selectCategory);
    getCategories()
  }

  const dragOver=(e)=>{
    console.log("video drag over category");
    e.preventDefault()
    const videoId=e.dataTransfer.getData("videoId")
    console.log("video card Id: " ,videoId);
    
  }

  return (
    <>
    <div className="d-grid ms-5" style={{marginTop:"-3%"}}>
    <button className='btn btn-info btn-sm text-white' onClick={handleShow}>Add To Category</button>
    </div>
    {
      allcategories?allcategories?.map(item=>(
                 <div className='mt-5 mb-3 border rounded p-3 ms-5' droppable onDragOver={(e)=>dragOver(e)}  onDrop={(e)=>videoDrop(e,item?.id)}>
               <div className='d-flex justify-content-between align-items-center'>
              <h6 className='fw-bold ' style={{color:"yellow"}}>{item.categoryName}</h6>
              <button   style={{border:"none",backgroundColor:"transparent"}} onClick={()=>handleDelte(item?.id)}><i class="fa-solid fa-trash-can" style={{color:"red"}}></i></button>
            </div>
            <hr />
           <Row>
            {
              item?.allVideos &&
              item?.allVideos.map(
                card=>(
                  <Col sm={11}>
                    <VideoCard displayData={card} insideCategory={true}/>
                  </Col> 
                )
              )
            }


           </Row>

          </div>
      )):<p className='fw-bold text-danger fs-5'>Nothing To Display</p>
    }



    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{color:"yellow",fontWeight:"bold"}}
      >
        <div style={{backgroundColor:""}}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category..
            <br />
           
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body className=''>

         <Form>
        
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='text-white'>Enter Video Name</Form.Label>
        <Form.Control type="text" className='text-dark'  placeholder="Enter Vidoe Name "  onChange={(e)=>setCategoryName(e.target.value)}/>
      </Form.Group>
        
         </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className='btn-sm' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" className='btn-sm' onClick={handleAddCategory}>ADD</Button>
        </Modal.Footer>
        </div>
      </Modal>

      <ToastContainer
      position='top-center'
      theme='dark'
      
      />
    </>



  )
}

export default Category;