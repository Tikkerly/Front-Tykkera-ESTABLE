"use client"
import { Bar } from "react-chartjs-2";
import {
    CategoryScale,
    Chart,
    LinearScale,
    BarController,
    BarElement,
    Legend,
    Tooltip
} from "chart.js";
import { GraphData } from "@/services";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { CircularProgress } from '@mui/material';
import styles from './styles.module.css'

Chart.register(CategoryScale, LinearScale, BarController, BarElement, Legend, Tooltip);



export default function BarGraph({ route, title }) {
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
                        <Bar data={dataGraph} options={options} />
                    </>
                    :
                    <h3>Error al cargar la información.</h3>
            }
        </div>
    );
};