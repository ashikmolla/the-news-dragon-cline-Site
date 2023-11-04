import React, { createContext, useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.confige';
import { useState } from 'react';


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, courrentUser => {
            // console.log("auth Objerbation", courrentUser);
            setUser(courrentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        setLoading,
        setUser,
        createUser,
        logOut,
        signIn,
        signInWithGoogle
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;