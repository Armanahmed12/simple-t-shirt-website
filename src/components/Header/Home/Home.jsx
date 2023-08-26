// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2 className='text-red-500'>This is from Home</h2>
        </div>
    );
};

export default Home;