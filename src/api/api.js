import api from 'lib/api'
import store from 'store'
import Cookie from 'js-cookie'
import {browserHistory} from 'react-router'
import {saveState} from 'api/localstorage'


api.new('https://vast-fortress-99365.herokuapp.com')
//eopt===email optin, popt=== phone optin

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
	api.post('parent/reward', {description:reward, points:points})
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
	api.post('/child/wishlist', {description:description}).then(function(response){
		console.log("Make a Wish", response)
		store.dispatch({
			type:"ADD_WISH",
			wish:response.data
		})
	}).catch(function(err){
		console.dir(err)
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

export function createChild(phone, email, name, pw, username){
	api.post('/parent/child', {childPhone:phone, email:email, name:name, password:pw, username:username})
	.then(function(response){
		console.log("createChild", response)
		store.dispatch({
			type:"ADD_CHILD",
			child:response.data
		})
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
export function getChoreByChildId(id){
	api.get(`/parent/child/${id}/chores`).then(function(response){
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
	api.get('/parent/chores/pool').then(function(response){
		store.dispatch({
			type:"GET_POOL_CHORES",
			pool:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}

export function makeChorePending(id){
	api.put(`/child/chore/${id}/pending`).then(function(response){
		console.log(response)
		store.dispatch({
			type:"MAKE_CHORE_PENDING",
			chore:response.data
		})
	}).catch(function(err){
		console.dir(err)
	})
}
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


export function logout(){
	console.log("Cookie", Cookie.get())
	api.logout()
	browserHistory.push("/")
}