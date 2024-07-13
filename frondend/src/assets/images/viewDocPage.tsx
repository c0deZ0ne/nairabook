import React from 'react';
import { allIcons } from '../icons';
import { IDocData } from '../../types';

const ViewDocPage = ({ data }: { data: IDocData }) => {
  return (
    <table className="w-full h-[100%]">
      <thead>
        <tr>
          {data.heading.map((item: any, index: number) => (
            <th
              key={index}
              className={`${item == 'Action' ? ' flex flex-row align-middle justify-center' : ''} py-[20px]`}
            >
              <div
                className={`flex items-center  ${item != 'Folder Name' ? ' items-center justify-center' : ''}`}
              >
                <span>{item}</span>
                <div className="flex flex-col mx-2">
                  <span>{allIcons.upArrow({})}</span>
                  <span className="mt-0.5">{allIcons.downArrow({})}</span>
                </div>
                <span className="">
                  {item === 'Action' ? '' : allIcons.filter({})}
                </span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border-b border-t w-full  h-full">
        {data.tableRows.map((item, index: number) => (
          <tr key={index} className=" justify-center align-middle">
            <td className="pl-8">
              <img src={item.img} alt="document icon" />
            </td>
            <td className="flex mr-auto ml-[30%] w-[100%] items-start relative">
              {item.title}
            </td>
            <td className="pl-10 items-center relative">{item.modifiedAt}</td>
            <td className=" mr-auto pl-8 items-center text-center relative">
              {item.owner}
            </td>
            <td className="flex h-[100%] justify-end items-center pr-2 space-x-2 w-[150px]">
              <button className="text-black rounded-[5px] outline-none border-none">
                {allIcons.eyeIcon({})}
              </button>
              <button className="text-black rounded-[5px] outline-none border-none">
                {allIcons.download({})}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewDocPage;
