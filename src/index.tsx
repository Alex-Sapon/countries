import React from 'react';

import { App } from 'components/app';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { PersistGate } from 'redux-persist/integration/react';
import { history, persistor, store } from 'store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);
