'use client'
import Link from 'next/link';
import {useState,useEffect} from 'react'

export default function menu() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // Extract unique category names
        const allCategories = [...new Set(data.map(item => item.category))];
        setCategories(allCategories);
        console.log(allCategories);
      });
  }, []);


  return (
    <div className="min-h-full bg-[#D4C3BE] pt-6 pl-6">
      {categories.map((category, index) => (
      <div className='grid grid-cols-1 gap-4'>
         <div className='col-span-1'>
        <Link href={`/menu/${category}`}>
        <button 
          key={index}
          className="bg-red-800 text-white w-full btn"
        >
          {category}
        </button>
        </Link>
       </div>

       <div className='col-span-3'>
         
       </div>
      </div>
      ))}
    </div>
  );
}