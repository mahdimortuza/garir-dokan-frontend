import React from 'react';

const Subscribe = () => {
    return (
        <div className='mt-36'>
            <h1 className='mt-4 text-center text-5xl'>Subscribe us to get connected</h1>
            <div className='flex justify-center mt-10'>
                
                <div className="form-control">
                    
                    <input type="text" placeholder="E-mail" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <button className="btn btn-primary">subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;