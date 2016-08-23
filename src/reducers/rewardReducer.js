const rewardInitialState ={
	rewards:[]
}


export default function (state = rewardInitialState, action){
	switch(action.type){
		case "ADD_REWARDS":
			return{...state, rewards:action.rewards}
		case "ADD_REWARD":
			return {...state, rewards:[...state.rewards, action.reward]}
		case "DELETE_REWARD":
			return{...state, rewards:state.rewards.filter(function(item){
				return item.id !== action.id
			})}
		case "FETCH_REWARDS_CHILD":
			return{...state, rewards:action.rewards}
		case "REWARDS_BY_ID":
			return{...state, rewards:actions.rewards}

		default:
			return state


	}
}