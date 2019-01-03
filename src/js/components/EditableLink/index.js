import React from 'react';

const EditableLink = ( props ) => {
	const handleDelete = () => {
		console.log( 'Delete button clicked for link ID: ' + props.id );
		props.delete( props.id );
		props.close();
	};

	return (
		<div className="edit-link">
			<div className="info">
				<span>{props.title}</span>
				<span>{props.url}</span>
			</div>
			<div className="controls">
				<button type="button">Edit</button>
				<button type="button" onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
};

export default EditableLink;