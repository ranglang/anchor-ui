import React from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import emojione from 'emojione';
import htmlParser from 'html-react-parser';
import getStyles from './get-styles';
import styles from './styles';

const propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.shape({
    shortname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  changeTone: PropTypes.func.isRequired,
  tone: PropTypes.string.isRequired,
  style: PropTypes.instanceOf(Object),
  modifierStyle: PropTypes.instanceOf(Object)
};

const defaultProps = {
  style: {},
  modifierStyle: {}
};

function EmojiModifiers({
  modifiers, changeTone, tone, style, modifierStyle
}) {
  return (
    <header style={getStyles.header(style)}>
      <div style={getStyles.modifiers(modifierStyle)}>
        <div
          onClick={() => changeTone('tone0')}
          className="modifier"
          style={
            getStyles.modifier(tone === 'tone0')
          }
        >
          <svg width="50px" height="50px" viewBox="0 0 50 50" className="emojione">
            <circle id="circle" fill="#FFDD67" cx="25" cy="25" r="25" />
          </svg>
        </div>
        {modifiers.map((modifier) => {
          const title = modifier.title.replace(/:/g, '');

          return (
            <div
              style={
                getStyles.modifier(title === tone, modifierStyle)
              }
              key={`emoji-${modifier.shortname}`}
              onClick={() => changeTone(title)}
              className="modifier"
            >
              {htmlParser(emojione.toImage(modifier.shortname))}
            </div>
          );
        })}
      </div>
      <a
        style={styles.attributionLink}
        href="https://www.emojione.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Emoji by EmojiOne
      </a>
      <Style
        scopeSelector=".modifier"
        rules={{
          '.emojione': {
            width: 'inherit',
            height: 'inherit'
          }
        }}
      />
    </header>
  );
}

EmojiModifiers.propTypes = propTypes;
EmojiModifiers.defaultProps = defaultProps;

export default Radium(EmojiModifiers);
