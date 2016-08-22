import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'


var createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
// import reducers here
import parentReducer from 'reducers/parentReducer'
import rewardReducer from 'reducers/rewardReducer'
import childReducer from 'reducers/childReducer'
import choreReducer from 'reducers/choreReducer'

// combine reducers
const reducers = combineReducers({
  parentReducer,
  rewardReducer,
  childReducer,
  choreReducer
})

// crerate the storenpm
export default createStoreWithMiddleware(reducers);