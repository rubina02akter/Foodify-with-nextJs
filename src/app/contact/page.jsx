
export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            We'd love to hear from you! Whether you have a question, feedback, or a business inquiry, feel free to reach out.
          </p>
        </div>

        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Information</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-medium text-gray-700">Address:</h3>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Email:</h3>
                <p>info@example.com</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Phone:</h3>
                <p>*********</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Office Hours:</h3>
                <p>Sun–Thu: 9 AM – 6 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message here"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#ba0120] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
