import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import GameField from './GameField';
import gameConstants from '../gameConstants';
import MenuContainer from '../containers/MenuContainer';
import CurrentGameInfo from '../containers/CurrentGameInfo';

injectTapEventPlugin();

const { fieldWidth, fieldHeight } = gameConstants;

const TetrisGame = () => (
  <div>
    <div>
      <MenuContainer />
    </div>
    <div style={{ position: 'relative' }}>
      <GameField width={fieldWidth} height={fieldHeight} />
      <MuiThemeProvider>
        <CurrentGameInfo />
      </MuiThemeProvider>
    </div>
  </div>;
);

export default TetrisGame;
