/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div style={{width:'100vw'}} className='text-center'>
            <Header className="mb-4"></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;