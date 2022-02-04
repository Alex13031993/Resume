import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import initialState from './initialState'

const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]
const composedEnhancers = compose(...enhancers)

const store = createStore(reducers, initialState, composedEnhancers);


export default store;