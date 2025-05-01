'use client';

import { useState, useEffect } from "react";

export default function Review() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <section className="w-11/12 max-w-6xl mx-auto py-20  rounded-xl">
      <h2 className="text-4xl font-bold text-center text-[#BA0120] mb-12">
        What Our Customers Say
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {review.map((r, index) => (
          <div
            key={index}
            className="bg-white text-[#180905] shadow-md border border-[#BA0120] rounded-xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-xl font-semibold text-[#BA0120] mb-2">{r.name}</div>
            <p className="text-sm italic">"{r.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
