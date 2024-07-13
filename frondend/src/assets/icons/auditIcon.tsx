import React from 'react';
import { ISvgProps } from '../../types';

const AuditSideIcon = ({ width, height, className, fill }: ISvgProps) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99512 14.6766V12.1396"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.19 3.33008C17.88 3.33008 19.24 4.70008 19.24 6.39008V9.83008C16.78 11.2701 13.53 12.1401 9.99 12.1401C6.45 12.1401 3.21 11.2701 0.75 9.83008V6.38008C0.75 4.69008 2.12 3.33008 3.81 3.33008H16.19Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4951 3.326V2.96C13.4951 1.74 12.5051 0.75 11.2851 0.75H8.70512C7.48512 0.75 6.49512 1.74 6.49512 2.96V3.326"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.774414 13.4834L0.963414 15.9924C1.09141 17.6834 2.50041 18.9904 4.19541 18.9904H15.7944C17.4894 18.9904 18.8984 17.6834 19.0264 15.9924L19.2154 13.4834"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AuditSideIcon;