import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../components/firebase/firebase.config";

const auth = getAuth(app);

const Signup = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User 
    console.log(user)
    const createUser = (email, password) => {
        // toTry: We can comment the setLoading for check.
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password);
    };

console.log (createUser)
    // User Login
    // const login = (email, password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password);
    // };

    // SignOut
    // const signOut = (auth) => {
    //     setLoading(true);
    //     return auth.signOut();
    // };

    // listening on auth state change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, [])


    // const { createUser } = useContext(AuthContext);
    // console.log( createUser)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log('User created:', result.user);
                setUser(result.user)
                // Add any post-signup logic here (e.g., redirect)
            })
            .catch(error => {
                console.error('Error during signup:', error);
                // Optionally, display error to the user
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create Account Now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
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
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            <p>Already have an account? <a className="font-bold text-blue-700" href="login">Go for login</a></p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
