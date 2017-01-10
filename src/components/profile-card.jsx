import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import Avatar from './avatar';
import getClassNames from '../internal/get-class-names';
import profileCardStyleSheet from '../style/profile-cards';

class ProfileCard extends Component {
  static propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        profileCard: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.shape({
      profileCard: PropTypes.object
    })
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style } = props;
    const className = getClassNames(classes, style, 'profileCard', 'ProfileCard');

    this.state = {
      className
    };
  }

  render() {
    const { username, avatar, sheet: { classes } } = this.props;
    const { className } = this.state;

    const style = {
      avatar: {
        float: 'left',
        marginRight: '15px'
      }
    };

    return (
      <section className={classNames(className, { [classes.avatar]: avatar })}>
        {avatar ? <Avatar image={avatar} style={style.avatar} /> : null}
        {username}
      </section>
    );
  }
}

export default injectSheet(profileCardStyleSheet)(ProfileCard);
