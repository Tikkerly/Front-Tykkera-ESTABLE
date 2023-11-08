'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import { validation } from '@/utils';





const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (e) => {
        setErrors(validation('login', { ...formData, [e.target.name]: e.target.value }));
        setFormData({ ...formData, [name]: value });
        const props = Object.keys(validation('register', { ...formData, [e.target.name]: e.target.value }));
        if ( !props.length) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    };


    const handleSubmit = async (values) => {
        setLoading(true);
        try {

            message.success('Logged in successfully');
        } catch (error) {
            message.error('Incorrect email or password');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setShowMailIcon(value === '');
        } else if (name === 'contrasena') {
            setShowLockIcon(value === '');
        }
    };

    return (
        <div className="">
            <h1 className="text-4xl mb-5">Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-4">
                    <label htmlFor="email"></label>
                    <div className="absolute left-2 top-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <path d="M4.5 4.5C4.5 6.981 6.519 9 9 9C11.481 9 13.5 6.981 13.5 4.5C13.5 2.019 11.481 0 9 0C6.519 0 4.5 2.019 4.5 4.5ZM17 19H18V18C18 14.141 14.859 11 11 11H7C3.14 11 0 14.141 0 18V19H17Z" fill="#333333" />
                        </svg>
                    </div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-black rounded-lg"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-4">
                    <label htmlFor="password"></label>
                    <div className="absolute left-2 top-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                            <path d="M16 10C16 8.897 15.103 8 14 8H13V5C13 2.243 10.757 0 8 0C5.243 0 3 2.243 3 5V8H2C0.897 8 0 8.897 0 10V18C0 19.103 0.897 20 2 20H14C15.103 20 16 19.103 16 18V10ZM5 5C5 3.346 6.346 2 8 2C9.654 2 11 3.346 11 5V8H5V5Z" fill="#333333" />
                        </svg>
                    </div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Contraseña'
                        className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-black rounded-lg"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-2">
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        className="mr-2 leading-tight"
                        value={formData.remember}
                        onChange={handleChange}
                    />
                    <label htmlFor="remember" className="text-sm">Recordarme</label>
                </div>

                <div className="mt-2 flex items-center">
                    <Link href="/forgetPassword" className="text-sm mt-1">Olvidaste tu contraseña?</Link>
                </div>
                <Link href="/register" className="text-sm mt-1">Registrarme</Link>
                <div className="mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <button type="submit">Iniciar sesión</button>
                </div>
            </form>

            <div className="mt-4">
                <button className="mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <GoogleIcon/>
                    <span className="ml-2">Iniciar sesión con Google</span>
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
