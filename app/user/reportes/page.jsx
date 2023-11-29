"use client";

import { excelUtils } from "@/utils";
import styled from "./styles.module.css";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useState } from "react";
import { USER_ROUTES } from "@/routes/routes";
import axios from "axios";
import { BarGraph, LineGraph } from "@/components";

const ReportesPage = () => {
    const { technicians } = useSelector(state => state.options)
    const { _id } = useSelector(state => state.auth.user);
    const token = Cookies.get('token')

    const [showDataTechnician, setShowDataTechnician] = useState({
        username: false,
        email: false,
        phone: false,
        documentType: false,
        document: false,
        paymentMethods: false,
        servicesType: false,
        address: false,
    })

    const [showDataServices, setShowDataServices] = useState({
        serviceType: false,
        serviceDescription: false,
        registerDate: false,
        startDate: false,
        endDate: false,
        amount: false,
        cost: false,
        utility: false,
        others: false,
        IVA: false,
        paymentMethod: false,
        status: false,
        isPaid: false,
        ticketStatus: false,
    })

    const ticketStatusCount = {
        Pendiente: 0,
        Aprobado: 0,
        Cancelado: 0,
        "En proceso": 0,
        Completado: 0,
        Cerrado: 0,
        Rechazado: 0,
    };

    const techniciansReport = async () => {
        const excelData = technicians.map((currentData) => {
            const newObj = {};
            for (const key in showDataTechnician) {
                if (showDataTechnician[key]) {
                    newObj[key] = currentData[key];
                }
            }
            return newObj;
        });
        await excelUtils(excelData, "Técnicos");
    };

    const handleTechnician = (e) => {
        const { name } = e.target;
        setShowDataTechnician({
            ...showDataTechnician,
            [name]: !showDataTechnician[name]
        })
    };

    const handleService = (e) => {
        const { name } = e.target;
        setShowDataServices({
            ...showDataServices,
            [name]: !showDataServices[name]
        })
    };

    const servicesReport = async () => {
        const { data } = await axios.get(USER_ROUTES.getTicketsByCompany(_id),
            {
                headers: {
                    "x-token": token
                }
            })
        const tickets = data.tickets;
        const excelData = tickets.map((currentData) => {
            const newObj = {};
            for (const key in showDataServices) {
                if (showDataServices[key]) {
                    newObj[key] = currentData[key];
                }
            }
            return newObj;
        });
        await excelUtils(excelData, "Servicios");
    };
    const servicesAgentReport = async () => {
        const servicesAgent = {};

        dataServices.forEach((service) => {
            const { serviceClient_id } = service;
            if (servicesAgent.hasOwnProperty(serviceClient_id)) {
                servicesAgent[serviceClient_id] += 1;
            } else {
                servicesAgent[serviceClient_id] = 1;
            }
        });
        const servicesAgentArray = Object.entries(servicesAgent);

        const [serviceAgentWithMostTickets, numberOfTickets] =
            servicesAgentArray.reduce(
                (max, current) => (current[1] > max[1] ? current : max),
                ["", 0]
            );

        const excelData = dataServices.filter(
            (service) => service.serviceClient_id == serviceAgentWithMostTickets
        );
        await excelUtils(excelData, "Agentes de Servicios");
    };

    const clientCountServiceReport = async () => {
        const clients = {};
        dataServices.forEach((service) => {
            const { finalClient_id } = service;
            if (clients.hasOwnProperty(finalClient_id)) {
                clients[finalClient_id] += 1;
            } else {
                clients[finalClient_id] = 1;
            }
        });

        const clientsArray = Object.entries(clients);

        const [clientWithMostTickets, numberOfTickets] = clientsArray.reduce(
            (max, current) => (current[1] > max[1] ? current : max)
        );

        const excelData = dataServices
            .filter((service) => service.finalClient_id == clientWithMostTickets)
            .map(({ serviceClient_id, ...rest }) => rest);
        await excelUtils(excelData, "Cliente Tickets");
    };
    const clientAmountServiceReport = async () => {
        const clients = {};
        dataServices.forEach((service) => {
            const { finalClient_id, amount } = service;
            if (clients.hasOwnProperty(finalClient_id)) {
                clients[finalClient_id] += amount;
            } else {
                clients[finalClient_id] = amount;
            }
        });

        const clientsArray = Object.entries(clients);

        const [clientWithMostAmount, numberOfTickets] = clientsArray.reduce(
            (max, current) => (current[1] > max[1] ? current : max)
        );
        const excelData = dataServices
            .filter((service) => service.finalClient_id == clientWithMostAmount)
            .map(({ serviceClient_id, ...rest }) => rest);
        await excelUtils(newData, "Cliente Monto");
    };

    const ticketStatusReport = async () => {
        const excelData = [];
        dataServices.forEach((service) => {
            const { ticketStatus } = service;
            ticketStatusCount[ticketStatus] += 1;
        });
        excelData.push(ticketStatusCount);
        await excelUtils(excelData, "Estado de Tickets");
    };

    return (
        <div className={styled.containerr}>
            <div className="flex gap-20 mb-10 mt-10 ml-20">
            <BarGraph route={USER_ROUTES.statusGraph(_id)} title={<h4 className="font-bold avant-garde-bold text-Az1 text-2xl border-b border-dotted border-b-8 border-t-0">Estado de tickets</h4>}/>
            <BarGraph route={USER_ROUTES.utilityMonthGraph(_id)} title={<h4 className="font-bold avant-garde-bold text-Az1 text-2xl border-b border-dotted border-b-8 border-t-0">Utilidad por mes</h4>}/>
            <LineGraph route={USER_ROUTES.accumulatedUtility(_id)} title={<h4 className="font-bold avant-garde-bold text-Az1 text-2xl border-b border-dotted border-b-8 border-t-0">Utilidad acumulada durante el año actual</h4>}/>             
            </div>

            <div className="mb-20">
                <h4 className="font-bold avant-garde-bold text-Az1 text-4xl">Técnicos</h4>
                <div>
                    <p className="font-regular avant-garde-regular text-Az4 underline text-lg">Seleccione los datos del técnico</p>
                    <div className={styled.checks} id="checks">
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="username"
                                onChange={handleTechnician}
                            />
                            <label htmlFor="">Nombre</label>
                        </div>
                        <div className={styled.check}>
                            <input type="checkbox" name="email" onChange={handleTechnician} />
                            <label htmlFor="">Correo</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="documentType"
                                onChange={handleTechnician}
                            />
                            <label htmlFor="">Tipo de Documento</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="document"
                                onChange={handleTechnician}
        
                            />
                            <label htmlFor="">Documento</label>
                        </div>
                        <div className={styled.check}>
                            <input type="checkbox" name="phone" onChange={handleTechnician} />
                            <label htmlFor="">Télefono</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="serviceTypes"
                                onChange={handleTechnician}
                            />
                            <label htmlFor="">Tipo de Servicio</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="paymentMethods"
                                onChange={handleTechnician}
                            />
                            <label htmlFor="">Método de pago</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="address"
                                onChange={handleTechnician}
                            />
                            <label htmlFor="">Dirección</label>
                        </div>
                    </div>
                    <button
                        type="button"
                         className="avant-garde-bold font-bold text-gray px-5 py-2.5 rounded-full  bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"

                        onClick={techniciansReport}
                    >
                        Generate
                    </button>
                </div>
            </div>

            <div className="mb-20">
                <h4 className="font-bold avant-garde-bold text-Az1 text-4xl">Servicios</h4>
                <div>
                    <p className="font-regular avant-garde-regular text-Az4 underline text-lg">Seleccione la información del servicio</p>
                    <div className={styled.checks}>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="serviceType"
                                onChange={handleService}
                            />
                            <label htmlFor="">Tipo de Servicio</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="serviceDescription"
                                id=""
                                onChange={handleService}
                            />
                            <label htmlFor="">Descripción del servicio</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="registerDate"
                                id=""
                                onChange={handleService}
                            />
                            <label htmlFor="">Fecha de Registro</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="startDate"
                                id=""
                                onChange={handleService}
                            />
                            <label htmlFor="">Fecha de Inicio</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="endDate"
                                id=""
                                onChange={handleService}
                            />
                            <label htmlFor="">Fecha de Finalización</label>
                        </div>

                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="amount"
                                id=""
                                onChange={handleService}
                            />
                            <label htmlFor="">Monto</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="cost"
                                id=""
                                onChange={handleService}
                            />
                            <label htmlFor="">Costo</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="utility"
                                id=""
                                onChange={handleService}
                            />
                            <label htmlFor="">Utilidad</label>
                        </div>
                        <div className={styled.check}>
                            <input type="checkbox" name="others" id="" />
                            <label htmlFor="">Otros</label>
                        </div>
                        <div className={styled.check}>
                            <input type="checkbox" name="IVA" id="" />
                            <label htmlFor="">IVA</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="paymentMethod"
                                id=""
                                onChange={handleService}
                            />
                            <label htmlFor="">Método de pago</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="status"
                                id=""
                                onChange={handleService}
                            />
                            <label htmlFor="">Estado</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="ispaid"
                                id=""
                                onChange={handleService}
                            />
                            <label htmlFor="">Pagado</label>
                        </div>
                        <div className={styled.check}>
                            <input
                                type="checkbox"
                                name="ticketStatus"
                                id=""
                                onChange={handleService}
                            />
                            <label htmlFor="">Estado del ticket</label>
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    className="avant-garde-bold font-bold text-gray px-5 py-2.5 rounded-full  bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"
                    onClick={servicesReport}
                >
                    Generate
                </button>
            </div>


        </div>
    );
};

export default ReportesPage;
