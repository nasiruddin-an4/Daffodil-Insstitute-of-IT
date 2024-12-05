import { useEffect, useRef } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO',
      content: 'Amazing service! Highly recommended!',
      image: 'https://picsum.photos/100/100?random=1',
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      content: 'Great experience working with this team.',
      image: 'https://picsum.photos/100/100?random=2',
    },
    {
      name: 'Mike Johnson',
      role: 'Developer',
      content: 'Professional and efficient service.',
      image: 'https://picsum.photos/100/100?random=3',
    },
  ];

  const scrollerRef = useRef(null);
  const primaryRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current || !primaryRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerRef.current.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="relative max-w-full overflow-hidden" ref={primaryRef}>
        <div 
          ref={scrollerRef}
          className="flex animate-infinite-scroll"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[320px] mx-4 bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;