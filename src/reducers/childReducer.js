const childInitialState ={
	child:[],
	wishes:[],
	pending:[],
	value:[],
	current:[]
}

export default function (state=childInitialState, action){
	switch(action.type){
		case "CHILD_LOGIN":
			return{...state, child:action.child}
		case "ADD_WISHES":
			return{...state, wishes:action.wishes}
		case "ADD_WISH":
			return{...state, wishes:[...state.wishes, action.wish]}
		case "DELETE_WISH":
			return{...state, wishes:state.wishes.filter(function(item){
				return item.id !== action.id
			})}
		case "MAKE_CHORE_PENDING":
			return{...state, pending:action.chore}
		case "TOGGLE_LANDING":
			return{...state, value:action.value}
		case "GET_CURRENT_CHORES":
			return{...state, current:action.current}
		case "GET_PENDING_CHORES":
			return{...state, pending:action.pending}
		case "POST_TO_INCOMPLETE":
			return{...state, current:[...state.current, action.current]}
		default:
			return state
	}
}