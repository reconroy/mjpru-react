import React from 'react'
import Sidebar from './Sidebar'
import Footer from './../Footer';
import { Outlet } from 'react-router-dom';
import AfterLoginTopBar from './AfterLoginTopBar';

const LayoutCompo = () => {
    return (
        <div>
            {/* <AfterLoginTopBar /> */}
            <div className="d-flex">
                <Sidebar />
                <div style={{ marginLeft: '', padding: '20px', marginTop: '', width: '', paddingBottom: '1180px' }}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LayoutCompo;
