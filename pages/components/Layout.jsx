import React from 'react';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
      <>
        <div className="d-flex">
          <Navbar />
          <main style={{ overflowX: "hidden" , width: '100%' , marginLeft: '80px' }}>{children}</main>
        </div>
      </>
    );
};

export default Layout;