import React from 'react';

function empty({ message }: { message?: string }) {
  return (
    <div className="absolute top-[50%] flex flex-col items-center justify-center self-center mt-auto mb-auto left-[50%]">
      {message ? message : 'No data '}
    </div>
  );
}

export default empty;
