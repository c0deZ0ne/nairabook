import React from 'react';
import { data } from '../../data';
import placeholderImage from '../../assets/images/white-wooden-working-table-with-office-supplies-stuff-digital-devices_212889-3900.webp'; // Placeholder image from W3C
import Header from './header';
import Navbar from '../../ui-components/navbar/navbat';

const Home = () => {
  // const placeholderImage = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='100%' height='100%' fill='%23999'%3E%3C/rect%3E%3Ctext x='50%' y='50%' fill='%23fff' text-anchor='middle' font-size='24px' font-family='Arial' dy='.3em'%3E400x300%3C/text%3E%3C/svg%3E"

  return (
    <>
      <Navbar />

      <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen h-[100vh] overflow-y-auto">
        <div className={'flex flex-row h-[70px]  justify-center align-middle text-center items-center my-[10px] '}>
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 flex self-center">Books</h2>
        </div>
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.books.map((book, index) => (
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
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                  {book.title}
                </h3>
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
              </div>
            ))}
          </div>
        </section>

        {/* <section>
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Authors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.authors.map((author, index) => (
            <div key={index} className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src={author?.profileImage || placeholderImage} 
                alt={author.name} 
                className="h-48 w-full object-cover rounded-md mb-4" 
                onError={(e) => { e.currentTarget.src = placeholderImage; e.currentTarget.alt = 'Placeholder'; }} 
              />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">{author.name}</h3>
              <p className="text-blue-700 mb-2">{author.bio}</p>
              <p className="text-blue-600"><strong>Notable Works:</strong> {author.notableWorks.join(', ')}</p>
            </div>
          ))}
        </div>
      </section> */}
      </div>
    </>
  );
};

export default Home;
