import Link from "next/link";

export default function Banner4() {
  return (
    <div className="bg-hero-3 h-full relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-6 text-center py-32 ">
        <div>
          <h2 className="font-bold text-3xl">
            Taste Our Delicious <br />
            Best Foods
          </h2>
        <Link href='/order-now'><button className='btn my-6'>Order Delicious Food Now!</button></Link>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour.
          </p>
        </div>

       
      </div>
    </div>
  );
}
