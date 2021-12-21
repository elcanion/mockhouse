import { createContext, useContext, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({});

    async function logout() {
        localStorage.clear('phoneNumber')
        return await signOut(auth);
    }

    return (
        <AuthContext.Provider value={{ currentUser, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}