import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import AppMenu from './AppMenu';

import BoardContainer from '../containers/Board';
import ActivitiesContainer from '../containers/Activities';

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  }
};

class App extends Component {
  render() {
    return <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
        <AppBar 
          title="TGA-Trello"
          className="header"
          iconElementRight={<AppMenu />}
          showMenuIconButton={false}
          style={{ position: 'fixed' }} />
        <div className="main" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'flex-start', marginTop: '48px' }}>
          <BoardContainer />
          <ActivitiesContainer />
        </div>
      </div>;
  }
}

export default App;
