import './Hero.css'

const Hero = () => {
    return (
        <div>
            <div className="hero px-8 min-h-screen hero-section">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-4/5 lg:w-1/2' src="https://raw.githubusercontent.com/mahdimortuza/project-img/main/922.Smart%20car.jpg" />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to Garir Dokan!</h1>
                        <p className="py-6">We have premium car collection to make your kids happy. Feel free to explore and purchase the best one to make your kids happy.</p>
                        <button className="btn btn-primary">explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;