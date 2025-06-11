"use client";
import Card from "./card";
import { useEffect, useState } from "react";

export default function Page() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  const topCards = [...cards].sort((a, b) => b.quantity - a.quantity); // highest quantity first
  const homeCards = topCards.slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 mx-auto my-12">
        {homeCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
