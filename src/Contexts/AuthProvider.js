import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    /*-----------------
        createUserWithEmailAndPassword
     --------------------*/
     const createUser =(email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
     }

     /*-----------------
        signInWithEmailAndPassword
     --------------------*/
     const signInWithPass=(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
     }

    /*-----------------
        signInWithPopup
     --------------------*/
    const signInGoogle = (provider) =>{
        setLoader(true)
        return  signInWithPopup(auth, provider);
    }
    /*-----------------
        signOut
     --------------------*/
    const logOut =()=>{
        setLoader(true)
        return signOut(auth);
    }
    /*-----------------
        updateProfile
     --------------------*/
    const updateUserProfile = (profile) =>{
        setLoader(true)
        return updateProfile(auth.currentUser, profile);
    }

    const emailVerify = () =>{
        setLoader(false)
        return sendEmailVerification(auth.currentUser);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('state change ', currentUser);
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoader(false);
        })
        return ()=> unSubscribe();
    },[])

    const value = {user, 
        loader,
        setLoader,
        signInGoogle,
        updateUserProfile, 
        logOut, 
        createUser,
        emailVerify, 
        signInWithPass}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;