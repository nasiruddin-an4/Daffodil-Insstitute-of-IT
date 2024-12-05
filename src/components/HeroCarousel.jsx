import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { heroSlides } from '../constants'; // Import the slides data
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import the Lucide icons
import { useRef } from 'react';

const HeroCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev(); // Go to the previous slide
  };

  const goToNext = () => {
    sliderRef.current.slickNext(); // Go to the next slide
  };

  return (
    <div className="relative">
      {/* Slider with settings and a ref attached */}
      <Slider {...settings} ref={sliderRef}>
        {heroSlides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom navigation arrows */}
      <div className="slick-custom-arrows">
        <button
          onClick={goToPrev}
          className="slick-prev"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="slick-next"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
