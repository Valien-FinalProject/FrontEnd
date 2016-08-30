const parentInitialState ={
	parent:[],
	children:[],
	email:[],
	phone:[]
}


export default function (state = parentInitialState, action){
	switch(action.type){
		case "ADD_PARENT":
			return{...state, parent:action.parent}
		case "GET_PARENT":
			return{...state, parent:action.parent}
		case "GET_PHONE":
			return{...state, phone:action.phone}
		case "GET_EMAIL":
			return{...state, email:action.email}
		case "ADD_CHILDREN":
			return{...state, children:action.children}
		case "ADD_CHILD":
			return{...state, children:[...state.children, action.child]}
		case "DELETE_CHILD":
			return{...state, children:state.children.filter(function(child){
				return child.id !== action.id
			})}
		case "UPDATE_PARENT":
			return{...state, parent:action.parent}
		default:
			return state;
	}
}