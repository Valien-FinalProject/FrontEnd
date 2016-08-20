const parentInitialState ={
	parent:[],
	children:[],
	chores:[],
	poolchores:[],
	complete:[]
}


export default function (state = parentInitialState, action){
	switch(action.type){
		case "ADD_PARENT":
			return{...state, parent:action.parent}
		case "ADD_CHILDREN":
			return{...state, children:action.children}
		case "ADD_CHILD":
			return{...state, children:[...state.children, action.child]}
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
		case "MARK_CHORE_COMPLETE":
			return{...state, complete:action.chore}
		case "GET_COMPLETE_CHORES":
			return{...state, complete:action.complete}
		default:
			return state;
	}
}