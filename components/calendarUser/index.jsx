'use client';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'

export default class CalendarUser {
    constructor(container) {
        this.calendar = new Calendar(container, {
            plugins: [
                resourceTimelinePlugin,
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin
            ],
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'resourceTimelineWeek,dayGridMonth,timeGridWeek'
            },
            initialView: 'resourceTimelineWeek',
            nowIndicator: true,
            editable: true,
            selectable: true,
            selectMirror: true,
            resources: [
                {
                    id: 'a',
                    title: 'Paula',
                    eventColor: 'red',
                    background: 'red',
                    businessHours: {
                        daysOfWeek: [1, 2, 3, 4, 5], // Monday to Friday
                        startTime: '15:00', // Start time in HH:mm format
                        endTime: '17:00', // End time in HH:mm format
                    },
                },
                {
                    id: 'b',
                    title: 'Anthony Perez',
                    eventColor: 'green',
                    businessHours: {
                        daysOfWeek: [2, 3, 4, 5], // Tuesday to Friday
                        startTime: '10:00', // Start time in HH:mm format
                        endTime: '12:00', // End time in HH:mm format
                    },
                },
                {
                    id: 'c',
                    title: 'Maria Candela',
                    eventColor: 'orange',
                    businessHours: {
                        daysOfWeek: [1, 3, 5], // Monday, Wednesday, Friday
                        startTime: '08:00', // Start time in HH:mm format
                        endTime: '10:00', // End time in HH:mm format
                    },
                },
            ],
            initialEvents: [
                { title: 'Mantenimiento', start: new Date(), resourceId: 'a' },
                { title: 'Reparacion', start: new Date(), resourceId: 'b' },
                { title: 'Mantenimiento', start: new Date(), resourceId: 'c' }
            ],
            contentHeight: 600,
            container : container,
            eventClick: (eventInfo) => {
                console.log('Click en un evento');
            },
            select: (dateRange) => {
                console.log("Rango de fechas seleccionado en el calendario");
            }
        });
    }

    render() {
        this.calendar.render();
    }
}