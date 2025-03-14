import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay Effect 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      {/* Left Section */}
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We’re changing the way people shop.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          At FurniNest, we believe that shopping for furniture should be an
          enjoyable and inspiring experience. Our curated collection of stylish
          and affordable pieces is designed to transform your home into a cozy
          and inviting space. Discover the perfect blend of quality, comfort,
          and elegance with FurniNest.
        </p>
        <div className="mt-10">
          <Link to="products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden h-[28rem] lg:flex overflow-hidden relative w-80 bg-neutral rounded-box">
        {carouselImages.map((image, index) => (
          <img
            key={image}
            src={image}
            className={`absolute w-80 h-full object-cover rounded-box transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
