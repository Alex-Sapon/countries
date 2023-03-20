import { createBrowserHistory } from 'history';
import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import { createReduxHistoryContext } from 'redux-first-history';
import { persistStore, persistReducer } from 'redux-persist';
import { Persistor } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'sagas/rootSaga';
import { appReducer } from 'store/redusers/appReducer';
import { countriesReducer } from 'store/redusers/countriesReducer';

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

const rootReducer = combineReducers({
  countriesReducer,
  appReducer,
  router: routerReducer,
});

const persistConfig = {
  key: 'countries',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(routerMiddleware, sagaMiddleware))
);

export const persistor: Persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
