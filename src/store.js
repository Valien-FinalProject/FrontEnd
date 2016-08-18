import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'


var createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
// import reducers here
import parentReducer from 'reducers/parentReducer'
import rewardReducer from 'reducers/rewardReducer'
import childReducer from 'reducers/childReducer'

// combine reducers
const reducers = combineReducers({
  parentReducer,
  rewardReducer,
  childReducer
})

// crerate the storenpm
export default createStoreWithMiddleware(reducers);