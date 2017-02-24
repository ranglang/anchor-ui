import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconAddImage({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <g fill={color}>
        <path d="M7.41666667,19.2499999 C7.1875,19.2499999 7,19.0583332 7,18.8333332 L7,6.51666657 C7,6.28333324 7.1875,6.0999999 7.41666667,6.0999999 C7.6475,6.0999999 7.83333333,6.28333324 7.83333333,6.51666657 L7.83333333,18.8333332 C7.83333333,19.0583332 7.6475,19.2499999 7.41666667,19.2499999" />
        <path d="M14.0491667,8.5999999 C12,8.5999999 10.3333333,10.2666666 10.3333333,12.3166666 C10.3333333,14.3666666 12,16.0333332 14.0491667,16.0333332 C16.0983333,16.0333332 17.7666667,14.3666666 17.7666667,12.3166666 C17.7666667,10.2666666 16.0983333,8.5999999 14.0491667,8.5999999 Z M14.0491667,16.8666666 C11.5416667,16.8666666 9.5,14.8249999 9.5,12.3166666 C9.5,9.80833324 11.5416667,7.76666657 14.0491667,7.76666657 C16.5591667,7.76666657 18.6,9.80833324 18.6,12.3166666 C18.6,14.8249999 16.5591667,16.8666666 14.0491667,16.8666666 L14.0491667,16.8666666 Z" />
        <path d="M4.04582511,7.47257418 C3.86389771,7.47257418 3.71629623,7.61854705 3.71629623,7.80745311 L3.71629623,18.2144598 C3.71629623,18.3947792 3.86389771,18.5493387 4.04582511,18.5493387 L19.9524586,18.5493387 C20.134386,18.5493387 20.2837038,18.3947792 20.2837038,18.2144598 L20.2837038,7.80745311 C20.2837038,7.61854705 20.134386,7.47257418 19.9524586,7.47257418 L18.4052175,7.47257418 C18.1417661,7.47257418 17.8937613,7.35236123 17.7315713,7.14628189 L16.293315,5.31732774 L11.7528533,5.31732774 L10.3145971,7.14628189 C10.1524071,7.35236123 9.902686,7.47257418 9.63923453,7.47257418 L4.04582511,7.47257418 Z M19.9524586,20.2666666 L4.04582511,20.2666666 C2.91821848,20.2666666 2,19.3478962 2,18.2144598 L2,7.80745311 C2,6.67401673 2.91821848,5.75524634 4.04582511,5.75524634 L9.22217455,5.75524634 L10.6595726,3.92629219 C10.8226208,3.72021285 11.0723419,3.5999999 11.3357934,3.5999999 L16.710375,3.5999999 C16.9738265,3.5999999 17.2235476,3.72021285 17.3857376,3.92629219 L18.8222775,5.75524634 L19.9524586,5.75524634 C21.0817815,5.75524634 22,6.67401673 22,7.80745311 L22,18.2144598 C22,19.3478962 21.0817815,20.2666666 19.9524586,20.2666666 L19.9524586,20.2666666 Z" />
      </g>
    </svg>
  );
}

IconAddImage.propTypes = {
  color: PropTypes.string
};

IconAddImage.defaultProps = {
  color: colors.icons
};

IconAddImage.displayName = 'IconAddImage';

export default pure(IconAddImage);
