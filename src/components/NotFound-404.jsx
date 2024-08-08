import React from 'react';
import NotFoundImage from "./../assets/images/404-Error.svg";
import Homebar from './Homebar';
// import Home from './Home';

const _404 = () => {
  return (
    <>
      <Homebar />
      <div className="container text-center mt-3 rounded-4 shadow-lg">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <img
              src={NotFoundImage}
              alt="404 Not Found"
              className="img-fluid mb-3  w-75 container"
            />
            <h2 className="mb-0 pb-5 poppins-semibold">PAGE NOT FOUND</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default _404;
