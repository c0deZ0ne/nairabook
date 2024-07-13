import { useEffect, useState } from 'react';
import moment from 'moment';

const useDateFormat = (date: string) => {
  const [timePassed, setTimePassed] = useState('');

  useEffect(() => {
    const calculateTimePassed = () => {
      // Parse the date using Moment.js
      const parsedDate = moment(date);

      // Calculate the time passed using Moment's humanize function
      const timePassedText = parsedDate.isValid()
        ? parsedDate.fromNow()
        : 'Invalid Date';

      setTimePassed(timePassedText);
    };

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
