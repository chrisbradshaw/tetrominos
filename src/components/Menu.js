import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/style.css';
import { loadMenu } from '../actions/index.js';

class Menu extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadMenu());
  }
  render() {
    return (
      <div>
        <h1 className={style.pageBanner}>WETRIS</h1>
        {!this.props.isPlaying ? (
          <h2 style={{ color: 'grey' }}>Press spacebar to start the game</h2>
        ) : null}
      </div>
    );
  }

Menu.propTypes = {
    isPlaying: React.PropTypes.string
}
}
