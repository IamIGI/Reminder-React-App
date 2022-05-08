import React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Header() {
    return (
        <header>
            <h1>
                {' '}
                <CalendarTodayIcon fontSize="large" /> Reminder
            </h1>
        </header>
    );
}

export default Header;
