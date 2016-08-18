const rewardInitialState ={
	rewards:[]
}


export default function (state = rewardInitialState, action){
	switch(action.type){
		case "ADD_REWARDS":
			return{...state, rewards:action.rewards}
		case "ADD_REWARD":
			return {...state, rewards:[...state.rewards, action.reward]}

		default:
			return state


	}
}