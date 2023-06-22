import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const Login = () => {
    const { signIn } = useContext(AuthContext)
    
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    const handleGoogleSignIn = () => {
        signInWithPopup( auth, googleProvider )
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .then(error => console.log('error', error))
    }
    
    return (
        <div className="hero min-h-screen body-section">
            <form onSubmit={handleSignUp}>
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login your account!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit"></input>
                            </div>
                            <p className='text-center text-black'>New at Garir Dokan? <Link className='font-bold text-orange-600' to="/signup">Registration now</Link> </p>
                            <p className='mt-5 text-black'> Sign in with<Link className='font-bold text-blue-600' to="/login"> <button onClick={handleGoogleSignIn}>Google</button></Link> </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;