import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './Redux/store';

ReactDOM.render(
  <PersistGate loading={null} persistor={store.persistor}>
    <Provider store={store.store}>
      <App />
    </Provider>
  </PersistGate>,
  document.getElementById('root'),
);
