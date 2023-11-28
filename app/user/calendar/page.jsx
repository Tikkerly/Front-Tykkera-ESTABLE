'use client';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { CalendarTickets, TechnicianSelect, TicketDetailCalendar } from '@/components';
import { getInfoTicketCalendar, getTechnicianTicketsForCalendar } from '@/services';
import ModalEventCalendar from '@/components/ModalEventCalendar/ModalEventCalendar';
import styles from './styles.module.css'

const UserTicketss = () => {
  const [events, setEvents] = useState([])
  const [technicians, setTechnicians] = useState([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const globalStateTechnicians = useSelector(state => state.options.technicians)
  const companyId = useSelector(state => state.auth.user._id)
  const handleChange = getTechnicianTicketsForCalendar(setEvents, companyId)
  const [infoTicket, setInfoTicket] = useState({})
  const handleEventClick = getInfoTicketCalendar(setInfoTicket,setShowEventModal)
  useEffect(()=>{
    setTechnicians(globalStateTechnicians)
    getTechnicianTicketsForCalendar(setEvents, companyId)() 
  },[globalStateTechnicians])

  return (
    <div className={styles.container}>
      <TechnicianSelect technicians={technicians} handleChange={handleChange} />
      <div className='flex'>
        <CalendarTickets events={events} handleEventClick={handleEventClick} />
        {!!Object.keys(infoTicket).length && <ModalEventCalendar  isVisible={showEventModal} onClose={() => setShowEventModal(false)} infoTicket={infoTicket} />}
      </div>


    </div>
  );
};

export default UserTicketss;