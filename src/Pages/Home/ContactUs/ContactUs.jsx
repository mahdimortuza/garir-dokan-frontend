import React from 'react';

const ContactUs = () => {
    return (
        <div className='mt-16'>
            <div className="hero">
  <div className="hero-content flex-col">
                <h1 className='mt-4 text-5xl'>Let us know what you think</h1>
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Your Name</span>
          </label>
          <input type="text" placeholder="Your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <input type="text" placeholder="Your Message" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactUs;