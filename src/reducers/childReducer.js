const childInitialState ={
	child:[],
	wishes:[],
	value:[],
	points:0
}

export default function (state=childInitialState, action){
	switch(action.type){
		case "CHILD_LOGIN":
			return{...state, child:action.child}
		case "ADD_WISHES":
			return{...state, wishes:action.wishes}
		case "ADD_WISH":
			return{...state, wishes:[...state.wishes, action.wish]}
		case "GET_CHILD_WISH":
			return{...state, wishes:action.wishes}
		case "GRANT_WISH":
			return{...state, wishes:state.wishes.filter(function(item){
				return item.id !== action.id
			})}
		case "DELETE_WISH":
			return{...state, wishes:state.wishes.filter(function(item){
				return item.id !== action.id
			})}
		case "DELETE_PARENT_WISH":
			return{...state, wishes:state.wishes.filter(function(item){
				return item.id !== action.id
			})}
		case "TOGGLE_LANDING":
			return{...state, value:action.value}
		case "GET_POINTS":
			return{...state, points:action.points}
		case "ADD_POINTS":
			return{...state, points:state.points + action.points}
		case "REMOVE_POINTS":
			return{...state, points:state.points - action.points}
		case "GET_CHILD_POINTS":
			return{...state, points:action.points}
		case "DEDUCT_CHILD":
			return{...state, points:state.points - action.points}
		default:
			return state
	}
}