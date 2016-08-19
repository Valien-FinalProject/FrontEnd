const parentInitialState ={
	parent:[],
	children:[],
	chores:[]
}


export default function (state = parentInitialState, action){
	switch(action.type){
		case "ADD_PARENT":
			return{...state, parent:action.parent}
		case "ADD_CHILDREN":
			return{...state, children:action.children}
		case "ADD_CHILD":
			return{...state, children:[...state.children, action.child]}
		case "ADD_ALL_CHORES":
			return{...state, chores:action.chores}
		case "ADD_CHORE_POOL":
			return{...state, chores:[...state.chores, action.chore]}
		default:
			return state;
	}
}