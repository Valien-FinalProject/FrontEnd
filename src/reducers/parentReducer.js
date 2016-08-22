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
		case "DELETE_CHILD":
			return{...state, children:state.children.filter(function(child){
				return child.id !== action.id
			})}
		default:
			return state;
	}
}