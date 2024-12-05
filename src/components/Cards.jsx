const Cards = () => {
  const cards = [
    {
      image: 'https://picsum.photos/300/200?random=1',
      title: 'Card Title 1',
      description: 'This is a description for card 1',
    },
    {
      image: 'https://picsum.photos/300/200?random=2',
      title: 'Card Title 2',
      description: 'This is a description for card 2',
    },
    {
      image: 'https://picsum.photos/300/200?random=3',
      title: 'Card Title 3',
      description: 'This is a description for card 3',
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;