import axios from 'axios'
import { USER_ROUTES } from '@/routes/routes';

const eventColor = (status) => {
    //El color de los eventos dependerá del estado del ticket. Puedes modificarlo aquí.
    switch (status) {
        case 'Pendiente':
            return '#4285f4'
        case 'Completado':
            return 'green'
        case 'Rechazado':
            return 'red'
        default:
            return 'gray'
    }
}

const getTechnicianTicketsForCalendar = (setEvents, companyId) => {
    return async (event) => {
        const _id = event.target.value;
        const { data } = await axios.get(`${USER_ROUTES.getTicketsByTechnician}/${_id}/${companyId}`);
        const tickets = data.tickets;
        const modelEvents = tickets.map(ticket => {
            return {
                id: ticket._id,
                title: ticket.serviceDescription,
                start: ticket.startDate,
                end: ticket.endDate,
                color: eventColor(ticket.ticketStatus), //Invoca a la función eventColor de arriba.
                textColor: 'white' // Puedes ajustar el color del texto de los eventos. También puedes crear una función arriba similar a eventColor.
            }
        })
        setEvents(modelEvents)
    }
}

export default getTechnicianTicketsForCalendar