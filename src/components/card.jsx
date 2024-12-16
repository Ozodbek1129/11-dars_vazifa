import React from 'react';

const Card = ({ item, deleteNews, openModal }) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 className="mb-2 text-2xl font-bold tracking-tight">{item.title}</h5>
      <p className="mb-3 font-normal text-gray-700">{item.description}</p>
      <div className="flex gap-3">
        <button
          onClick={() => deleteNews(item.id)}
          className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={() => openModal(item)}
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Card;


