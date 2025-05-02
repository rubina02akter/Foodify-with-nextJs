
import Image from 'next/image'
import bg from '../../../public/home/banner.jpg'

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 py-24 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">About Foodify</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Welcome to <span className="text-red-500 font-semibold">Foodify</span> – your go-to platform for browsing delicious meals, placing orders, and enjoying the food you love. Built with ❤️ using modern web technologies.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image or illustration */}
          <div className="w-full h-[300px] relative">
            <Image
              src={bg}
              alt="About Foodify"
              fill
              className="rounded-lg object-cover shadow-md"
            />
          </div>

          {/* About Description */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-600 mb-4">
              Foodify is a frontend-only food ordering platform developed using <strong>Next.js (App Router)</strong> and <strong>Tailwind CSS</strong>. We use <strong>JSON data</strong> to simulate restaurant meals, chef info, and ordering systems. It's responsive, user-friendly, and designed with simplicity in mind.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Explore a variety of dishes (pizza, burgers, desserts, drinks)</li>
              <li>Add food to cart and view real-time cart updates</li>
              <li>Authenticate via <strong>Google</strong> or <strong>GitHub</strong> using NextAuth</li>
              <li>Access your dashboard to view profile and orders</li>
              <li>Fully responsive with toast notifications and dark mode support</li>
            </ul>
          </div>
        </div>

        {/* Mission/CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We aim to create a seamless and fun food browsing experience where users can discover, select, and track their favorite dishes — all from one modern web platform. No backend? No problem — we simulate it all with well-structured JSON data!
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-white">
            <div className="bg-gray-800 py-4 rounded-md">Next.js</div>
            <div className="bg-gray-800 py-4 rounded-md">Tailwind CSS</div>
            <div className="bg-gray-800 py-4 rounded-md">NextAuth</div>
            <div className="bg-gray-800 py-4 rounded-md">JSON Data</div>
          </div>
        </div>
      </div>
    </div>
  )
}

 
