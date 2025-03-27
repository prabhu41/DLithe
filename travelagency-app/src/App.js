import React from "react";
import "./App.css"; // Ensure CSS is available

function App() {
  // Place images in the "public" folder or src/assets and reference them as relative paths
  const destinations = [
    { name: "Paris", image: "/paris.webp", description: "The city of lights." },
    { name: "Maldives", image: "/maldives.webp", description: "A tropical paradise." },
    { name: "Tokyo", image: "/tokyo.webp", description: "Blend of tradition and tech." },
    { name: "New York", image: "/newyork.webp", description: "The city that never sleeps." },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Travelly</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <h1>Welcome to Travelly</h1>
        <p>Plan your next adventure with us and explore the world.</p>
        <button className="explore-button">Explore Now</button>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="destination-section">
        <h2>Top Destinations</h2>
        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <img src={destination.image} alt={destination.name} className="destination-image" />
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Flight Booking</h3>
            <p>Get the best deals on flights to your favorite destinations.</p>
          </div>
          <div className="service-card">
            <h3>Hotel Booking</h3>
            <p>Stay in luxury hotels at affordable prices.</p>
          </div>
          <div className="service-card">
            <h3>Travel Packages</h3>
            <p>Enjoy all-inclusive travel packages tailored for you.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: info@travelly.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Travel Street, Adventure City, World</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        
      </footer>
    </div>
  );
}

export default App;
