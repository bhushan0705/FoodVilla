import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold mb-4 text-green-400">About Us</h1>
        <p className="max-w-2xl text-center text-lg mb-6">
          Welcome to our platform! We are dedicated to providing the best
          restaurant experiences, bringing you the finest places to eat,
          carefully curated for quality and service.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-green-300">
              Our Mission
            </h2>
            <p className="mt-2">
              Our goal is to help food lovers discover the best restaurants with
              authentic reviews and real-time recommendations.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-green-300">
              Why Choose Us?
            </h2>
            <p className="mt-2">
              We prioritize transparency, user experience, and high-quality
              recommendations to make your dining choices effortless.
            </p>
          </div>
        </div>

        <button className="mt-6 px-6 py-3 bg-green-500 rounded-lg hover:bg-green-700 transition-all duration-300">
          Explore Restaurants
        </button>
        <Link to="/" className="underline">
          Back to Home
        </Link>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default About;
