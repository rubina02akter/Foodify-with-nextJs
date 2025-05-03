"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function page() {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("/chefs.json")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto my-6">
  {chefs.map((chef) => (
    <div
      key={chef.id}
      className="bg-white shadow-xl rounded-3xl overflow-hidden p-6 transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="avatar">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 ">
            <Image
              src={chef.image}
              alt={chef.name}
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{chef.name}</h2>
        <p className="text-gray-600 text-sm">{chef.description}</p>
      </div>
    </div>
  ))}
</div>

  );
}
