import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import NavbarTop from '../Components/NavbarTop/NavbarTop';

const Main = () => {
    return (
        <div>
            <NavbarTop />
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;