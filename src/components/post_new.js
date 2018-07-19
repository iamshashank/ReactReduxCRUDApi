import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class PostNew extends React.Component{


	// renderTitleField(field){
	// 	return (
	// 		<div className="form-group">
	// 		<label>Title</label>
	// 			<input className="form-control" 
	// 			type="text" 
	// 			{...field.input}
	// 			 />
	// 		</div>
	// 		);
	// }

	renderField(field){

		const className=`form-group ${field.meta.touched&& field.meta.error ? 'has-danger':''}`;
		return (
			<div className={className}>
			<label>{field.label}</label>
				<input className="form-control" 
				type="text" 
				{...field.input}
				 />
				 <div className="text-help">
				 {field.meta.touched ? field.meta.error:''}
				</div>
			</div>
			
			);
	}

	onSubmit(values){
		//
		console.log(values);
		this.props.createPost(values,()=>{this.props.history.push('/');});

	}

	render(){

		const {handleSubmit} = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
			<Field name="title" label="Title" component={ this.renderField } />
			<Field name="categories" label="Categories" component={ this.renderField } />
			<Field name="content" label="Post Content" component={ this.renderField } />
			<button type="submit" className="btn btn-primary">Post</button>
			<Link to="/" className="btn btn-danger"> Cancel </Link>
			</form>
			);
	}
}

function validate(values){
	const errors = {};
	//validate
	if(!values.title){
		errors.title = "Enter a Title";
	}
	if(!values.categories){
		errors.categories = "Enter a category";
	}
	if(!values.content){
		errors.content = "Enter the content";
	}
	//retrun errors
	//if 'error' is empty that means that there are no erros
	//and form is valid
	return errors;
}

export default reduxForm({
	validate:validate,
	form:'PostsNewForm'
})(
connect(null,{createPost})(PostNew)
);

