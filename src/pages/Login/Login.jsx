import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const Login = () => {
    const { loginUser, signInWithGoogle } = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault();

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                // navigate(location.state ? location.state : '/');
                e.target.reset();

            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSignin = () => {

        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                // navigate(location.state ? location.state : '/');
            })
            .catch(error => console.error(error))
    }

    return (
        <div className=" min-h-screen bg-base-200">
            <div className=" w-3/4 m-auto border-4">
                <div className="hero-content w-3/4 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:w-1/4 lg:text-left">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 md:w-1/2  shadow-2xl bg-base-100">

                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center mb-3">Don&apos;t have an account please <Link
                            className="text-blue-600 font-bold" to="/signup">Signup</Link></p>
                    </div>
                </div>
            </div>

            <div className="divider  w-3/4 m-auto  mt-3">OR</div>

            <div className="mx-auto w-1/2 text-center text-xl">
                <p className="mt-2">Login With Google</p>
                <button onClick={handleGoogleSignin} className="btn w-full my-4  btn-primary">

                    Google
                </button>


            </div>

        </div>
    );
};

export default Login;