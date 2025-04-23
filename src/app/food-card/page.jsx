"use client";
import Card from "./card";
import { useEffect, useState } from "react";

export default function page() {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div>
      
      <div className='grid grid-cols-3 gap-4 w-11/12 mx-auto my-12'>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
      </div>
    </div>
  );
}
