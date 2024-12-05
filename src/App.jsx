import 'remixicon/fonts/remixicon.css';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Cards from './components/Cards';
import Blog from './components/Blog';
import Notice from './components/Notice';
import Testimonials from './components/Testimonials';
import VideoModal from './components/VideoModal';
import LoadingModal from './components/LoadingModal';

function App() {
  return (
    <div>
      <LoadingModal />
      <Navbar />
        <HeroCarousel />
        <Notice />
        <Cards />
        <Blog />
        <Testimonials />
        <div className="py-12 text-center">
          <VideoModal />
        </div>
      </div>
  );
}

export default App;