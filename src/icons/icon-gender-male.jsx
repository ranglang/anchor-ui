import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import { colors } from '../settings';

function IconGenderMale({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <g fill={color}>
        <path d="M10.3291778,6.84002677 C8.55453152,6.84002677 6.88033696,7.53447122 5.62469104,8.7978581 C4.36067414,10.0528782 3.67425437,11.7262383 3.67425437,13.5 C3.67425437,15.2821285 4.36067414,16.9471218 5.62469104,18.2105087 C6.88033696,19.4655288 8.55453152,20.1599732 10.3291778,20.1599732 C12.112195,20.1599732 13.7863895,19.4655288 15.0420354,18.2105087 C16.2976814,16.9471218 16.9924721,15.2821285 16.9924721,13.5 C16.9924721,11.7262383 16.2976814,10.0528782 15.0420354,8.7978581 C13.7863895,7.53447122 12.112195,6.84002677 10.3291778,6.84002677 Z M10.3291778,21.8333333 C8.10249899,21.8333333 6.00975579,20.9631861 4.4360129,19.3902276 C2.86227001,17.8172691 2.00005981,15.7255689 2.00005981,13.5 C1.99168884,11.2744311 2.86227001,9.18273092 4.4360129,7.60977242 C6.00975579,6.03681392 8.10249899,5.16666667 10.3291778,5.16666667 C12.5558565,5.16666667 14.6485997,6.03681392 16.2223426,7.60977242 C17.7960855,9.18273092 18.6666667,11.2744311 18.6666667,13.5 C18.6666667,15.7255689 17.7960855,17.8172691 16.2223426,19.3902276 C14.6485997,20.9631861 12.5558565,21.8333333 10.3291778,21.8333333 L10.3291778,21.8333333 Z" />
        <path d="M16.1501171,8.66666667 C15.9382829,8.66666667 15.7345962,8.59324972 15.5716468,8.43010095 C15.2538955,8.11196084 15.2538955,7.59804221 15.5716468,7.27990211 L20.6067828,2.23860508 C20.9245341,1.92046497 21.4378246,1.92046497 21.7555759,2.23860508 C22.0814747,2.55674518 22.0814747,3.07066381 21.7555759,3.38880392 L16.72044,8.43010095 C16.565638,8.59324972 16.3538038,8.66666667 16.1501171,8.66666667" />
        <path d="M21.186551,9.5 C20.739154,9.5 20.373102,9.14208243 20.373102,8.68655098 L20.373102,3.62689805 L15.313449,3.62689805 C14.8660521,3.62689805 14.5,3.26898048 14.5,2.81344902 C14.5,2.36605206 14.8660521,2 15.313449,2 L21.186551,2 C21.6339479,2 22,2.36605206 22,2.81344902 L22,8.68655098 C22,9.14208243 21.6339479,9.5 21.186551,9.5" />
      </g>
    </svg>
  );
}

IconGenderMale.propTypes = {
  color: PropTypes.string
};

IconGenderMale.defaultProps = {
  color: colors.icons
};

IconGenderMale.displayName = 'IconGenderMale';

export default pure(IconGenderMale);
