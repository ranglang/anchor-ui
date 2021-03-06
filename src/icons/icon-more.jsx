import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconMore = ({ color, ...custom }) => (
  <svg height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <circle cx="12.5" cy="19.5" r="1.875" />
      <circle cx="12.5" cy="12" r="1.875" />
      <circle cx="12.5" cy="4.5" r="1.875" />
    </g>
  </svg>
);

IconMore.propTypes = {
  color: PropTypes.string
};

IconMore.defaultProps = {
  color: colors.icons
};

IconMore.displayName = 'IconMore';

export default IconMore;
