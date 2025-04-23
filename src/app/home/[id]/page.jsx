
'use client';
import { useEffect, useState } from 'react';

export default function page() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const { name, category, details } = data; // destructuring
        setInfo({ name, category,details });
      });
  }, []);

  return (
    <div className="p-4 font-bold min-h-screen">
      <h2 className="text-lg font-bold">Dish Info</h2>
      <p>Name: {name}</p>
     
    </div>
  );
}


