import { createBrowserHistory } from 'history';
import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import { createReduxHistoryContext } from 'redux-first-history';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'sagas/rootSaga';
import { countriesReducer } from 'store/redusers/countriesReducer';

const sagaMiddleware = createSagaMiddleware();

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  combineReducers({
    countriesReducer,
    router: routerReducer,
  }),
  composeEnhancers(applyMiddleware(routerMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
