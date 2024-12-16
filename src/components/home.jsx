import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal';
import Card from './Card';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null); 

  const openModal = (item = null) => {
    setEditItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditItem(null);
    setIsModalOpen(false);
  };

  const handleSave = (data) => {
    if (data.id) {
    
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === data.id ? data : item))
      );
    } else {
    
      const newItem = { id: uuidv4(), ...data };
      setItems((prevItems) => [...prevItems, newItem]);
    }
    closeModal();
  };

  const deleteNews = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5 bg-gray-100 mb-10">
      <button
        onClick={() => openModal()}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Yangilik qo'shish
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSave}
        editItem={editItem}
      />

      <div className="mt-6 w-full px-10 space-y-4">
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            deleteNews={deleteNews}
            openModal={openModal}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;





















// // src/pages/Home.jsx
// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import Modal from './modal';
// import Card from './card';

// const Home = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [items, setItems] = useState([]);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSave = (data) => {
//     const newItem = {
//       id: uuidv4(),
//       ...data,
//     };
//     setItems((prevItems) => [...prevItems, newItem]);
//     closeModal();
//   };

//   const deleteNews = (id) => {
//     console.log(items);
//     const news = items.filter((p) => p.id != id);
//     setItems(news);
//   };

//  const editNews = (id, news)=>{
//   setItems((e)=>{
//     // console.log(news);
//     items.map((item)=>
//     item.id == id ? {...items, ...news}: items
//     )

//   })
//  }

 

//   return (
//     <div className="flex flex-col items-center justify-center mt-5 bg-gray-100 mb-10">
//       <button
//         onClick={openModal}
//         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//       >
//         Yangilik qo'shish
//       </button>

//       <Modal isOpen={isModalOpen} onClose={closeModal} onSave={handleSave} />

//       <div className="mt-6 w-full px-10 space-y-4">
//         {items && items.map((item) => (

//             <Card key={item.id} item={item} deleteNews={deleteNews} editNews={editNews} openModal={openModal} ></Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
