'use client';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarTickets, TechnicianSelect, TicketDetailCalendar } from '@/components';
import { getInfoTicketCalendar, getTechnicianTicketsForCalendar } from '@/services';

const UserTicketss = () => {
  const [events, setEvents] = useState([
    {
      title: 'Hoy',
      start: format(new Date(), 'yyyy-MM-dd'),
      color: 'gray'
    },
  ])
  const technicians = useSelector(state => state.options.technicians.technicians)
  const companyId = useSelector(state => state.auth.user._id)
  const handleChange = getTechnicianTicketsForCalendar(setEvents, companyId)
  const [infoTicket, setInfoTicket] = useState({})
  const handleEventClick = getInfoTicketCalendar(setInfoTicket)

  return (
    <div className='flex flex-col items-center justify-center'>
      <TechnicianSelect technicians={technicians} handleChange={handleChange} />
      <div className='flex'>
        <CalendarTickets events={events} handleEventClick={handleEventClick} />
        {!!Object.keys(infoTicket).length && <TicketDetailCalendar infoTicket={infoTicket} />}
      </div>


    </div>
  );
};

export default UserTicketss;