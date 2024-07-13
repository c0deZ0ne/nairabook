import React, { useState } from 'react';

const Pagination = () => {
  const [buttonState, setButtonState] = useState<{ [key: string]: boolean }>({
    button1: true,
    button2: false,
    button3: false,
  });
  const handleClick = (buttonId: string) => {
    const updatedState = { button1: false, button2: false, button3: false } as {
      [key: string]: boolean;
    };

    updatedState[buttonId] = true;

    if (buttonId === 'buuton2') {
      updatedState.button1 = false;
    }
    if (buttonId === 'buuton3') {
      updatedState.button2 = false;
    }
    setButtonState(updatedState);
  };

  return (
    <>
      <div className="mx-[22px]">
        <div className="  w-full h-[3px] mt-[39.3px] mb-[19px]  bg-[#E8E9EB]  stroke-indigo-600"></div>
      </div>

      <div className="flex justify-between mx-[53px]">
        <span>
          <p>Showing 1 - 15 of 25 total entries</p>
        </span>

        <span className="flex gap-2 cursor-pointer">
          <button
            onClick={() => handleClick('button1')}
            className={`w-[31px] h-[25px] roundec-[3px] text-[#FFF] text-center ${buttonState.button1 ? 'bg-[#1E49E2]' : 'bg-[#D6D6D6]'}`}
          >
            1
          </button>
          <button
            onClick={() => handleClick('button2')}
            className={`w-[31px] h-[25px] roundec-[3px]  text-[#FFF] text-center ${buttonState.button2 ? 'bg-[#1E49E2]' : 'bg-[#D6D6D6]'}`}
          >
            2
          </button>
          <button
            onClick={() => handleClick('button3')}
            className={`w-[43px] h-[25px] rounded-[3px] text-center text-[#FFF] ${buttonState.button3 ? 'bg-[#1E49E2]' : 'bg-[#D6D6D6]'}`}
          >
            Next
          </button>
        </span>
      </div>
    </>
  );
};

export default Pagination;
