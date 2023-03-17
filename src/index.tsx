import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/app';
import './index.css';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { history, store } from 'store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
);
