import Radium from 'radium';
import colors from '../settings/colors';
import styles from '../settings/styles';

const popOverAnimation = Radium.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
}, 'pop-over');

const styleSheet = {
  popOver: {
    position: 'absolute',
    top: '100%',
    right: '50%',
    minWidth: '200px',
    backgroundColor: colors.white,
    borderRadius: '3px',
    boxShadow: styles.depthShadows[0],
    margin: 0,
    paddingLeft: 0,
    overflow: 'hidden',
    zIndex: '1',
    animation: 'x .3s ease-in-out',
    animationName: popOverAnimation,
  },
  header: {
    paddingTop: '10px',
    paddingRight: '10px',
    paddingBottom: '10px',
    paddingLeft: '16px',
    margin: '0',
    fontSize: '16px',
    fontWeight: 'bold',
    color: colors.primaryText
  }
};

export default styleSheet;
