import React, { useState } from 'react';
import placeholderImage from '../../assets/images/white-wooden-working-table-with-office-supplies-stuff-digital-devices_212889-3900.webp'; // Placeholder image from W3C
import Header from './header';
import Navbar from '../../ui-components/navbar/navbat';
import Bookcard from '../../ui-components/cards/bookcard';
import { AppData } from '../../data';
import { useGetAllBooksQuery } from '../../features/author/book/bookApi';

const Home = () => {
  const [query, setQuery] = useState<{
    pageNumber: number;
    pageSize: number;
    filter: string | undefined;
  }>({
    pageNumber: 1,
    pageSize: 10,
    filter: undefined,
  });
  const {
    data: allBooks,
    isFetching,
    isError,
    isSuccess,
  } = useGetAllBooksQuery(query);
  return (
    <>
      <div className="flex  lg:w-[80%] w-[100%] h-[10%]  sticky top-[0px] align-middle self-center mr-auto ml-auto z-[200000000]">
        <Navbar />
      </div>
      <div className="    lg:w-[80%]  h-[100%]   align-middle self-center mr-auto ml-auto overflow-x-hidden overflow-y-hidden relative">
        <section className="mb-8 h-[85%] overflow-y-auto relative">
          <div
            className={
              'flex flex-row  justify-center align-middle text-center items-center my-[10px] '
            }
          >
            <h2 className="text-3xl font-semibold text-blue-700 mb-6 flex self-center">
              Books
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto h-[2]">
            {allBooks?.data?.map((book, index) => (
              <Bookcard book={book} index={index} />
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
