import { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('sportsCar');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const getImageUrl = () => {
    switch (activeTab) {
      case 'sportsCar':
        return 'url-to-sports-car-image';
      case 'truck':
        return 'url-to-truck-image';
      case 'miniCar':
        return 'url-to-mini-car-image';
      default:
        return '';
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === 'sportsCar' ? 'bg-indigo-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('sportsCar')}
        >
          Sports Car
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 'truck' ? 'bg-indigo-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('truck')}
        >
          Truck
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === 'miniCar' ? 'bg-indigo-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('miniCar')}
        >
          Mini Car
        </button>
      </div>
      <div className="flex justify-center">
        <img className="w-64 h-64" src={getImageUrl()} alt="Selected Vehicle" />
      </div>
    </div>
  );
};

export default TabComponent;
