import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from './components/Spinner';

const withSpinner = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // Adjust the timeout as needed

      return () => clearTimeout(timer);
    }, [location]);

    return (
      <>
        {loading && <Spinner />}
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withSpinner;
