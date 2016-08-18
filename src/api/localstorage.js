import store from 'store';

export function getState() {
  try {
    let state = JSON.parse(localStorage.getItem('state'));
    if (!state) {
      return {
        parentReducer: {parent:[], children:[]},
        rewardReducer: {rewards:[]}
      }
    } else {
      return state;
    }
  } catch (err) {
    return {
      parentReducer: {parent:[], children:[]},
      rewardReducer:{rewards:[]}
    }
  }
}

export function saveState() {
  store.subscribe(function(){
    try {
      let state = store.getState();
      localStorage.setItem('state', JSON.stringify(state));
    } catch (err) {
      console.dir(err)
      // Ignore
    }
  })
}