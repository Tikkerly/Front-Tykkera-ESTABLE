"use client"
import { Line } from "react-chartjs-2";
import {
    CategoryScale,
    Chart,
    LinearScale,
    LineController,
    LineElement,
    Legend,
    Tooltip,
    PointElement
} from "chart.js";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { GraphData } from "@/services";
import { CircularProgress } from '@mui/material';
import styles from './styles.module.css'

Chart.register(PointElement, CategoryScale, LinearScale, LineController, LineElement, Legend, Tooltip)

export default function LineGraph ({route, title}) {
    const [dataGraph, setDataGraph] = useState(null)
    const [options, setOptions] = useState(null)
    const [loadingDataGraph, setLoadingDataGraph] = useState(true)
    const token = Cookies.get('token')
    useEffect(() => {
        GraphData(route, token, setDataGraph, setOptions, setLoadingDataGraph)
    }, [])
    return (
        <div className={styles.container}>
            {loadingDataGraph ?
                <>
                    <CircularProgress />
                    <h2>Cargando información...</h2>
                </>
                :
                dataGraph ?
                    <>
                        <h2>{title}</h2>
                        <Line data={dataGraph} options={options} />
                    </>
                    :
                    <h3>Error al cargar la información.</h3>
            }
        </div>
    )
}