import { useState } from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Calendar from '../../components/Calendar/Calendar';

function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const goToPreviousMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    return (
        <Box component="main" aria-label="Editable Calendar" className="p-4">
            <Typography variant="h2" className="mb-4">Community Events Calendar</Typography>
            
            <Paper elevation={3} className="p-4 mb-4">
                <Typography variant="h5" className="mb-2">How to Use the Calendar</Typography>
                <Typography variant="body1">
                    This calendar displays upcoming community events, charity drives, and volunteer opportunities. 
                    Each day may contain information about events or initiatives you can participate in to help our community.
                </Typography>
            </Paper>

            <Box className="flex justify-between items-center mb-4">
                <Button onClick={goToPreviousMonth} startIcon={<ChevronLeft />}>
                    Previous
                </Button>
                <Typography variant="h4">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </Typography>
                <Button onClick={goToNextMonth} endIcon={<ChevronRight />}>
                    Next
                </Button>
            </Box>

            <Box className="calendar-container" aria-label="Interactive Calendar">
                <Calendar currentMonth={currentDate} />
            </Box>

            <Paper elevation={3} className="p-4 mt-4">
                <Typography variant="body2" color="textSecondary">
                    Note: This calendar is updated regularly with new events and opportunities. 
                    Check back often to stay informed about ways you can contribute to our community.
                </Typography>
            </Paper>
        </Box>
    );
}

export default CalendarPage;