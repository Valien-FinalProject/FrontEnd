const childInitialState ={
	child:[],
	wishes:[],
	pending:[]
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
		default:
			return state
	}
}