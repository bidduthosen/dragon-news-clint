import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    /*-----------------
        createUserWithEmailAndPassword
     --------------------*/
     const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
     }

    /*-----------------
        signInWithPopup
     --------------------*/
    const signInGoogle = (provider) =>{
        return  signInWithPopup(auth, provider);
    }
    /*-----------------
        signOut
     --------------------*/
    const logOut =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('state change ', currentUser);
            setUser(currentUser);
        })
        return ()=> unSubscribe();
    },[])

    const value = {user, signInGoogle, logOut, createUser}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;