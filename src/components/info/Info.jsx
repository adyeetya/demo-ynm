import React from 'react'

// Example data
const cardData = [
  {
    id: 1,
    image: '/images/mag.png', // Example image URL
    heading: 'Proven tips for growing hair faster.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a turpis quis est dictum egestas.',
  },
  {
    id: 2,
    image: '/images/mag.png', // Example image URL
    heading: 'Fish oil benefits for men.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a turpis quis est dictum egestas.',
  },
  {
    id: 3,
    image: '/images/mag.png', // Example image URL
    heading: '5 Gym rules to follow.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a turpis quis est dictum egestas.',
  },
]

const Info = () => {
  return (
    <div className="my-8 p-4 max-w-screen-xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Info Matters</h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border-b-2 border-r-2 border-gray-300"
            >
              <img
                src={card.image}
                alt={card.heading}
                className="w-full h-40 object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{card.heading}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Info
