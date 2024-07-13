import React from 'react';
import { AlertTypes } from '../../types';

function Alerticon({ type }: { type: string }) {
  return (
    <>
      <div
        className={`w-[50px] h-[50px] relative ${type == AlertTypes.Error ? ' bg-Splenzert-alert-red' : type == AlertTypes.Warning ? ' bg-Splenzert-alert-yellow' : ''} bg-blue-700 rounded-full items-center align-middle justify-center flex flex-col`}
      >
        {type == AlertTypes.Warning && (
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.85887 22.3829H21.8338C23.8109 22.3829 25.0519 20.2458 24.0696 18.5287L15.089 2.82572C14.1005 1.09734 11.6085 1.09609 10.6187 2.82447L1.62309 18.5274C0.640795 20.2446 1.88053 22.3829 3.85887 22.3829Z"
              stroke="#D6E1F5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8417 13.6071V9.73291"
              stroke="#D6E1F5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8335 17.4628H12.846"
              stroke="#D6E1F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {type == AlertTypes.Success && (
          <svg
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M11.1101 25.5C10.9553 25.5 10.8005 25.4645 10.6608 25.3921L6.15944 23.062C4.88215 22.4001 3.88296 21.6573 3.10274 20.7919C1.39506 18.8994 0.444955 16.47 0.429854 13.9499L0.377001 5.65533C0.370709 4.69803 0.988593 3.83879 1.91227 3.51519L10.1776 0.633485C10.6684 0.458205 11.2158 0.455753 11.7154 0.624905L20.0121 3.40855C20.9409 3.71866 21.5688 4.57178 21.5738 5.52785L21.6267 13.8285C21.6431 16.345 20.7257 18.7842 19.0444 20.6976C18.273 21.5752 17.2826 22.329 16.0179 23.0032L11.5568 25.386C11.4184 25.4608 11.2649 25.4988 11.1101 25.5Z"
              fill="#D6E1F5"
            />
            <path
              d="M10.151 15.9011C9.90942 15.9024 9.6678 15.8153 9.48155 15.6364L7.08552 13.332C6.71555 12.9741 6.71177 12.3931 7.07797 12.0327C7.44417 11.6711 8.04192 11.6674 8.41316 12.0241L10.1372 13.6813L14.3466 9.53099C14.7141 9.1694 15.3118 9.16572 15.6818 9.52241C16.053 9.88032 16.0568 10.4625 15.6906 10.8217L10.8167 15.6278C10.633 15.8092 10.3927 15.8999 10.151 15.9011Z"
              fill="#D6E1F5"
            />
          </svg>
        )}
        {type == AlertTypes.Error && (
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.85887 22.3829H21.8338C23.8109 22.3829 25.0519 20.2458 24.0696 18.5287L15.089 2.82572C14.1005 1.09734 11.6085 1.09609 10.6187 2.82447L1.62309 18.5274C0.640795 20.2446 1.88053 22.3829 3.85887 22.3829Z"
              stroke="#D6E1F5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8417 13.6071V9.73291"
              stroke="#D6E1F5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8335 17.4628H12.846"
              stroke="#D6E1F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div className="w-[29.99px] h-[29.99px] pl-[3.44px] pr-[3.42px] pt-[4.69px] pb-[4.45px] left-[20.84px] top-[20.84px] absolute justify-center items-center inline-flex">
        <div className="w-[23.13px] h-[20.85px] relative"></div>
      </div>
    </>
  );
}

export default Alerticon;
