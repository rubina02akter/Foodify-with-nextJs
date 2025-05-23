export default function ChooseUs() {
  return (
    <div className="py-4  shadow-lg">
      <h2 className="text-5xl  underline font-bold text-center  mb-12">
        Why Choose Us?
      </h2>

      <div className="w-11/12 mx-auto text-center">
        <div className="collapse my-4 collapse-arrow bg-white text-[#180905]  rounded-xl shadow">
          <input type="radio" name="why-choose-us" defaultChecked />
          <div className="collapse-title text-2xl text-[#71B51D] font-semibold ">
            🌱 Fresh & Quality Ingredients
          </div>
          <div className="collapse-content text-[#71B51D] font-thin">
            We partner with top chefs and trusted suppliers to ensure every dish is made with the freshest, highest-quality ingredients.
          </div>
        </div>

        <div className="collapse my-4 collapse-arrow bg-white text-[#DE8C00]  rounded-xl shadow">
          <input type="radio" name="why-choose-us" />
          <div className="collapse-title text-2xl  font-semibold ">
            🚚 Fast & Reliable Delivery
          </div>
          <div className="collapse-content text-base">
            Your food arrives hot and on time, every time. We prioritize efficiency and care in delivering your orders.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white text-[#99935A]  rounded-xl shadow">
          <input type="radio" name="why-choose-us" />
          <div className="collapse-title text-2xl  font-semibold ">
            🔒 Easy & Secure Ordering
          </div>
          <div className="collapse-content text-base">
            Our user-friendly platform with Google and GitHub login ensures a seamless and secure ordering experience.
          </div>
        </div>
      </div>
    </div>
  );
}
