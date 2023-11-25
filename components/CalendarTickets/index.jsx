'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

export default function CalendarTickets({ events, handleEventClick }) {
    const plugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];
    const initialView = 'dayGridMonth';
    const headerToolBar = {
        start: '',
        center: 'title',
        end: 'today prev,next',
    };
    const height = '800px';
    const titleFormat = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    };

    

    return (
        <FullCalendar
            plugins={plugins}
            initialView={initialView}
            headerToolbar={headerToolBar}
            height={height}
            locale={esLocale}
            selectable={true}
            titleFormat={titleFormat}
            themeSystem='bootstrap5'
            events={events}
            eventClick={handleEventClick}
        />
    )
}