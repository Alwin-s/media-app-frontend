import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigateByUrl= useNavigate('./home.jsx')







  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
    <Col></Col>
      <Col lg={5} >
        <h1>Welcome To <span style={{color:"yellow"}}>Media Player</span></h1>
        <p style={{textAlign:'justify',color:"white"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed deserunt aspernatur repellat laborum impedit rerum quam, obcaecati delectus animi ipsam error nesciunt at minus perspiciatis? Eligendi dolor fuga odit necessitatibus.</p>
        <button onClick={()=>navigateByUrl('./home')} className='mt-4 btn btn-warning'>Get Started</button>
      </Col>
      
      <Col lg={5}>
        <img src="https://s3.eu-west-2.amazonaws.com/img.creativepool.com/files/candidate/portfolio/full/1160148.gif" alt="" style={{width:"550px",height:"380px",borderRadius:"40px"}} className=''/>
      </Col>
      <Col></Col>
    </Row>

    <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
      <h3 className='mt-4'>Features</h3>

      <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
      <Card className='p-3 bg-danger ' style={{ width: '22rem',borderRadius:"20px" }}>
      <Card.Img height={'250px'} width={'400px'} variant="top" src="https://i.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif" />
      <br />
      <Card.Body className='text-center'>
        <Card.Title> <h3 style={{color:"yellow",fontWeight:"bold"}}>Managing Videos</h3></Card.Title>
        <Card.Text className='text-white'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
      <Card className='p-3 bg-warning ' style={{ width: '22rem',borderRadius:"20px" }}>
      <Card.Img height={'250px'} width={'400px'} variant="top" src="https://i.gifer.com/8QEy.gif" />
      <br />
      <Card.Body className='text-center'>
        <Card.Title> <h3 style={{color:"yellow",fontWeight:"bold"}}>Categories Videos</h3></Card.Title>
        <Card.Text className='text-white'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
      <Card className='p-3 bg-danger ' style={{ width: '22rem',borderRadius:"20px" }}>
      <Card.Img height={'250px'} width={'400px'} variant="top" src="https://i.pinimg.com/originals/5e/64/c4/5e64c4917fd67c71a4a93820cddee7a8.gif" />
      <br />
      <Card.Body className='text-center'>
        <Card.Title> <h3 style={{color:"yellow",fontWeight:"bold"}}>Watch Videos</h3></Card.Title>
        <Card.Text className='text-white'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
      </div>
    </div>


    <div className="container border rounded p-5 mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
<div className="col-lg-5 w-50">
  <h3 className='mb-3 text-warning'>Simple,Poweful & Fast</h3>
<h6><span className='fs-5 fw-bolder text-info'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos recusandae blanditiis voluptates nobis temporibus eum delectus deleniti maxime placeat numquam perspiciatis accusantium esse quod, aperiam sint a. Numquam, quibusdam!</h6>
<h6><span className='fs-5 fw-bolder text-info'>Categories Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos recusandae blanditiis voluptates nobis temporibus eum delectus deleniti maxime placeat numquam perspiciatis accusantium esse quod, aperiam sint a. Numquam, quibusdam!</h6>
<h6><span className='fs-5 fw-bolder text-info'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos recusandae blanditiis voluptates nobis temporibus eum delectus deleniti maxime placeat numquam perspiciatis accusantium esse quod, aperiam sint a. Numquam, quibusdam!</h6>
</div>

    <div className="video col-lg-5" style={{marginLeft:"-35%"}}></div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Z9yaG27quz0?si=mOU6wp2U5B_54_e2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='rounded'></iframe>
    </div>
    </>
  )
}

export default LandingPage