import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Spinner;
// -------------------------------------------------------------------------------------------------
// import React from 'react';
// import ClipLoader from 'react-spinners/ClipLoader';

// const Spinner = () => {
//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <ClipLoader color="blue" size={50} />
//     </div>
//   );
// };

// export default Spinner;
// -------------------------------------------------------------------------------------------------
// import React from 'react';
// import './../customStyles/spinnerStyles.css'; 

// const Spinner = () => {
//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <div className="custom-spinner"></div>
//     </div>
//   );
// };

// export default Spinner;
// -------------------------------------------------------------------------------------------------
// import React from 'react';
// import { Spinner as BootstrapSpinner } from 'react-bootstrap';

// const Spinner = () => {
//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <BootstrapSpinner animation="border" variant="primary" />
//     </div>
//   );
// };

// -------------------------------------------------------------------------------------------------

// import React from 'react';
// import styles from './../customStyles/spinnerStyles.css';
// import './../customStyles/spinnerStyles.css'; 

// const Spinner = () => (
//   <div className={styles.hand}>
//     <div className={styles.finger}></div>
//     <div className={styles.finger}></div>
//     <div className={styles.finger}></div>
//     <div className={styles.finger}></div>
//     <div className={styles.palm}></div>
//     <div className={styles.thumb}></div>
//   </div>
// );

// export default Spinner;
