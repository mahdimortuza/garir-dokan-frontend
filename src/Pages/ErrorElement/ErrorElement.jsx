import { Link } from 'react-router-dom';
import img from '../../../public/gif/404.gif'

const ErrorElement = () => {
    return (
        <div className='mx-auto h-screen'>
            <img className='w-96 mx-auto mt-10' src={img}></img>
            <h3 className='text-center font-bold text-7xl'>404</h3>
            <h3 className='text-center mt-3 text-3xl'>dang! page not found </h3>
            <Link to="/" className='flex justify-center mt-5'><button className='btn btn-primary flex justify-center'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorElement;