import React from 'react';
import placeholderImage from '../../assets/images/white-wooden-working-table-with-office-supplies-stuff-digital-devices_212889-3900.webp'; // Placeholder image from W3C

function Bookcard({ book, index,handleClicked }: any) {
  return (
    <div
      key={index}
      className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
      <p className="text-blue-600 mb-1">
        <strong>Author:</strong> {book.author}
      </p>
      <p className="text-blue-600 mb-1">
        <strong>Publication Date:</strong> {book.publicationDate}
      </p>
      <p className="text-blue-600 mb-1">
        <strong>Genre:</strong> {book.genre}
      </p>
      <p className="text-blue-700 mt-2">{book.description}</p>
      <span onClick={(e)=>handleClicked({type:"edit",book,event:e})}>{'edit'}</span>
    </div>
  );
}

export default Bookcard;
