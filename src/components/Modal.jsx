import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, service }) => {
  const modalRef = useRef();

  // Early return if modal is not open or service is not provided
  if (!isOpen || !service) return null;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    modalRef.current.focus(); // Set focus to the modal when it opens

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleConfirm = () => {
    console.log('Confirmed:', service);
    onClose(); // Close modal after action
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" 
      role="dialog" 
      aria-modal="true" 
      ref={modalRef} 
      tabIndex="-1"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transition-transform transform duration-300 ease-in-out">
        <header className="flex justify-between items-center border-b pb-4">
          <h3 className="text-xl font-semibold text-gray-800" id="modal-title">
            {service.title || 'Modal Title'}
          </h3>
          <button 
            className="text-gray-500 hover:text-gray-800 focus:outline-none" 
            aria-label="Close modal" 
            onClick={onClose}
          >
            &times;
          </button>
        </header>
        <main className="mt-4">
          <p className="text-gray-600">
            {service.description || 'This is the content of the modal. You can add any information here.'}
          </p>
        </main>
        <footer className="mt-6 flex justify-end space-x-2">
          <button 
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300" 
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button 
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-300" 
            onClick={onClose}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;