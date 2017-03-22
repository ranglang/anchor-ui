import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconMicrophone({ color, ...custom }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
      <g fill={color}>
        <path d="M12.1307674,3.71857113 C11.079463,3.71857113 10.2238108,4.57944069 10.2238108,5.6316146 L10.2238108,11.7185711 C10.2238108,12.7620494 11.079463,13.622919 12.1307674,13.622919 C13.1820717,13.622919 14.0385935,12.7620494 14.0385935,11.7185711 L14.0385935,5.6316146 C14.0385935,4.57944069 13.1820717,3.71857113 12.1307674,3.71857113 Z M12.1307674,15.2403103 C10.1864195,15.2403103 8.60381085,13.6577016 8.60381085,11.7185711 L8.60381085,5.6316146 C8.60381085,3.68378852 10.1864195,2.10117982 12.1307674,2.10117982 C14.0777239,2.10117982 15.6585935,3.68378852 15.6585935,5.6316146 L15.6585935,11.7185711 C15.6585935,13.6577016 14.0777239,15.2403103 12.1307674,15.2403103 L12.1307674,15.2403103 Z" />
        <path d="M12.7829413,18.5011798 L11.4785935,18.5011798 C8.1551152,18.5011798 5.45163694,15.796832 5.45163694,12.4750929 L5.45163694,9.71857113 C5.45163694,9.27509287 5.8151152,8.90987547 6.26120215,8.90987547 C6.70989781,8.90987547 7.07163694,9.27509287 7.07163694,9.71857113 L7.07163694,12.4750929 C7.07163694,14.9098755 9.04902824,16.8837885 11.4785935,16.8837885 L12.7829413,16.8837885 C15.2133761,16.8837885 17.1907674,14.9098755 17.1907674,12.4750929 L17.1907674,9.71857113 C17.1907674,9.27509287 17.5542456,8.90987547 18.0003326,8.90987547 C18.4490282,8.90987547 18.8107674,9.27509287 18.8107674,9.71857113 L18.8107674,12.4750929 C18.8107674,15.796832 16.1072891,18.5011798 12.7829413,18.5011798" />
        <path d="M12.1664195,21.3620494 C11.7203326,21.3620494 11.3568543,21.0055276 11.3568543,20.5533537 L11.3568543,17.8055276 C11.3568543,17.3533537 11.7203326,16.9881363 12.1664195,16.9881363 C12.6151152,16.9881363 12.9768543,17.3533537 12.9768543,17.8055276 L12.9768543,20.5533537 C12.9768543,21.0055276 12.6151152,21.3620494 12.1664195,21.3620494" />
        <path d="M15.9351152,21.370745 L8.39772389,21.370745 C7.95163694,21.370745 7.58815867,21.0055276 7.58815867,20.5533537 C7.58815867,20.1098755 7.95163694,19.7446581 8.39772389,19.7446581 L15.9351152,19.7446581 C16.3838108,19.7446581 16.74555,20.1098755 16.74555,20.5533537 C16.74555,21.0055276 16.3838108,21.370745 15.9351152,21.370745" />
        <path d="M9.12294128,10.4490059 L6.94902824,10.4490059 C6.70815867,10.4490059 6.51424563,10.2577016 6.51424563,10.0142233 C6.51424563,9.77074504 6.70815867,9.57944069 6.94902824,9.57944069 L9.12294128,9.57944069 C9.36468041,9.57944069 9.55772389,9.77074504 9.55772389,10.0142233 C9.55772389,10.2577016 9.36468041,10.4490059 9.12294128,10.4490059" />
        <path d="M17.4385935,10.4490059 L15.2646804,10.4490059 C15.0238108,10.4490059 14.8298978,10.2577016 14.8298978,10.0142233 C14.8298978,9.77074504 15.0238108,9.57944069 15.2646804,9.57944069 L17.4385935,9.57944069 C17.679463,9.57944069 17.8733761,9.77074504 17.8733761,10.0142233 C17.8733761,10.2577016 17.679463,10.4490059 17.4385935,10.4490059" />
        <path d="M12.1307674,3.71857113 C11.079463,3.71857113 10.2238108,4.57944069 10.2238108,5.6316146 L10.2238108,11.7185711 C10.2238108,12.7620494 11.079463,13.622919 12.1307674,13.622919 C13.1820717,13.622919 14.0385935,12.7620494 14.0385935,11.7185711 L14.0385935,5.6316146 C14.0385935,4.57944069 13.1820717,3.71857113 12.1307674,3.71857113 Z M12.1307674,15.2403103 C10.1864195,15.2403103 8.60381085,13.6577016 8.60381085,11.7185711 L8.60381085,5.6316146 C8.60381085,3.68378852 10.1864195,2.10117982 12.1307674,2.10117982 C14.0777239,2.10117982 15.6585935,3.68378852 15.6585935,5.6316146 L15.6585935,11.7185711 C15.6585935,13.6577016 14.0777239,15.2403103 12.1307674,15.2403103 L12.1307674,15.2403103 Z" />
        <path d="M12.7829413,18.5011798 L11.4785935,18.5011798 C8.1551152,18.5011798 5.45163694,15.796832 5.45163694,12.4750929 L5.45163694,9.71857113 C5.45163694,9.27509287 5.8151152,8.90987547 6.26120215,8.90987547 C6.70989781,8.90987547 7.07163694,9.27509287 7.07163694,9.71857113 L7.07163694,12.4750929 C7.07163694,14.9098755 9.04902824,16.8837885 11.4785935,16.8837885 L12.7829413,16.8837885 C15.2133761,16.8837885 17.1907674,14.9098755 17.1907674,12.4750929 L17.1907674,9.71857113 C17.1907674,9.27509287 17.5542456,8.90987547 18.0003326,8.90987547 C18.4490282,8.90987547 18.8107674,9.27509287 18.8107674,9.71857113 L18.8107674,12.4750929 C18.8107674,15.796832 16.1072891,18.5011798 12.7829413,18.5011798" />
        <path d="M12.1664195,21.3620494 C11.7203326,21.3620494 11.3568543,21.0055276 11.3568543,20.5533537 L11.3568543,17.8055276 C11.3568543,17.3533537 11.7203326,16.9881363 12.1664195,16.9881363 C12.6151152,16.9881363 12.9768543,17.3533537 12.9768543,17.8055276 L12.9768543,20.5533537 C12.9768543,21.0055276 12.6151152,21.3620494 12.1664195,21.3620494" />
        <path d="M15.9351152,21.370745 L8.39772389,21.370745 C7.95163694,21.370745 7.58815867,21.0055276 7.58815867,20.5533537 C7.58815867,20.1098755 7.95163694,19.7446581 8.39772389,19.7446581 L15.9351152,19.7446581 C16.3838108,19.7446581 16.74555,20.1098755 16.74555,20.5533537 C16.74555,21.0055276 16.3838108,21.370745 15.9351152,21.370745" />
        <path d="M9.12294128,10.4490059 L6.94902824,10.4490059 C6.70815867,10.4490059 6.51424563,10.2577016 6.51424563,10.0142233 C6.51424563,9.77074504 6.70815867,9.57944069 6.94902824,9.57944069 L9.12294128,9.57944069 C9.36468041,9.57944069 9.55772389,9.77074504 9.55772389,10.0142233 C9.55772389,10.2577016 9.36468041,10.4490059 9.12294128,10.4490059" />
        <path d="M17.4385935,10.4490059 L15.2646804,10.4490059 C15.0238108,10.4490059 14.8298978,10.2577016 14.8298978,10.0142233 C14.8298978,9.77074504 15.0238108,9.57944069 15.2646804,9.57944069 L17.4385935,9.57944069 C17.679463,9.57944069 17.8733761,9.77074504 17.8733761,10.0142233 C17.8733761,10.2577016 17.679463,10.4490059 17.4385935,10.4490059" />
      </g>
    </svg>
  );
}

IconMicrophone.propTypes = {
  color: PropTypes.string
};

IconMicrophone.defaultProps = {
  color: colors.icons
};

IconMicrophone.displayName = 'IconMicrophone';

export default pure(IconMicrophone);
