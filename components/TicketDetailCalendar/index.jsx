export default function TicketDetailCalendar({ infoTicket }) {
    return (
        <div>
            <h1>{infoTicket.company.name}</h1>
            <h2>Información del ticket seleccionado:</h2>
            <h3>Nombre del cliente: {infoTicket.client.name}</h3>
            <h3>Nombre del técnico: {infoTicket.technician.name}</h3>
            <h3>Fecha de inicio del servicio: {infoTicket.startDate}</h3>
            <h3>Fecha de fin del servicio: {infoTicket.endDate}</h3>
            <h3>Estado del servicio: {infoTicket.status}</h3>
            <h3>Método de pago: {infoTicket.paymentMethod}</h3>
            <h3>Tipo de servicio: {infoTicket.type}</h3>
            <h3>Descripción del servicio: {infoTicket.description}</h3>
            <h3>Costo: ${infoTicket.cost}</h3>
            <h3>Cobrado: ${infoTicket.ammount}</h3>
            <h3>IVA: ${infoTicket.IVA}</h3>
            <h3>Otros: ${infoTicket.others}</h3>
            <h3>Utilidad: ${infoTicket.utility}</h3>
        </div>
    )
}