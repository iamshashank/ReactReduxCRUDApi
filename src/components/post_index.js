import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostIndex extends React.Component{
	componentDidMount(){
		console.log('didMount()')
		this.props.fetchPosts();
	}

	renderPosts(){

		return _.map(this.props.posts,(post)=>{
			return (
				<li key={post.id} className="list-group-item list-group-item-heading" 
				onClick={()=>{this.props.history.push(`/posts/${post.id}`)}}
				>
				{post.title}
				</li>
				);
		});
	}


	render(){
		

		return (
			<div>
			<div className='text-xs-right'>
			<Link to="posts/new" className='btn btn-primary'>
			Add a new Post
			</Link>
			</div>
			<h3>Posts</h3>
			<ul className="list-group"> 
			{this.renderPosts()}
			</ul>
			</div>
			);
	}
}

function mapStateToProps(state){
	return {posts:state.posts};
}

//this is shortcut methods
//'null' for mapStateToProps which is the first argument
export default connect(mapStateToProps,{ fetchPosts })(PostIndex);
