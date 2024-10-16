import React from 'react';
import './Schedule.css';
import { NavbarCustom } from '../navbar/navbar_custom';

interface ScheduleItem {
    time: string;
    activities: { day: string; title: string; duration: string }[];
}

const scheduleData: ScheduleItem[] = [
    { time: '09:00 - 10:00', activities: [] },
    { time: '10:00 - 11:00', activities: [] },
    { time: '11:00 - 12:00', activities: [] },
    { time: '12:00 - 01:00', activities: [] },
    { time: '01:00 - 02:00', activities: [] },
];

const weeklyActivities = [
    { day: 'Monday', title: 'Abs Circuit', duration: '09:30 - 10:30' },
    { day: 'Tuesday', title: 'Rowing Workout', duration: '10:00 - 11:00' },
    { day: 'Wednesday', title: 'Restorative Yoga', duration: '09:00 - 10:15' },
    { day: 'Wednesday', title: 'Yoga Level 1', duration: '10:45 - 11:45' },
    { day: 'Thursday', title: 'Abs Circuit', duration: '09:30 - 10:30' },
    { day: 'Friday', title: 'Rowing Workout', duration: '10:00 - 11:00' },
    { day: 'Saturday', title: 'Abs Circuit', duration: '09:30 - 10:30' },
    { day: 'Sunday', title: 'Rowing Workout', duration: '11:00 - 12:30' },
];

// Generar colores aleatorios para cada actividad
const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Organizar actividades en función de las horas
scheduleData.forEach(slot => {
    slot.activities = weeklyActivities.filter(activity => {
        return activity.duration.startsWith(slot.time.split(' - ')[0]);
    });
});

const Schedule: React.FC = () => {
    return (
        <>
              <NavbarCustom></NavbarCustom>
              <div className="home">
                <p>
        <div className="schedule-container">
            <br /><br />
            <h2>Horarios de Actividades</h2>
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>Hora</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miércoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sábado</th>
                        <th>Domingo</th>
                    </tr>
                </thead>
                <tbody>
                    {scheduleData.map((slot, index) => (
                        <tr key={index}>
                            <td>{slot.time}</td>
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => {
                                const activity = slot.activities.find(activity => activity.day === day);
                                return (
                                    <td
                                        key={day}
                                        style={{
                                            backgroundColor: activity ? getRandomColor() : 'transparent',
                                            color: activity ? 'white' : 'black',
                                        }}
                                        className={activity ? 'activity' : ''}
                                    >
                                        {activity?.title || ''}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </p>
        </div>
        </>
    );
};

export default Schedule;
