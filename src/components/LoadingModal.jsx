import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

const LoadingModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically hide the modal after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center">
          <img
            src="https://picsum.photos/200/200?random=loading"
            alt="Loading"
            className="w-32 h-32 mx-auto mb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to Our Website
          </h2>
          <p className="text-gray-600">
            Please wait while we load amazing content for you...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;