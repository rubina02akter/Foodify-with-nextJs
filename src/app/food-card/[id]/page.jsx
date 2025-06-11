"use client";

import UseAuth from "@/app/ContextApi/UseAuth";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const { cart, setCart } = UseAuth();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const findInfo = data.find(
          (cardDetail) => parseInt(cardDetail.id) === parseInt(id)
        );
        setInfo(findInfo);
      });
  }, [id]);

  const handleCart = (item) => {
    setCart([...cart, item]);
  };

  if (!info) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500 text-xl">
        Loading...
      </div>
    );
  }

  const { name, image, price, description } = info;

  return (
    <div className="p-4 md:p-10 min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-64 md:h-auto">
        <Image src={image} width={500} height={500} alt="food" />
          
        </div>

        {/* Info Section */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <p className="text-lg text-gray-700 mb-4">{description}</p>
            <p className="text-xl font-bold text-[#ba0120]">Price: ${price}</p>
          </div>
          <button
            onClick={() => handleCart(info)}
            className="mt-6 w-full bg-[#ba0120] hover:bg-red-900 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
