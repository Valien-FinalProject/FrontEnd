import api from 'lib/api'
import store from 'store'
import Cookie from 'js-cookie'
import {browserHistory} from 'react-router'
import {saveState} from 'api/localstorage'



api.new('https://vast-fortress-99365.herokuapp.com')
//eopt===email optin, popt=== phone optin

export function getParent(id){
	api.get(`/parent/${id}`).then(function(response){
		console.log(response)
		store.dispatch({
			type:"GET_PARENT",
			parent:response.data
		})
	})
}

export function getParentEmail(){
	api.get(`/parent/email`).then(function(response){
		console.log(response)
		store.dispatch({
			type:"GET_EMAIL",
			email:response.data
		})
	})
}

export function getParentPhone(){
	api.get(`/parent/phone`).then(function(response){
		store.dispatch({
			type:"GET_PHONE",
			phone:response.data
		})
	})
}
export function getChildren(){
	api.get('/parent/children').then(function(response){
		console.log('getChildren', response)
		store.dispatch({
			type:"ADD_CHILDREN",
			children:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function deleteChild(id){
	api.delete(`/parent/child/${id}`).then(function(response){
		console.log("Child Removed", response)
		store.dispatch({
			type:"DELETE_CHILD",
			id
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function childLogin(username, password){
	api.childlogin(username, password).then(function(response){
		browserHistory.push("/childLanding")
		store.dispatch({
			type:"CHILD_LOGIN",
			child:response.data
		})
		localStorage.setItem("childId", response.data.id)
		localStorage.setItem("childUN", response.data.username)
	}).catch(function(err){
		console.dir(err)
	})
}

export function getWishes(){
	api.get('/child/wishlist').then(function(response){
		store.dispatch({
			type:"ADD_WISHES",
			wishes:response.data
		})
	})
}
export function createReward(reward, points){
	api.post('parent/reward', {name:reward, points:points})
	.then(function(response){
		console.log("createReward", response)
		store.dispatch({
			type:"ADD_REWARD",
			reward:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function getAllRewards(){
	api.get('/parent/rewards').then(function(response){
		store.dispatch({
			type:"ADD_REWARDS",
			rewards:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}
export function getRewards(){
	api.get('/child/rewards').then(function(response){
		store.dispatch({
			type:"FETCH_REWARDS_CHILD",
			rewards:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function deleteReward(id){
	api.delete(`/parent/reward/${id}`).then(function(response){
		console.log("Reward Deleted", response)
		store.dispatch({
			type:"DELETE_REWARD",
			id
		})
	}).catch(function(err){
		console.dir(err)
	})
}
export function getRewardsById(id){
	api.get(`/parent/reward/${id}`).then(function(response){
		console.log("GetRWDbyID", response)
		store.dispatch({
			type:"REWARDS_BY_ID",
			rewards:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function getRewardsByIdPath(id){
	api.get(`/parent/child/${id}/rewards`).then(function(response){
		console.log("GetRWDbyID", response)
		store.dispatch({
			type:"GET_REWARDS_BY_ID",
			rewards:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}


export function deleteWish(id){
	api.delete(`/child/delete/wishlist/${id}`).then(function(response){
		console.log("deleter", response)
		store.dispatch({
			type:"DELETE_WISH",
			id
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function makeAWish(description){
	api.post('/child/wishlist', {name:description}).then(function(response){
		console.log("Make a Wish", response)
		store.dispatch({
			type:"ADD_WISH",
			wish:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function wishGranted(childId, rewardId, points){
	api.put(`/parent/child/${childId}/wishlist/${rewardId}`,{points:points}).then(function(response){
		console.log("WishGranted", response)
		store.dispatch({
			type:"GRANT_WISH",
			wish:response.data,
			id:rewardId
		})
	})
}

export function getChildWish(id){
	api.get(`parent/child/${id}/wishlist`).then(function(response){
		console.log("getChildren'swishes", response)
		store.dispatch({
			type:"GET_CHILD_WISH",
			wishes:response.data

		})
	})
}

export function register(email, eopt, name, pw, phone, popt, username){
	api.post('/parent/register', {email:email, emailOptin:eopt, name:name, password:pw,phone:phone, phoneOptin:popt, username:username})
	.then(function(response){
		console.log("register", response)
		store.dispatch({
			type:"ADD_PARENT",
			parent:response.data

		})
	}).catch(function(err){
		console.dir(err)
		
	})

}

export function updateParent(email, eopt, name, password, phone, popt, username){
	api.put(`/parent/profile`, {email:email, emailOptin:eopt, name:name, password:password, phone:phone, phoneOptin:popt, username:username})
	.then(function(response){
		console.log("updateParent", response)
		store.dispatch({
			type:"UPDATE_PARENT",
			parent:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function updateChildProfile(id, email, name, password, phone, username){
	api.put(`parent/child/${id}`, {email:email, name:name, password:password, phone:phone, username:username}).then(function(response){
		console.log(response)
		// store.dispatch({
		// 	type:"UPDATE_CHILD",

		// })
	}).catch(function(err){
		console.dir(err)
	})
}

export function cookieGetter(){
	console.log(Cookie.get())
	Cookie.get()
}

export function login(username, password){
	api.login(username, password).then(function(response){
		console.log("login", response)
		
		store.dispatch({
			type:"ADD_PARENT",
			parent:response.data
		})
		localStorage.setItem("parentUN", response.data.username)
		localStorage.setItem("parentId", response.data.id)
		browserHistory.push("/landing");
	}).catch(function(err){
		console.dir(err)
	})
}

export function getChildPoints(id){
	api.get(`parent/child/${id}/points`).then(function(response){
		console.log("GCP", response)
		store.dispatch({
			type:"GET_CHILD_POINTS",
			points:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function createChild(phone, email, name, pw, username){
	api.post('/parent/child', {childPhone:phone, email:email, name:name, password:pw, username:username})
	.then(function(response){
		console.log("createChild", response)
		store.dispatch({
			type:"ADD_CHILD",
			child:response.data
		})

		localStorage.setItem("ChildIdforDefault", response.data.id)
	}).catch(function(err){
		console.dir(err)
	})
}
export function getAllChores(){
	api.get('/parent/chores').then(function(response){
		console.log(response)
		store.dispatch({
			type:"GET_ALL_CHORES",
			chores:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}
export function getChoreByChildId(){
	api.get(`/child/chores`).then(function(response){
		console.log(response)
		store.dispatch({
			type:"GET_CHILD_CHORES",
			chores: response.data
		})
	}).catch(function(err){
		console.dir(err)
	})

}
export function getPoolChores(){
	api.get('/child/chores/pool').then(function(response){
		store.dispatch({
			type:"GET_POOL_CHORES",
			pool:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function getCurrentChoresById(){
	api.get(`/child/current`).then(function(response){
		console.log("getCurrentChoresById", response)
		store.dispatch({
			type:"GET_CURRENT_CHORES",
			current:response.data

		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function getParentCurrentChoresById(id){
	api.get(`parent/child/${id}/current`).then(function(response){
		console.log("getCurrentChoresById", response)
		store.dispatch({
			type:"GET_CURRENT_CHORES",
			current:response.data

		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function getParentPendingChoresById(id){
	api.get(`/parent/child/${id}/pending`).then(function(response){
		console.log("getPendingChoresById", response)
		store.dispatch({
			type:"GET_PENDING_CHORES",
			pending:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function getPendingChoresById(){
	api.get(`/child/pending`).then(function(response){
		console.log("getPendingChoresById", response)
		store.dispatch({
			type:"GET_PENDING_CHORES",
			pending:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

//==============Points========
export function addPoints(id, points){
	api.put(`/parent/add/child/${id}`, {id:id, newPoint:points}).then(function(response){
		console.log("addPoints", response)
		store.dispatch({
			type:"ADD_POINTS",
			points:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}
export function addPointsViaPath(id, newPoint){
	api.put(`/parent/add/${newPoint}/child/${id}`).then(function(response){
		store.dispatch({
			type:"ADD_POINTS",
			points:response.data
			
		})
	})
}

export function deductPointsViaPath(id, newPoint){
	api.put(`/parent/deduct/${newPoint}/child/${id}`).then(function(response){
		store.dispatch({
			type:"DEDUCT_POINTS",
			points:response.data
		})
	})
}


export function removePoints(id, points){
	api.put(`/parent/deduct/child/${id}`, {points:points}).then(function(response){
		console.log("removePoints", response)
		store.dispatch({
			type:"REMOVE_POINTS",
			points:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}
export function getPoints(){
	api.get('/child/points').then(function(response){
			console.log("points", response)
		store.dispatch({
			type:"GET_POINTS",
			points:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function deductPointsChild(id, points){
	api.put(`/child/reward/${id}/deduct`).then(function(response){
		console.log("childdeduct", response)
		store.dispatch({
			type:"DEDUCT_CHILD",
			points:points

		})
	}).catch(function(err){
		console.dir(err)
	})
}

//------change chore status-------


export function getCompleteChoresById(){
	api.get(`/child/complete`).then(function(response){
		console.log("getCompleteChoresById", response)
		store.dispatch({
			type:"GET_COMPLETE_CHORES",
			complete:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function getParentCompleteChoresById(id){
	api.get(`parent/child/${id}/complete`).then(function(response){
		console.log("getCompleteChoresById", response)
		store.dispatch({
			type:"GET_COMPLETE_CHORES",
			complete:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}


export function postToComplete(childId, choreId){
	api.post(`/parent/child/${childId}/approve/${choreId}`).then(function(response){
		console.log("postToComplete", response)
		store.dispatch({
			type:"POST_TO_COMPLETE",
			complete:response.data,
			id:choreId
		})
	}).catch(function(err){
		console.dir(err)
	})
}
export function postToIncomplete(choreId){
	api.put(`/parent/chore/${choreId}/deny`).then(function(response){
		console.log("postToIncomplete", response)
		store.dispatch({
			type:"POST_TO_INCOMPLETE",
			current:response.data,
			id:choreId
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function makeChorePending(id){
	api.put(`/child/chore/${id}/pending`).then(function(response){
		console.log(response)
		console.log(id)
		store.dispatch({
			type:"MAKE_CHORE_PENDING",
			chore:response.data,
			id
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function markChoreComplete(childId, choreId){
	api.post(`/parent/child/${childId}/approve/${choreId}`).then(function(response){
		console.log(response)
		store.dispatch({
			type:"MARK_CHORE_COMPLETE",
			chore:response.data
		})
	})

}

//get id from radio buttons

export function handleValue(value){
	store.dispatch({
		type:"TOGGLE_LANDING",
		value
	})
}


//chore creation

export function createChore(description, endDate, name,  startDate, value ){
	api.post('/parent/chore', {description:description, endDate:endDate, name:name, startDate:startDate, value:value})
	.then(function(response){
		console.log(response)
		store.dispatch({
			type:"ADD_CHORE_POOL",
			chore:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function changeChoreFromPool(id){
	var kidId = localStorage.getItem("childId")
	api.put(`child/chore/${id}`)
	.then(function(response){
		console.log(response)
		store.dispatch({
			type:"CHANGE_CHORE_FROM_POOL",
			chore:response.data,
			id
		})
	}).catch(function(err){
		console.dir(err)
	})
}

//chore assignment

export function assignChore(id, description, endDate, name,  startDate, value){
	api.post(`/parent/child/${id}/chore`, {description:description, endDate:endDate, name:name, startDate:startDate, value:value})
	.then(function(response){
		console.log("assignChore to Child", response)
		store.dispatch({
			type:"ADD_CHILD_CHORE",
			chore:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}
//chore deletion

export function deleteChore(id){
	api.delete(`parent/chore/${id}`).then(function(response){
		console.log("deletingChore", response)
		store.dispatch({
			type:"DELETE_CHORE",
			id
		})
	})
}

export function deleteWishParent(childId, rewardId){
	api.delete(`/parent/child/${childId}/wishlist/${rewardId}`).then(function(response){
		store.dispatch({
			type:"DELETE_PARENT_WISH",
			id:rewardId
		})
	}).catch(function(err){
		console.dir(err)
	})
}




export function logout(){
	console.log("Cookie", Cookie.get())
	api.logout()
	browserHistory.push("/")
}