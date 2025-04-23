'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function page() {

  const {id} = useParams();
  console.log(id);

  const [info, setInfo] = useState([]);


  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const findInfo = data.find((cardDetail)=>parseInt(cardDetail.id) === parseInt(id)) 
        setInfo(findInfo)

      });
  }, []);
  console.log(info);

  const{name,image,title} = info;

  console.log(name);



  return (
    <div className="p-4 font-bold min-h-screen">
    <h2 className="text-lg font-bold">{name}</h2>
    <Image src={image} width={500} height={500} alt='food' />
   
   
  </div>
  )
}
