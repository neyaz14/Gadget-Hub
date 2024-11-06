import React from 'react';

const ErrorPage = ({location}) => {
    console.log(location);
    return (
        <div>
           <p>Please reload if you want to see dashboard . its a local storage related problem</p>
            
            <h1 className='text-4xl'>Page doesnot found </h1>
        </div>
    );
};

export default ErrorPage;