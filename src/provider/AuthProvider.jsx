import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../components/firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User 
    const createUser = (email, password) => {
        // toTry: We can comment the setLoading for check.
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // User Login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // SignOut
    const signOut = (auth) => {
        setLoading(true);
        return auth.signOut();
    };

    // listening on auth state change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        signOut
    };

    // Finally Rrturn Auth Provider
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;