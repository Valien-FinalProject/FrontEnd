const choreInitialState ={
	current:[],
	pending:[],
	complete:[],
	poolchores:[],
	chores:[]
}

export default function(state= choreInitialState, action){
	switch(action.type){
		case "ADD_CHILD_CHORE":
			return{...state, chores:[...state.chores, action.chore]}
		case "GET_ALL_CHORES":
			return{...state, chores:action.chores}
		case "GET_POOL_CHORES":
			return{...state, poolchores:action.pool}
		case "GET_CHILD_CHORES":
			return{...state, chores:action.chores}
		case "ADD_CHORE_POOL":
			return{...state, chores:[...state.chores, action.chore]}
		// case "MARK_CHORE_COMPLETE":
		// 	return{...state, complete:action.chore}
		case "GET_COMPLETE_CHORES":
			return{...state, complete:action.complete}
		case "POST_TO_COMPLETE":
			console.log(action.complete, action.id)
			return{...state, complete:[...state.complete, action.complete], pending:state.pending.filter(function(item){
				return item.id !== action.id
			})}
		case "DELETE_CHORE": 
			return{...state, complete:state.complete.filter(function(item){
					return item.id !== action.id
			})}
		case "GET_PENDING_CHORES":
			return{...state, pending:action.pending}
		case "MAKE_CHORE_PENDING":
			return{...state, pending:[...state.pending, action.chore], current:state.current.filter(function(item){
				return item.id !== action.id
			})}
			case "GET_CURRENT_CHORES":
			return{...state, current:action.current}
		case "POST_TO_INCOMPLETE":
			return{...state, current:[...state.current, action.current]}
		default:
			return state
	}
}