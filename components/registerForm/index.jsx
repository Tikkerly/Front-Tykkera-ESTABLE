'use client';
import React, { useState } from 'react';
import { USER_ROUTES } from '@/routes/routes';
import { validation } from '@/utils';
import axios from 'axios';


const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (e) => {
        setErrors(validation('register', { ...formData, [e.target.name]: e.target.value }));
        setFormData({ ...formData, [e.target.name]: e.target.value });
        const props = Object.keys(validation('register', { ...formData, [e.target.name]: e.target.value }));
        if ( !props.length) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const user = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await axios.post(USER_ROUTES.registerUser, user);
            alert('Registro exitoso');
            console.log(response.data);
        } catch (error) {
            alert('Error durante el registro');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-4">
                <div className="absolute left-2 top-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path d="M4.5 4.5C4.5 6.981 6.519 9 9 9C11.481 9 13.5 6.981 13.5 4.5C13.5 2.019 11.481 0 9 0C6.519 0 4.5 2.019 4.5 4.5ZM17 19H18V18C18 14.141 14.859 11 11 11H7C3.14 11 0 14.141 0 18V19H17Z" fill="#333333" />
                    </svg>
                </div>
                <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
                    placeholder="Nombre de usuario"
                    value={formData.username}
                    onChange={handleChange}
                /> {errors.username && <p className="text-red-500">{errors.username}</p>}
            </div>

            <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-4">
                <div className="absolute left-2 top-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5.25L2.25 4.5H21.75L22.5 5.25V18.75L21.75 19.5H2.25L1.5 18.75V5.25ZM3 6.8025V18H21V6.804L12.465 13.35H11.55L3 6.8025ZM19.545 6H4.455L12 11.8035L19.545 6Z" fill="#333333" />
                    </svg>
                </div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                /> {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>


            <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-4">
                <div className="absolute left-2 top-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g opacity="0.3">
                            <path d="M20 12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7Z" fill="#333333" />
                        </g>
                    </svg>
                </div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                /> {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>

            <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-4">
                <div className="absolute left-2 top-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g opacity="0.3">
                            <path d="M20 12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7Z" fill="#333333" />
                        </g>
                    </svg>
                </div>
                <input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
                    placeholder="Confirmar contraseña"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                /> {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
            </div>

            <div className="mt-4">
                <button
                    disabled={isDisabled}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    href="/register"
                >
                    Registrarse
                </button>
            </div>
        </form>
    );
};

export default Registration;