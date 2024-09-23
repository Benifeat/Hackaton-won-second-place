import React, { createContext, useState, useEffect } from 'react';
import {login} from '../services/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
        setUser(JSON.parse(storedUser));
        }
    }, []);

    const log = async (credentials) => {
        const user = await login(credentials);
        setUser(user);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, log, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;