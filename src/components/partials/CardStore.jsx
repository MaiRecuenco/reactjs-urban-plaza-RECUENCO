import React from "react";

const CardStore = ({
  image: Image,
  icon: Icon,
  alt,
  name,
  description,
  location,
}) => {
  return (
    <>
      {/* Store 1 */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img src={Image} className="w-full h-48 object-cover" alt={alt} />
        <div className="p-6">
          <div className="flex items-center mb-2">
            <Icon className="text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold">{name}</h3>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </>
  );
};

export default CardStore;
