'use client'
import { LoginForm } from "@/containers"
import styles from './styles.module.css'
import logo from '../../public/LOGOTIPO-TYKKERA-PNG.png'
import Image from "next/image";
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home'; 

export default function LoginPage() {
    return (
        <div className="h-screen w-screen flex">
            <div className="mx-62 w-62 bg-gray-500 flex flex-col items-center justify-center text-gray gap-16">
                <Image
                    src={logo}
                    style={{ width: '100%', maxWidth: '75%' }}
                    className="transition-transform duration-300 transform hover:scale-103 filter hover:brightness-110"
                />
                <Link href='/' className="absolute left-5 top-5 flex items-center gap-4">
                    <HomeIcon fontSize='large'/>
                    <h2 className={styles.back}>Volver a la página principal</h2>
                </Link>
            </div>
            <div className="h-screen bg-white flex flex-col items-center justify-center">
                <div className="mx-40 flex flex-col flex-wrap gap-24">
                    <div className="avant-garde-bold font-bold text-3xl font-bold text-gray-600">
                        <h1>¡Hola!</h1>
                        <h2 className="text-xl">Bienvenido de vuelta</h2>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}