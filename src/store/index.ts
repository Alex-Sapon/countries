import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'sagas/rootSaga';
import { countriesReducer } from 'store/redusers/countriesReducer';

const rootReducer = combineReducers({
  countriesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
