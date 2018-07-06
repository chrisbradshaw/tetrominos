import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/styles.css';
import { loadMenu } from '../actions/index.js';

class Menu extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadMenu());
  }
  render() {
    return (
      <div>
        <img
          src="https://res.cloudinary.com/dgxvjwyhm/image/upload/v1530912069/tetrominos-pink.png"
          alt="Tetrominos"
          className="pageBanner"
        />
        {!this.props.isPlaying ? (
          <h2 style={{ color: 'grey' }}>Press spacebar to start the game</h2>
        ) : null}
      </div>
    );
  }
}
Menu.propTypes = {
  isPlaying: PropTypes.string,
};

export default Menu;
