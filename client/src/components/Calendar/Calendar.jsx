import { useState, useEffect } from "react";
import { Typography, Paper, Box, Link } from "@mui/material";

function Calendar({ currentMonth }) {
  const [calendarData, setCalendarData] = useState({});
  const today = new Date();

  useEffect(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    if (!calendarData[`${year}-${month}`]) {
      setCalendarData(prevData => ({
        ...prevData,
        [`${year}-${month}`]: Array(daysInMonth).fill("")
      }));
    }
  }, [currentMonth]);

  const handleLinkChange = (day, event) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const newData = { ...calendarData };
    if (!newData[`${year}-${month}`]) {
      newData[`${year}-${month}`] = [];
    }
    newData[`${year}-${month}`][day - 1] = event.target.value;
    setCalendarData(newData);
  };

  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<Box key={`empty-${i}`} className="bg-transparent" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayData = calendarData[`${year}-${month}`]?.[day - 1] || "";
      const isToday = year === today.getFullYear() && month === today.getMonth() && day === today.getDate();
      
      days.push(
        <Paper 
          key={day} 
          className={`aspect-square p-2 flex flex-col justify-between transition-all duration-300 ease-in-out hover:scale-105 ${
            isToday ? 'bg-white/50 border-2 border-borger' : 'bg-white/15'
          }`} 
          elevation={3}
        >
          <Typography variant="subtitle1" className="font-bold">
            {day}
          </Typography>
          {dayData ? (
            <Link 
              href={dayData} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-2 py-1 bg-pink-500 text-white no-underline rounded text-xs text-center hover:bg-pink-600 transition-colors duration-300"
            >
              Event Link
            </Link>
          ) : (
            <input
              type="text"
              placeholder="Add event link"
              value={dayData}
              onChange={(event) => handleLinkChange(day, event)}
              className="w-full p-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          )}
        </Paper>
      );
    }

    return days;
  };

  return (
    <Box className="w-full max-w-6xl mx-auto">
      <Box className="grid grid-cols-7 bg-gray-100 py-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <Typography key={day} variant="subtitle1" className="text-center font-bold">
            {day}
          </Typography>
        ))}
      </Box>
      <Box className="grid grid-cols-7 gap-2 p-2">
        {renderCalendarDays()}
      </Box>
    </Box>
  );
}

export default Calendar;