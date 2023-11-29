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
import { useSelector } from "react-redux";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { CircularProgress } from '@mui/material';
import { USER_ROUTES } from "@/routes/routes";
import styles from './styles.module.css'

Chart.register(CategoryScale, LinearScale, BarController, BarElement, Legend, Tooltip);

const options = {
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Cantidad',
                color: 'black',
            },
        },
        x: {
            title: {
                display: true,
                text: 'Tickets',
                color: 'black'
            },
        }
    }
}

export default function BarGraph() {
    const { _id } = useSelector(state => state.auth.user);
    const [dataGraph, setDataGraph] = useState(null);
    const [loadingDataGraph, setLoadingDataGraph] = useState(true)
    const token = Cookies.get('token')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(USER_ROUTES.getTicketsByCompany(_id), {
                    headers: {
                        'x-token': token
                    }
                })
                const tickets = data.tickets;
                const labels = ["Completado", "Pendiente", "Cancelado"];
                const totalCompleted = tickets.filter(ticket => ticket.ticketStatus === "Completado").length;
                const totalPendant = tickets.filter(ticket => ticket.ticketStatus === "Pendiente").length;
                const totalCancelled = tickets.filter(ticket => ticket.ticketStatus === "Cancelado").length;
                const dataGraph = {
                    labels,
                    datasets: [
                        {
                            label: 'Completado',
                            backgroundColor: 'green',
                            data: [totalCompleted, 0, 0]
                        },
                        {
                            label: 'Pendiente',
                            backgroundColor: 'yellow',
                            data: [0, totalPendant, 0]
                        },
                        {
                            label: 'Cancelado',
                            backgroundColor: 'red',
                            data: [0, 0, totalCancelled]
                        }

                    ]
                }
                setDataGraph(dataGraph)
                setLoadingDataGraph(false)
            } catch (error) {
                setLoadingDataGraph(false)
            }

        }
        fetchData();
    }, [])
    return (
        <div className={styles.container}>
            {loadingDataGraph ?
                <>
                    <CircularProgress />
                    <h1>Cargando información...</h1>
                </>
                :
                dataGraph ?
                    <>
                        <h2>Estado de tickets</h2>
                        <Bar data={dataGraph} options={options} />
                    </>
                    :
                    <h3>Error al cargar la información.</h3>
            }
        </div>
    );
};