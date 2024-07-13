import React, { useEffect, useState } from 'react';
import { getName } from '../../utils';
import profile from '../../assets/images/profile.jpeg';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import dayjs from 'dayjs';
import moment from 'moment';

function SideProfile() {
  const { firstName, lastName, imageContent } = useSelector(
    (state: RootState) => state.persistUser,
  );
  const [greeting, setGreeting] = useState('');
  const base64Image = imageContent
    ? `data:image/png;base64,${imageContent}`
    : false;
  const containerStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    marginRight: '12px',
    backgroundPosition: 'center',
    objectPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${base64Image || profile})`,
    backgroundSize: 'cover',
    objectFit: 'contain',
    boxSizing: 'border-box',
    overflow: 'hidden',
    overflowClipBox: 'content-box',
  };

  const nameContainerStyle: React.CSSProperties = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  };

  const nameStyle: React.CSSProperties = {
    fontSize: '13px',
    color: '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const greetingStyle: React.CSSProperties = {
    fontWeight: '700',
    fontSize: '13px',
    color: '#fff',
  };

  useEffect(() => {
    const currentHour = dayjs().hour();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);
  return (
    <div className="flex flex-col w-[100%] text-[12px] ml-[26px] mt-[37px] ">
      <div className="flex flex-col">
        <div className="flex flex-row w-[100%] gap-1">
          {/* Image Start */}
          <div
            style={{ ...containerStyle }}
            className="items-center align-middle flex flex-row rounded-full relative"
          ></div>
          {/* Image End */}

          {/* Name Section Start */}
          <div style={{ ...nameContainerStyle }}>
            <span style={{ ...greetingStyle }}>{greeting}</span>
            <span style={{ ...nameStyle }}>
              {getName(`${firstName} ${lastName}` || 'update')}
            </span>
          </div>
          {/* Name Section End */}
        </div>
        <span style={{ ...greetingStyle, width: '100%', marginTop: '20px' }}>
          {new Date().toDateString()}
        </span>
      </div>
    </div>
  );
}

export default SideProfile;
