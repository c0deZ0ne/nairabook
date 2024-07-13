import { useEffect, useState } from 'react';
import moment from 'moment';
const useDateFormat = (date: string) => {
  const [timePassed, setTimePassed] = useState('');
  const calculateTimePassed = () => {
    // Format the time passed
    const parsedDate = moment(date);

    // Format the date as "Feb 3 Thurs 23"
    const formattedDate = parsedDate.format('MMM D ddd YY');

    setTimePassed(formattedDate);
  };
  useEffect(() => {
    // Initial calculation
    calculateTimePassed();

    // Update every minute
    const intervalId = setInterval(() => {
      calculateTimePassed();
    }, 60000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [date]);

  return timePassed;
};

export default useDateFormat;
