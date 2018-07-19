import axios from 'axios';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=mmm123';


export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_NEW = 'POST_NEW';
export const FETCH_POST = 'FETCH_POST;'
export const DELETE_POST = 'DELETE_POST;'


export function fetchPosts(){
	const data = axios.get(`${ROOT_URL}posts${API_KEY
	}`);
	return {
		type: FETCH_POSTS,
		payload:data
	};
}

export function createPost(data,callback){
	const request =axios.post(`${ROOT_URL}posts${API_KEY}`,data)
	.then(()=>callback());
	return {
		type: CREATE_NEW,
		payload:request
		} 
}

export function fetchPost(id){
	const request = axios.get(`${ROOT_URL}posts/${id}${API_KEY}`);
	return {
		type:FETCH_POST,
		payload:request
	}	
}

export function deletePost(id,callback){
	const request = axios.delete(`${ROOT_URL}posts/${id}${API_KEY}`)
	.then(()=>callback());
	return {
		type:DELETE_POST,
		payload:id
	}	
}
