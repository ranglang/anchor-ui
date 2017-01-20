import React, { PropTypes } from 'react';
import colors from '../style/colors';

function IconEdit({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <path d="M3.86759894,20.0903773 C5.58176561,20.109544 7.25509894,20.1462106 8.85176561,20.2637106 L20.1634323,8.95204397 C19.7109323,7.78621064 19.0125989,6.71537731 18.1292656,5.83037731 C17.2434323,4.94454397 16.1725989,4.24704397 15.0075989,3.79454397 L3.69343227,15.1062106 C3.81093227,16.6953773 3.84843227,18.3703773 3.86759894,20.0903773 Z M9.17093227,21.9578773 L9.10259894,21.9553773 C7.19509894,21.7978773 5.14426561,21.7678773 3.03426561,21.7487106 C2.58093227,21.744544 2.21259894,21.377044 2.20926561,20.9228773 C2.19009894,18.8078773 2.16093227,16.7528773 2.00259894,14.857044 C1.98343227,14.6128773 2.07093227,14.3728773 2.24343227,14.199544 L14.2000989,2.24371064 C14.4225989,2.02204397 14.7500989,1.94454397 15.0467656,2.04037731 C16.6442656,2.55871064 18.1192656,3.46204397 19.3075989,4.65204397 C20.4959323,5.84037731 21.3992656,7.31287731 21.9184323,8.91121064 C22.0159323,9.20954397 21.9359323,9.53621064 21.7142656,9.75787731 L9.76009894,21.7137106 C9.60176561,21.8712106 9.39009894,21.9578773 9.17093227,21.9578773 L9.17093227,21.9578773 Z" id="Fill-1053" fill={color} />
      <path d="M19.1217656,10.9487106 C19.0142656,10.9487106 18.9084323,10.9078773 18.8275989,10.827044 L13.1309323,5.13121064 C12.9675989,4.96787731 12.9675989,4.70454397 13.1309323,4.54204397 C13.2934323,4.37871064 13.5567656,4.37871064 13.7200989,4.54204397 L19.4167656,10.2378773 C19.5792656,10.4003773 19.5792656,10.6637106 19.4167656,10.827044 C19.3350989,10.9078773 19.2275989,10.9487106 19.1217656,10.9487106" id="Fill-1054" fill={color} />
      <path d="M9.21593227,20.8487106 C9.04009894,20.8487106 8.87759894,20.737044 8.82093227,20.5603773 C7.98759894,17.997044 5.96093227,15.9703773 3.39759894,15.1387106 C3.17926561,15.067044 3.05926561,14.832044 3.13093227,14.6137106 C3.20093227,14.394544 3.43676561,14.274544 3.65509894,14.3453773 C6.47093227,15.259544 8.69843227,17.487044 9.61343227,20.3037106 C9.68343227,20.522044 9.56426561,20.757044 9.34509894,20.8287106 L9.21593227,20.8487106" id="Fill-1055" fill={color} />
      <path d="M3.44509894,20.512044 L5.51009894,20.5828773 C5.46009894,19.404544 4.53676561,18.4478773 3.37176561,18.3462106 L3.44509894,20.512044 Z M5.89259894,21.429544 L5.88093227,21.429544 L3.02843227,21.332044 C2.80843227,21.324544 2.63426561,21.1487106 2.62593227,20.929544 L2.52343227,17.957044 C2.51676561,17.7353773 2.68509894,17.5462106 2.90593227,17.5278773 C3.03426561,17.5112106 3.09843227,17.5037106 3.16676561,17.5037106 C4.91926561,17.5037106 6.34676561,18.9303773 6.34676561,20.684544 C6.34676561,20.8003773 6.33176561,20.9112106 6.31593227,21.0228773 C6.28509894,21.229544 6.09926561,21.429544 5.89259894,21.429544 L5.89259894,21.429544 Z" id="Fill-1056" fill={color} />
      <path d="M3.86759894,20.0903773 C5.58176561,20.109544 7.25509894,20.1462106 8.85176561,20.2637106 L20.1634323,8.95204397 C19.7109323,7.78621064 19.0125989,6.71537731 18.1292656,5.83037731 C17.2434323,4.94454397 16.1725989,4.24704397 15.0075989,3.79454397 L3.69343227,15.1062106 C3.81093227,16.6953773 3.84843227,18.3703773 3.86759894,20.0903773 Z M9.17093227,21.9578773 L9.10259894,21.9553773 C7.19509894,21.7978773 5.14426561,21.7678773 3.03426561,21.7487106 C2.58093227,21.744544 2.21259894,21.377044 2.20926561,20.9228773 C2.19009894,18.8078773 2.16093227,16.7528773 2.00259894,14.857044 C1.98343227,14.6128773 2.07093227,14.3728773 2.24343227,14.199544 L14.2000989,2.24371064 C14.4225989,2.02204397 14.7500989,1.94454397 15.0467656,2.04037731 C16.6442656,2.55871064 18.1192656,3.46204397 19.3075989,4.65204397 C20.4959323,5.84037731 21.3992656,7.31287731 21.9184323,8.91121064 C22.0159323,9.20954397 21.9359323,9.53621064 21.7142656,9.75787731 L9.76009894,21.7137106 C9.60176561,21.8712106 9.39009894,21.9578773 9.17093227,21.9578773 L9.17093227,21.9578773 Z" id="Fill-1053" fill={color} />
      <path d="M19.1217656,10.9487106 C19.0142656,10.9487106 18.9084323,10.9078773 18.8275989,10.827044 L13.1309323,5.13121064 C12.9675989,4.96787731 12.9675989,4.70454397 13.1309323,4.54204397 C13.2934323,4.37871064 13.5567656,4.37871064 13.7200989,4.54204397 L19.4167656,10.2378773 C19.5792656,10.4003773 19.5792656,10.6637106 19.4167656,10.827044 C19.3350989,10.9078773 19.2275989,10.9487106 19.1217656,10.9487106" id="Fill-1054" fill={color} />
      <path d="M9.21593227,20.8487106 C9.04009894,20.8487106 8.87759894,20.737044 8.82093227,20.5603773 C7.98759894,17.997044 5.96093227,15.9703773 3.39759894,15.1387106 C3.17926561,15.067044 3.05926561,14.832044 3.13093227,14.6137106 C3.20093227,14.394544 3.43676561,14.274544 3.65509894,14.3453773 C6.47093227,15.259544 8.69843227,17.487044 9.61343227,20.3037106 C9.68343227,20.522044 9.56426561,20.757044 9.34509894,20.8287106 L9.21593227,20.8487106" id="Fill-1055" fill={color} />
      <path d="M3.44509894,20.512044 L5.51009894,20.5828773 C5.46009894,19.404544 4.53676561,18.4478773 3.37176561,18.3462106 L3.44509894,20.512044 Z M5.89259894,21.429544 L5.88093227,21.429544 L3.02843227,21.332044 C2.80843227,21.324544 2.63426561,21.1487106 2.62593227,20.929544 L2.52343227,17.957044 C2.51676561,17.7353773 2.68509894,17.5462106 2.90593227,17.5278773 C3.03426561,17.5112106 3.09843227,17.5037106 3.16676561,17.5037106 C4.91926561,17.5037106 6.34676561,18.9303773 6.34676561,20.684544 C6.34676561,20.8003773 6.33176561,20.9112106 6.31593227,21.0228773 C6.28509894,21.229544 6.09926561,21.429544 5.89259894,21.429544 L5.89259894,21.429544 Z" id="Fill-1056" fill={color} />
    </svg>
  );
}

IconEdit.propTypes = {
  color: PropTypes.string
};

IconEdit.defaultProps = {
  color: colors.icons
};

export default IconEdit;
