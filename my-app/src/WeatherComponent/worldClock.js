import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

function WorldClock() {
  const  timezone="Asia/India"
  const [time, setTime] = useState(moment.tz(timezone).format('h:mm:ss A'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment.tz(timezone).format('h:mm:ss A'));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    <div>
      <h1>{timezone}</h1>
      <p>{time}</p>
    </div>
  );
}

export default WorldClock;
