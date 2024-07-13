import React from 'react';
import { allIcons } from '../assets/icons';

function SortArrows() {
  return (
    <div className="flex w-[100%] h-[100%] self-center gap-x-[10px] items-center">
      <div className="flex-col inline-flex gap-y-[4px] ">
        <span>{allIcons.upArrow({})}</span>
        <span className="">{allIcons.downArrow({})}</span>
      </div>
      <span>{allIcons.filter({})}</span>
    </div>
  );
}

export default SortArrows;
