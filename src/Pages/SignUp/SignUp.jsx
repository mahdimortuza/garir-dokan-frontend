import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value

        console.log(name, email, photo, password)

        createUser(email, password)
        .then( result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen body-section">
            <form onSubmit={handleSignUp}>
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registration now!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit"></input>
                            </div>
                            <p className='text-center text-black'>Already have an account? <Link className='font-bold text-orange-600' to="/login">Login</Link> </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;