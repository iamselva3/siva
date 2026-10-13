import { useState, useEffect } from 'react';

export function useIST() {
  const [timeString, setTimeString] = useState<string>('');
  const [timeObj, setTimeObj] = useState<{ hours: string; minutes: string; seconds: string; ampm: string }>({
    hours: '12',
    minutes: '00',
    seconds: '00',
    ampm: 'PM',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC + 5h 30m
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(now);

      const hours = parts.find((p) => p.type === 'hour')?.value || '12';
      const minutes = parts.find((p) => p.type === 'minute')?.value || '00';
      const seconds = parts.find((p) => p.type === 'second')?.value || '00';
      const ampm = parts.find((p) => p.type === 'dayPeriod')?.value || 'PM';

      setTimeObj({ hours, minutes, seconds, ampm });
      setTimeString(`${hours}:${minutes}:${seconds} ${ampm} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return { timeString, ...timeObj };
}
