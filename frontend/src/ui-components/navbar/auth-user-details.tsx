import React from 'react';
import { useDispatch } from 'react-redux';
import { getName } from '../../utils';
import { Popover } from '@mui/material';

function AuthUserDetails({
  name,
  profilePix,
  title,
}: {
  name: string;
  profilePix: string;
  title: string;
}) {
  const containerStyle: React.CSSProperties = {
    minWidth: '40px',
    minHeight: '40px',
    marginLeft: '15px',
    backgroundPosition: 'center',
    objectPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${profilePix})`,
    backgroundSize: 'cover',
    objectFit: 'contain',
    overflow: 'hidden',
    overflowClipBox: 'content-box',
  };

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const actionType = (action: string) => {
    if (action == 'close') {
      handleClose();
    } else if (action == 'view') {
      // handleOutput({ data: data, action });
    }
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div
      className={
        'flex flex-row w-[100%] text-[14px]   align-middle items-center '
      }
    >
      <div
        className={
          'flex flex-col justify-end items-end font-sans font-[700] leading-[140%] text-Splenzert-secondary-dark_blue'
        }
      >
        <span className={'w-[135px] items-end flex flex-row justify-end'}>
          {getName(name)}
        </span>
        <span className={'font-sans font-[400] text-[#666] text-[12px] '}>
          {title || ''}
        </span>
      </div>
      <div
        style={{ ...containerStyle }}
        className={
          ' items-center align-middle flex flex-row rounded-full relative bg-gray-600  cursor-pointer'
        }
      ></div>

      {/* <Popover open={true} >
        
      </Popover> */}
    </div>
  );
}

export default AuthUserDetails;
