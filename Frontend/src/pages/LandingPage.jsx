import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';


function LandingPage() {
  return (
    <div className="LandingPage flex flex-col min-h-screen bg-cover bg-center rounded-2xl" style={{ backgroundImage: 'url(../../images/bg1.jpg)',  }}>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        
<section className="hero bg-yellow-400 py-16 px-4 md:px-8 lg:px-16 rounded-b-3xl shadow-xl"> {/* Main section with a vibrant yellow background, rounded bottom */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8"> {/* Responsive flex container */}
          {/* Left Part: Text and Button */}
          <div className="text-center md:text-left md:w-1/2 p-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-blue-800 leading-tight">
              Discover the Best Food Recommendations for Any Weather!
            </h1>
            <Link to="/app">
              <button className="bg-blue-600 text-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>

         {/* Right Part: Image */}
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <img
                  src="../../images/hero.jpg"
              alt="Delicious food recommendations for any weather"
              className="w-full max-w-md h-auto object-cover rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>

        {/* Key Features Section */}
        <section className="features py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature-card p-4 bg-blue-800 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
              <p>Get food recommendations tailored to your preferences and weather conditions.</p>
            </div>
            <div className="feature-card p-4 bg-blue-800 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">Weather-Based Insights</h3>
              <p>Receive insights and suggestions based on the current weather in your location.</p>
            </div>
            <div className="feature-card p-4 bg-blue-800 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p>Our app is user-friendly and easy to navigate, making it simple to find the best food recommendations.</p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-us py-8 bg-blue-800">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">About Us</h2>
          <p className="text-center max-w-2xl mx-auto text-white">We are dedicated to providing the best food recommendations based on the weather. Our mission is to enhance your culinary experience by leveraging weather data to suggest the perfect meals for any occasion.</p>
          <div className="text-center mt-4">
            <Link to="/about">
              <button className="bg-blue-500 text-white rounded px-4 py-2">Learn More</button>
            </Link>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="cta py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Try Our AI-Powered Food Recommendation Now!</h2>
          <Link to="/app">
            <button className="bg-blue-500 text-white rounded px-4 py-2">Get Started</button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;