import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile}from 'firebase/auth'
import { useState } from 'react';
import app from '../Firebase/firebase.inite';
import { useEffect } from 'react';
export const authContext=createContext()
const AuthContext = ({children}) => {
    const [user,setUser]=useState('');
    const [loaging,setLoading]=useState(true)
    const auth=getAuth(app)
    useEffect(()=>{
        const unsubcriber = onAuthStateChanged(auth,currentUser=>{
            
                setUser(currentUser)
            
            setLoading(false)
            })
            return ()=>unsubcriber();
        },[])
    const googleLogin=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const GitHubLogin=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const signInEmailAndPassword=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const profileUpdate=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    
    const AuthInfo={
        user,
        googleLogin,
        createUser,
        profileUpdate,
        signInEmailAndPassword,
        logOut,
        loaging,
        setLoading,
        GitHubLogin
    }
    return (
        <authContext.Provider value={AuthInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;