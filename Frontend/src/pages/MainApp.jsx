import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function MainApp() {
  const [location, setLocation] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/recommend', { location });
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch recommendations');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-yellow-400">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 ">
        <h1 className="text-2xl font-bold mb-4 font-serif text-center">Food Recommendation Based on Weather</h1>
        <div className="mt-20 mb-4 flex flex-col md:flex-row items-center justify-center">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location (e.g., Bhopal)"
            className="border rounded px-4 py-2 w-full md:w-1/2"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-800 text-white rounded px-4 py-2 mt-2 md:mt-0 md:ml-2"
          >
            Get Recommendations
          </button>
        </div>
        <div className="mx-4 md:mx-16 p-5">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-center">Recommendations:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {recommendations.map((food, index) => (
              <div key={index} className="bg-blue-800 rounded shadow p-4 flex flex-col items-center">
                <img src={food.image} alt={food.name} className="w-full h-50 object-cover rounded-2xl" />
                <h3 className="text-lg font-bold mb-2 text-center">{food.name}</h3>
                <p className="text-white text-center">{food.description}</p>
                <p className="text-white mt-2 text-center">Calories: {food.calories}</p>
                <p className="text-white text-center">Ingredients: {food.ingredients.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainApp;