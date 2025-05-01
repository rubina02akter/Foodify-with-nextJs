'use client'
import {useState,useEffect} from 'react'

export default function () {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // Extract unique category names
        const allCategories = [...new Set(data.map(item => item.category))];
        setCategories(allCategories);
      });
  }, []);


  return (
    <div className="min-h-screen ">
      {categories.map((category, index) => (
       <div className=' grid grid-cols-1 gap-4'>
         <button 
          key={index}
          className="bg-red-800 text-white  btn"
        >
          {category}
        </button>
       </div>
      ))}
    </div>
  );
}