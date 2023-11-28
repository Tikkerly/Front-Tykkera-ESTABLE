"use client"
import { Bar } from "react-chartjs-2";
import {
    CategoryScale,
    Chart,
    LinearScale,
    BarController,
    BarElement
} from "chart.js";
import { useSelector } from "react-redux";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { CircularProgress } from '@mui/material';
import { USER_ROUTES } from "@/routes/routes";

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

/*const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
        {
            label: 'Ventas',
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',  // Color para Enero
                'rgba(54, 162, 235, 0.5)', // Color para Febrero
                'rgba(255, 206, 86, 0.5)', // Color para Marzo
                'rgba(75, 192, 192, 0.5)', // Color para Abril
                'rgba(153, 102, 255, 0.5)', // Color para Mayo
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',   // Borde para Enero
                'rgba(54, 162, 235, 1)',  // Borde para Febrero
                'rgba(255, 206, 86, 1)',  // Borde para Marzo
                'rgba(75, 192, 192, 1)',  // Borde para Abril
                'rgba(153, 102, 255, 1)', // Borde para Mayo
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
        },
    ],
};
*/

const options = {
    scales: {
        y: {
            beginAtZero: true
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
                const backgroundColor = ["green", "yellow", "red"];
                const totalCompleted = tickets.filter(ticket => ticket.ticketStatus === "Completado").length;
                const totalPendant = tickets.filter(ticket => ticket.ticketStatus === "Pendiente").length;
                const totalCancelled = tickets.filter(ticket => ticket.ticketStatus === "Cancelado").length;
                const dataGraph = {
                    labels,
                    datasets: [
                        {
                            label: 'Tickets',
                            backgroundColor,
                            data: [totalCompleted, totalPendant, totalCancelled]
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
        <div className="w-1/2 h-1/2">
            {loadingDataGraph ?
                <>
                    <CircularProgress />
                    <h1>Cargando información...</h1>
                </>
                :
                dataGraph ?
                    <Bar data={dataGraph} options={options} />
                    :
                    <h3>Error al cargar la información.</h3>
            }
        </div>
    );
};