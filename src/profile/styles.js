import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  cover: {
    width: '100%',
    position: 'relative',
    padding: '16px',
    marginBottom: '78px',
  },
  coverImage: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    filter: 'blur(4px)',
    overflow: 'hidden'
  },
  coverOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
    opacity: '0.25',
    position: 'absolute',
    top: 0
  },
  avatar: {
    width: '150px',
    height: '150px',
    margin: '0 auto',
    border: `3px solid ${colors.white}`,
    position: 'relative',
    bottom: '-94px'
  },
  close: {
    position: 'absolute',
    top: '16px',
    right: '32px'
  },
  root: {
    height: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    color: colors.primaryText
  },
  profileHeader: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '16px',
    marginBottom: '8px',
    color: colors.primaryText
  },
  secondaryText: {
    fontSize: '16px',
    marginTop: 0,
    marginBottom: '16px',
    color: colors.grey
  }
};
