import { createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";

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
    //logOut
    const logOut = () =>{
        return signOut(auth);
    }
    //onauthState 
    useEffect(()=> {
        onAuthStateChanged(auth, currentUser =>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setLoading(false);
            setUser(currentUser)
             //for jwt
             if (currentUser) {
                
                // console.log(loggedUser)
                  axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                      .then(() => {
                         // console.log('token response',res.data)
                      })
              }else{
                  axios.post('http://localhost:5000/logout',loggedUser,{withCredentials: true})
                  .then(() => {
                      //console.log(res.data)
                  })
              }
        })
    },[])

     const authInfo = {createUser,loading,logIn,user,googleLog,logOut}
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