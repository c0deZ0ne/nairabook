import React from 'react';
import placeholderImage from '../../assets/images/white-wooden-working-table-with-office-supplies-stuff-digital-devices_212889-3900.webp'; // Placeholder image from W3C
import { allIcons } from '../../assets/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function Bookcard({ book, index, handleClicked }: any) {
  const { isAuthenticated, email } = useSelector(
    (state: RootState) => state.persistUser,
  );
  return (
    <div
      key={index}
      className="p-6 h-[100%] flex flex-col bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative "
      style={{ maxWidth: '400px' }} // Limit maximum width for responsiveness
    >
      <img
        src={book?.coverImage || placeholderImage}
        alt={book.title}
        className="h-48 w-full object-cover rounded-md mb-4"
        onError={(e) => {
          e.currentTarget.src = placeholderImage;
          e.currentTarget.alt = 'Placeholder';
        }}
      />
      <h3 className="text-2xl font-bold text-blue-800 mb-2">{book.title}</h3>
      <p className="text-blue-600 ">
        <strong>Author:</strong> {book.author}
      </p>
      <p className="text-blue-600 ">
        <strong>Publication Date:</strong> {book.publicationDate}
      </p>
      <p className="text-blue-600">
        <strong>Genre:</strong> {book.genre}
      </p>
      <p className="text-blue-700 ">{book?.description}</p>
      {isAuthenticated && email === book.authorId && (
        <div className="flex h-[10px]  w-[100%]  gap-x-[10px]  bottom-[10px] justify-end relative  ">
          <span
            onClick={(e) => handleClicked({ type: 'edit', book, event: e })}
          >
            {allIcons.BiPen({ className: 'text-yellow-500' })}
          </span>
          <span
            onClick={(e) => handleClicked({ type: 'delete', book, event: e })}
          >
            {allIcons.FaTrashCan({ className: 'text-red-500' })}
          </span>
        </div>
      )}
    </div>
  );
}

export default Bookcard;
