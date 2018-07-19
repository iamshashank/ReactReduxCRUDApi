import {FETCH_POST,FETCH_POSTS,DELETE_POST} from '../actions/index';
import _ from 'lodash';

export default function(state = {},action){

	switch(action.type){
		case DELETE_POST:
		//return nw state
		return _.omit(state,action.payload);
		case FETCH_POST:
		//const post = action.payload.data;
		//const newState = {...state};
		//return newState[post.id]=post;
		//[:id]=value its called key interpolation
		return {...state,[action.payload.data.id]:action.payload.data};
		case FETCH_POSTS:
		console.log(action.payload.data);
		//do not mutate the state object
		//return a new object
		return _.mapKeys(action.payload.data,'id');
		default:
		return state;
	}
}