import React, { createContext, useState, useEffect } from 'react';
import { API_URL } from '../services/authApi';
import { jwtDecode } from 'jwt-decode';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const login = async ({ username, password }) => {
        try {
            const response = await fetch(`${API_URL}/users`);
            const users = await response.json();

            const foundUser = users.find(
                (user) => user.username === username && user.password === password
            );

            if (foundUser) {
                setUser(foundUser);
                setIsAuthenticated(true);
                localStorage.setItem('user', JSON.stringify(foundUser));
                return { success: true, user: foundUser };
            } else {
                return { success: false, message: 'Tên đăng nhập hoặc mật khẩu không đúng' };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'Server error' };
        }
    };

    const signup = async (username, full_name, phone, email, address, password) => {
        try {
            const response = await fetch(`${API_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    full_name,
                    phone,
                    email,
                    address,
                    password
                })
            });

            if (response.ok) {
                const newUser = await response.json();
                setUser(newUser);
                setIsAuthenticated(true);
                localStorage.setItem('user', JSON.stringify(newUser));
                return { success: true, user: newUser };
            } else {
                return { success: false, message: 'Signup failed' };
            }
        } catch (error) {
            error('Signup error:', error);
            return { success: false, message: 'Server error' };
        }
    }

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
    };

    const loginWithGoogle = (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log("Google login decoded info:", decoded);

            const googleUser = {
                id: decoded.sub,
                name: decoded.name,
                email: decoded.email,
                role: 'USER',
                provider: 'google'
            };

            setUser(googleUser);
            setIsAuthenticated(true);
            localStorage.setItem('user', JSON.stringify(googleUser));

            return { success: true, user: googleUser };
        } catch (error) {
            console.error('Google login error:', error);
            return { success: false, message: 'Google login failed' };
        }
    };

    // Kiểm tra quyền admin
    const isAdmin = () => {
        return user && user.role_id === 1;
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                loginWithGoogle,
                login,
                logout,
                isAdmin,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};