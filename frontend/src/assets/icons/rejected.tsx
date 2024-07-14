import React from 'react';

const RejectedIcon = ({
  className,
  fill = '',
  opacity,
  width,
  height,
}: {
  className?: string;
  width?: string;
  opacity?: string;
  height?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="69"
      height="21"
      viewBox="0 0 69 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.670898"
        width="68"
        height="19.6584"
        rx="5"
        fill="#F5DBDA"
      />
      <circle cx="11.5" cy="10.5" r="5" fill="#ED2124" />
      <path
        d="M25.4443 7.36133C26.0596 7.36133 26.5674 7.4362 26.9678 7.58594C27.3714 7.73568 27.6709 7.96354 27.8662 8.26953C28.0648 8.57552 28.1641 8.96452 28.1641 9.43652C28.1641 9.78809 28.099 10.0876 27.9688 10.335C27.8385 10.5824 27.6676 10.7874 27.4561 10.9502C27.2445 11.113 27.0182 11.2432 26.7773 11.3408L28.8037 14.5H27.4805L25.7568 11.6387H24.6094V14.5H23.4375V7.36133H25.4443ZM25.3662 8.33789H24.6094V10.6719H25.4199C25.9635 10.6719 26.3574 10.571 26.6016 10.3691C26.849 10.1673 26.9727 9.86947 26.9727 9.47559C26.9727 9.06217 26.8408 8.76921 26.5771 8.59668C26.3167 8.42415 25.9131 8.33789 25.3662 8.33789ZM31.8604 8.99219C32.3421 8.99219 32.7555 9.09147 33.1006 9.29004C33.4456 9.48861 33.7109 9.77018 33.8965 10.1348C34.082 10.4993 34.1748 10.9355 34.1748 11.4434V12.0586H30.5664C30.5794 12.5827 30.7194 12.9863 30.9863 13.2695C31.2565 13.5527 31.6341 13.6943 32.1191 13.6943C32.4642 13.6943 32.7734 13.6618 33.0469 13.5967C33.3236 13.5283 33.6084 13.429 33.9014 13.2988V14.2314C33.6312 14.3584 33.3561 14.4512 33.0762 14.5098C32.7962 14.5684 32.4609 14.5977 32.0703 14.5977C31.5397 14.5977 31.0726 14.4951 30.6689 14.29C30.2686 14.0817 29.9544 13.7725 29.7266 13.3623C29.502 12.9521 29.3896 12.4427 29.3896 11.834C29.3896 11.2285 29.4922 10.7142 29.6973 10.291C29.9023 9.86784 30.1904 9.54557 30.5615 9.32422C30.9326 9.10286 31.3656 8.99219 31.8604 8.99219ZM31.8604 9.85645C31.499 9.85645 31.2061 9.97363 30.9814 10.208C30.7601 10.4424 30.6299 10.7858 30.5908 11.2383H33.0518C33.0485 10.9681 33.0029 10.7288 32.915 10.5205C32.8304 10.3122 32.7002 10.1494 32.5244 10.0322C32.3519 9.91504 32.1305 9.85645 31.8604 9.85645ZM34.9268 16.9023C34.7575 16.9023 34.5964 16.8893 34.4434 16.8633C34.2904 16.8405 34.1618 16.8128 34.0576 16.7803V15.8623C34.1683 15.8949 34.2757 15.9193 34.3799 15.9355C34.484 15.9518 34.6029 15.96 34.7363 15.96C34.9479 15.96 35.1221 15.9014 35.2588 15.7842C35.3988 15.667 35.4688 15.444 35.4688 15.1152V9.09473H36.6162V15.2178C36.6162 15.5465 36.5576 15.8379 36.4404 16.0918C36.3265 16.3457 36.1442 16.5443 35.8936 16.6875C35.6462 16.8307 35.3239 16.9023 34.9268 16.9023ZM35.4004 7.6543C35.4004 7.42318 35.4622 7.26042 35.5859 7.16602C35.7129 7.07161 35.8675 7.02441 36.0498 7.02441C36.2256 7.02441 36.377 7.07161 36.5039 7.16602C36.6341 7.26042 36.6992 7.42318 36.6992 7.6543C36.6992 7.88216 36.6341 8.04492 36.5039 8.14258C36.377 8.23698 36.2256 8.28418 36.0498 8.28418C35.8675 8.28418 35.7129 8.23698 35.5859 8.14258C35.4622 8.04492 35.4004 7.88216 35.4004 7.6543ZM40.415 8.99219C40.8968 8.99219 41.3102 9.09147 41.6553 9.29004C42.0003 9.48861 42.2656 9.77018 42.4512 10.1348C42.6367 10.4993 42.7295 10.9355 42.7295 11.4434V12.0586H39.1211C39.1341 12.5827 39.2741 12.9863 39.541 13.2695C39.8112 13.5527 40.1888 13.6943 40.6738 13.6943C41.0189 13.6943 41.3281 13.6618 41.6016 13.5967C41.8783 13.5283 42.1631 13.429 42.4561 13.2988V14.2314C42.1859 14.3584 41.9108 14.4512 41.6309 14.5098C41.3509 14.5684 41.0156 14.5977 40.625 14.5977C40.0944 14.5977 39.6273 14.4951 39.2236 14.29C38.8232 14.0817 38.5091 13.7725 38.2812 13.3623C38.0566 12.9521 37.9443 12.4427 37.9443 11.834C37.9443 11.2285 38.0469 10.7142 38.252 10.291C38.457 9.86784 38.7451 9.54557 39.1162 9.32422C39.4873 9.10286 39.9202 8.99219 40.415 8.99219ZM40.415 9.85645C40.0537 9.85645 39.7607 9.97363 39.5361 10.208C39.3148 10.4424 39.1846 10.7858 39.1455 11.2383H41.6064C41.6032 10.9681 41.5576 10.7288 41.4697 10.5205C41.3851 10.3122 41.2549 10.1494 41.0791 10.0322C40.9066 9.91504 40.6852 9.85645 40.415 9.85645ZM46.2012 14.5977C45.6901 14.5977 45.2474 14.4984 44.873 14.2998C44.4987 14.1012 44.2106 13.7969 44.0088 13.3867C43.807 12.9766 43.7061 12.4557 43.7061 11.8242C43.7061 11.1667 43.8167 10.6296 44.0381 10.2129C44.2594 9.79622 44.5654 9.48861 44.9561 9.29004C45.3499 9.09147 45.8008 8.99219 46.3086 8.99219C46.6309 8.99219 46.9222 9.02474 47.1826 9.08984C47.4463 9.15169 47.6693 9.22819 47.8516 9.31934L47.5098 10.2373C47.3112 10.1559 47.1077 10.0876 46.8994 10.0322C46.6911 9.97689 46.4909 9.94922 46.2988 9.94922C45.9831 9.94922 45.7194 10.0192 45.5078 10.1592C45.2995 10.2992 45.1432 10.5075 45.0391 10.7842C44.9382 11.0609 44.8877 11.4043 44.8877 11.8145C44.8877 12.2116 44.9398 12.5469 45.0439 12.8203C45.1481 13.0905 45.3027 13.2956 45.5078 13.4355C45.7129 13.5723 45.9652 13.6406 46.2646 13.6406C46.5609 13.6406 46.8262 13.6048 47.0605 13.5332C47.2949 13.4616 47.5163 13.3688 47.7246 13.2549V14.251C47.5195 14.3682 47.2998 14.4544 47.0654 14.5098C46.8311 14.5684 46.543 14.5977 46.2012 14.5977ZM51.0059 13.6699C51.1556 13.6699 51.3037 13.6569 51.4502 13.6309C51.5967 13.6016 51.7301 13.5674 51.8506 13.5283V14.3975C51.7236 14.4528 51.5592 14.5 51.3574 14.5391C51.1556 14.5781 50.9456 14.5977 50.7275 14.5977C50.4215 14.5977 50.1465 14.5472 49.9023 14.4463C49.6582 14.3421 49.4645 14.1647 49.3213 13.9141C49.1781 13.6634 49.1064 13.3167 49.1064 12.874V9.96875H48.3691V9.45605L49.1602 9.05078L49.5361 7.89355H50.2588V9.09473H51.8066V9.96875H50.2588V12.8594C50.2588 13.1328 50.3271 13.3363 50.4639 13.4697C50.6006 13.6032 50.7812 13.6699 51.0059 13.6699ZM55.1025 8.99219C55.5843 8.99219 55.9977 9.09147 56.3428 9.29004C56.6878 9.48861 56.9531 9.77018 57.1387 10.1348C57.3242 10.4993 57.417 10.9355 57.417 11.4434V12.0586H53.8086C53.8216 12.5827 53.9616 12.9863 54.2285 13.2695C54.4987 13.5527 54.8763 13.6943 55.3613 13.6943C55.7064 13.6943 56.0156 13.6618 56.2891 13.5967C56.5658 13.5283 56.8506 13.429 57.1436 13.2988V14.2314C56.8734 14.3584 56.5983 14.4512 56.3184 14.5098C56.0384 14.5684 55.7031 14.5977 55.3125 14.5977C54.7819 14.5977 54.3148 14.4951 53.9111 14.29C53.5107 14.0817 53.1966 13.7725 52.9688 13.3623C52.7441 12.9521 52.6318 12.4427 52.6318 11.834C52.6318 11.2285 52.7344 10.7142 52.9395 10.291C53.1445 9.86784 53.4326 9.54557 53.8037 9.32422C54.1748 9.10286 54.6077 8.99219 55.1025 8.99219ZM55.1025 9.85645C54.7412 9.85645 54.4482 9.97363 54.2236 10.208C54.0023 10.4424 53.8721 10.7858 53.833 11.2383H56.2939C56.2907 10.9681 56.2451 10.7288 56.1572 10.5205C56.0726 10.3122 55.9424 10.1494 55.7666 10.0322C55.5941 9.91504 55.3727 9.85645 55.1025 9.85645ZM60.5273 14.5977C59.8828 14.5977 59.3652 14.3633 58.9746 13.8945C58.5872 13.4225 58.3936 12.7275 58.3936 11.8096C58.3936 10.8818 58.5905 10.1803 58.9844 9.70508C59.3815 9.22982 59.904 8.99219 60.5518 8.99219C60.8252 8.99219 61.0645 9.02962 61.2695 9.10449C61.4746 9.17611 61.6504 9.27376 61.7969 9.39746C61.9466 9.52116 62.0736 9.65951 62.1777 9.8125H62.2314C62.2152 9.71159 62.1956 9.56673 62.1729 9.37793C62.1533 9.18587 62.1436 9.00846 62.1436 8.8457V6.90234H63.2959V14.5H62.3975L62.1924 13.7627H62.1436C62.0459 13.9189 61.9222 14.0605 61.7725 14.1875C61.626 14.3112 61.4502 14.4105 61.2451 14.4854C61.0433 14.5602 60.804 14.5977 60.5273 14.5977ZM60.8496 13.665C61.3411 13.665 61.6878 13.5234 61.8896 13.2402C62.0915 12.957 62.1956 12.5322 62.2021 11.9658V11.8145C62.2021 11.209 62.1045 10.7451 61.9092 10.4229C61.7139 10.0973 61.3574 9.93457 60.8398 9.93457C60.4264 9.93457 60.1107 10.1022 59.8926 10.4375C59.6777 10.7695 59.5703 11.2334 59.5703 11.8291C59.5703 12.4248 59.6777 12.8805 59.8926 13.1963C60.1107 13.5088 60.4297 13.665 60.8496 13.665Z"
        fill="#ED2124"
      />
    </svg>
  );
};

export default RejectedIcon;