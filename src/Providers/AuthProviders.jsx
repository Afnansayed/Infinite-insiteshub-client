import { createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
    //create user
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login with password
    const logIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    //google
    const googleProvider = new GoogleAuthProvider();
    const googleLog = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }
    //onauthState 
    useEffect(()=> {
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
    },[])
     const authInfo = {createUser,loading,logIn,user,googleLog}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};
AuthProviders.propTypes={
    children:PropTypes.node
}
export default AuthProviders;