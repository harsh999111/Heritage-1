import React from 'react';

export default function NotFound() {
    return (
        <div className='flex justify-center items-center flex-col text-center py-96 h-full w-full'>
            <h1 className='text-3xl font-bold text-yellow-900'>404 - Not Found</h1>
            <p className='text-xl text-yellow-900 font-bold'>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}
