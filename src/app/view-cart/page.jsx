"use client";
import Image from "next/image";
import UseAuth from "../ContextApi/UseAuth";

export default function page() {
  const { cart } = UseAuth();
  console.log(cart);

  return (
    <div className="min-h-screen ">
      <div className="grid grid-cols-4 gap-4">
        {cart.map((data) => {
          return (
            <>
              <div className="font-thin text-start border p-4 bg-[#BA0120] text-white rounded-br-4xl rounded-tl-4xl ">
                <div>
                  <Image
                    src={data.image}
                    width={500}
                    height={100}
                    alt="food"
                    className="h-[200px] rounded-br-4xl rounded-tl-4xl object-cover overflow-hidden"
                  />
                  <h2>Name:{data.name}</h2>

                  <h2>Title: {data.title}</h2>
                  <p>Price: {data.price}$</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
