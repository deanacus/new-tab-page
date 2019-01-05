import React from 'react';

const EditableLink = ( props ) => {
	const handleDelete = () => {
		props.delete( props.id );
		props.close();
	};

	const handleEditClick = () => {
		props.editSingle( props.id );
	};

	return (
		<div className="edit-link">
			<div className="info">
				<span>{props.title}</span>
				<span>{props.url}</span>
			</div>
			<div className="controls">
				<button type="button" onClick={handleEditClick}><img src="/images/edit.svg" /></button>
				<button type="button" onClick={handleDelete}><img src="/images/delete.svg" /></button>
			</div>
		</div>
	);
};

export default EditableLink;