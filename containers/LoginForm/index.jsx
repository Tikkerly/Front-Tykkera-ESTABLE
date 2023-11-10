'use client'
import { FormInputs, SubmitButton } from "@/components"
import { useState } from "react"
import { USER_ROUTES } from "@/routes/routes";
import { useDispatch } from "react-redux";
import { closureHandleSubmit } from "@/services";
import { login } from "@/redux/slices";
import styles from './styles.module.css'
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/navigation";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

export default function LoginForm() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const handleSubmit = closureHandleSubmit(USER_ROUTES.loginUser, formData, dispatch, login, setMessage, setLoading, router)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles.input}>
                <PersonIcon />
                <FormInputs
                    placeholder={'Ingrese su email.'}
                    name={'email'}
                    value={formData.email}
                    onChange={handleChange}
                    type={'email'}
                />
            </div>

            <div className={styles.input}>
                <LockIcon />
                <FormInputs
                    placeholder={'Ingrese su contraseña.'}
                    label={'Contraseña:'}
                    name={'password'}
                    value={formData.password}
                    onChange={handleChange}
                    type={'password'}
                />
            </div>
            <div className={styles.submitContainer}>
                <SubmitButton text={'Ingresar'} type={'submit'} />
                {loading && <h2>Cargando...</h2>}
                {message && <h2 className = {styles.message}>{message}</h2>}

                <Link href='/recuperar-contraseña' className={styles.link}>
                    <h2 className={styles.forgotPassword}>Olvidé mi contraseña</h2>
                </Link>

                <div className={styles.divisor}>
                </div>
                <button className={styles.googleButton}>
                    <GoogleIcon />
                    <h2>Ingresar con Google</h2>
                </button>
            </div>
        </form>
    )
}