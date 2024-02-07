import React, { useState } from 'react';
import Add from '../Components/Add';
import { Link } from 'react-router-dom';
import View from '../Components/View';
import Category from '../Components/Category';

function Home() {
  const [uploadVideoServerResponse, setUploadVideoServerResponse] = useState({});

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="add-videos">
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
        </div>
        <Link to={"/watchhistory"} style={{ textDecoration: "none", color: "yellow", fontSize: "20px", fontWeight: "bold" }}>
          <i className="fa-solid fa-clock-rotate-left fa-"></i> Watch History
        </Link>
      </div>

      <div className="container-fluid w-100 mt-5 mb-5 d-flex flex-wrap justify-content-between align-items-start">
        <div className="all-videos col-lg-9">
          <h3 className='ms-4'>All Videos</h3>
          <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>

        <div className="category col-lg-3 mt-lg-3 ">
          <Category />
        </div>
      </div>
    </>
  );
}

export default Home;
