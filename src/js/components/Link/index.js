import React from 'react';

const Link = ( props ) => {
	const handleDelete = () => {
		props.deleteLink( props.id );
	};

	const buttonClass = () => props.editMode ? 'active' : 'inactive';
	return (
		<div className="link-item">
			<a href={props.url}>{props.title}</a>
			<button type="button" onClick={handleDelete} className={buttonClass()}>Delete</button>
		</div>
	);
};

export default Link;
