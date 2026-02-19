
import React from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-full max-w-4xl h-full max-h-[100vh]">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-black">
            &times;
          </button>
        </div>
        <iframe
          id="cliniko-65580028"
          src="https://optimal-chiropractic-braybrook.au5.cliniko.com/bookings?embedded=true"
          frameBorder="0"
          scrolling="auto"
          width="100%"
          height="100%"
          style={{ pointerEvents: 'auto' }}
        ></iframe>
      </div>
    </div>
  );
};

export default BookingModal;
