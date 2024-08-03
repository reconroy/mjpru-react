import React from 'react';
import NotFoundImage from "./../assets/images/404-Error.svg";
import Homebar from './Homebar';
// import Home from './Home';

const _404 = () => {
  return (
    <>
      <Homebar />
      <div className="container text-center mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <img
              src={NotFoundImage}
              alt="404 Not Found"
              className="img-fluid mb-3 shadow-lg w-75 rounded-5"
            />
            <h2 className="mb-0 pb-5">PAGE NOT FOUND</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default _404;
