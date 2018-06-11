import { combineReducers } from 'redux'
import store from './index'

const makeRootReducer = (asyncReducers) => combineReducers({
   ...asyncReducers,
})
const injectReducer = ({key, reducer}) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default injectReducer;