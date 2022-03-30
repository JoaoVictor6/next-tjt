import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    axios.get('/api/reminders').then(res => {
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <h1 className='text-4xl'>Home</h1>
    </>
  );
}
