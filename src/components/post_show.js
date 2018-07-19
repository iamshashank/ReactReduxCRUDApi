import React from 'react';
import {connect } from 'react-redux';
import {fetchPost} from '../actions';
import {Link} from 'react-router-dom';
import {deletePost} from '../actions';

class PostShow extends React.Component{
	componentDidMount(){
		const id = this.props.match.params.id;
		this.props.fetchPost(id);
	}

	onDeleteClick(){
		this.props.deletePost(this.props.match.params.id,()=>{
			this.props.history.push('/');
		});
	}
	render() {

		const {post} = this.props;
		if(!post){
			return (<div>Post Loading ...</div>);
		}
		return (
			<div>
				<Link to='/'>Back to index</Link>
				<button className="btn btn-danger text-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete</button>
				<h3>Title : {post.title}</h3>
				<h5>Categories : {post.categories}</h5>
				<p>{post.content}</p>
			</div>
			);
	}
}

//'ownProps' === 'this.props'
function mapStateToProps(state,ownProps){
	//console.log(state.posts[ownProps.match.params.id]);
	return {post:state.posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostShow);