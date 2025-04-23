"use client";
import Banner2 from "../Component/Banner2";
import { useEffect, useState } from "react";
import Card from "./card";


export default function home() {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  const menuCard = cards.slice(0,6);


  return (
    <div className='min-h-screen'>
   
    <Banner2 />
    <div className='w-11/12 mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
  
      {/* {menuCard.map((card) => {
        return <Card key={card.id} card={card} />;
      })} */}
    </div>
    </div>
  )
}
