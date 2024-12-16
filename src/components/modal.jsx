import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onSave, editItem }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setDescription(editItem.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editItem]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ ...editItem, title, description }); // Yangilikni qo'shish yoki tahrirlash
    setTitle('');
    setDescription('');
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">
          {editItem ? 'Edit Item' : 'Add New Item'}
        </h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;





















// import React, { useState } from 'react';

// const Modal = ({ isOpen, onClose, onSave }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   if (!isOpen) return null;

//   const handleSave = () => {
//     onSave({ title, description });
//     setTitle('');
//     setDescription('');
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-xl font-bold mb-4">Add New Item</h2>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={onClose}
//             className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
