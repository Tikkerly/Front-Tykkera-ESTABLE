// 'use client';
// import React, { useState } from 'react';
// import { Form, Input, Button, message } from 'antd';
// import { GoogleOutlined } from '@ant-design/icons';



// const LoginForm = () => {
//     const [form] = Form.useForm();
//     const [loading, setLoading] = useState(false);
//     const [showMailIcon, setShowMailIcon] = useState(true);
//     const [showLockIcon, setShowLockIcon] = useState(true);

//     const onFinish = async (values) => {
//         setLoading(true);
//         try {

//             message.success('Logged in successfully');
//         } catch (error) {
//             message.error('Incorrect email or password');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//             setShowMailIcon(value === '');
//         } else if (name === 'contrasena') {
//             setShowLockIcon(value === '');
//         }
//     };

//     return (
//         <Form form={form} onFinish={onFinish}>

//             <Form.Item
//                 name="email"
//                 rules={[{ required: true, message: 'Please input your email!' }]}
//             >
//                 <div className="relative w-64 h-10 bg-gray-200 rounded-lg">
//                     <div className="absolute left-2 top-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                         </svg>
//                     </div>
//                     <input type="text" placeholder="Correo electrónico" className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 rounded-lg" />
//                 </div>

//             </Form.Item>

//             <Form.Item
//                 name="contrasena"
//                 rules={[{ required: true, message: 'Please input your password!' }]}
//             >
//                 <div className="relative w-64 h-10 bg-gray-200 rounded-lg">
//                     <div className="absolute left-2 top-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
//                             <path d="M16 10C16 8.897 15.103 8 14 8H13V5C13 2.243 10.757 0 8 0C5.243 0 3 2.243 3 5V8H2C0.897 8 0 8.897 0 10V18C0 19.103 0.897 20 2 20H14C15.103 20 16 19.103 16 18V10ZM5 5C5 3.346 6.346 2 8 2C9.654 2 11 3.346 11 5V8H5V5Z" fill="#333333" />
//                         </svg>
//                     </div>
//                     <input type="text" placeholder="Correo electrónico" className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 rounded-lg" />
//                 </div>
//             </Form.Item>

//             <Form.Item>
//                 <Button block type="primary" htmlType="submit" loading={loading} className="text-black">
//                     Iniciar sesión
//                 </Button>
//             </Form.Item>

//             <Form.Item>
//                 <Button type='link' href="/register">
//                     Registrarme
//                 </Button>
//             </Form.Item>

//             <Form.Item>
//                 <Button type='link' >
//                     Olvide mi contraseña
//                 </Button>
//             </Form.Item>

//             <Form.Item>
//                 <Button type='link' className='text-black'>
//                     <GoogleOutlined /> Iniciar sesión con Google
//                 </Button>
//             </Form.Item>
//         </Form>
//     );
// };

// export default LoginForm;