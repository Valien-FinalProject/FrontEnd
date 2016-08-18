const parentInitialState ={
	parent:[],
	children:[]
}


export default function (state = parentInitialState, action){
	switch(action.type){
		case "ADD_PARENT":
			return{...state, parent:action.parent}
		case "ADD_CHILDREN":
			return{...state, children:action.children}
		case "ADD_CHILD":
			return{...state, children:[...state.children, action.child]}
		default:
			return state;
	}
}