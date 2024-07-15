import React from 'react';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        {/* Your main content goes here */}
      </main>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="mt-auto text-center text-light fs-6 p-1 fixed-bottom" style={{ backgroundColor: '#005174' }}>
      © 2020-24 M.J.P. Rohilkhand University - Bareilly.<br />
      Best Viewed and Working with Google Chrome or Microsoft Edge browser.
    </footer>
  );
}

export default App;
