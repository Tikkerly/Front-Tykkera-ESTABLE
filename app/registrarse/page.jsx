'use client'
import { RegisterForm } from "@/containers"
import styles from './styles.module.css'
import logo from '../../public/LOGOTIPO-TYKKERA-PNG.png'
import Image from "next/image";
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';


const RegisterPage = () => {
  return (
    <div className={styles.container}>
            <div className={styles.slider}>
                <Image
                    src={logo}
                />
                <Link href='/' className={styles.home}>
                    <HomeIcon fontSize='large'/>
                    <h2 className={styles.back}>Volver a la página principal</h2>
                </Link>
            </div>
            <div className={styles.containerForm}>
                <div className={styles.block}>
                    <div className={styles.welcome}>
                        <h1>¡Hola!</h1>
                        <h2>Registrate y comienza</h2>
                    </div>
                    <RegisterForm/>
                </div>
            </div>
        </div>
  )
}

export default RegisterPage