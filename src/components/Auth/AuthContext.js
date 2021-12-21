import { createContext, useContext, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import Login from '../../../pages/login';
import { Router, useRouter } from 'next/router';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const router = useRouter();

    async function logout() {
        localStorage.clear('phoneNumber')
        await signOut(auth);
        router.reload();
    }


    return (
        <AuthContext.Provider value={{ currentUser, logout, setCurrentUser }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}