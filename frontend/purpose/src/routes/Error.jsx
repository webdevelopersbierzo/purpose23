import React from 'react';
import { useRouteError} from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div className='w-full bg-slate-900  h-screen text-white'>
            <h1>Error</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    );
}

export default Error;
