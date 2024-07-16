import { createContext, useEffect, useState } from 'react';
import { app } from '../../Firebase/firebase.config';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth(app);
export const AuthContext = createContext();

const MyContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then(async result => {
                const user = result.user;
                const tokenInfo = { email: user.email };
                const response = await fetch('https://foodi-server-two.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(tokenInfo)
                });
                const data = await response.json();
                localStorage.setItem('foodi', data.token);
                setLoader(false);
                return result;
            })
            .catch(err => {
                setLoader(false);
                throw err;
            });
    };

    const logOut = () => {
        localStorage.removeItem('foodi');
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loader,
        createUser,
        logOut,
        signIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default MyContext;
