import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from './theme';
import reducer from './reducers';
import './App.css'

const store = createStore(reducer)

const Application = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={Theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
