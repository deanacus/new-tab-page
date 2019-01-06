import React from 'react';

const Toolbar = ( props ) => {
	const editClasses = `button edit-button${props.editMode ? ' active' : '' }`;
	return (
		<div className="toolbar">
			<button className="button add-button" onClick={props.setAddMode}>Add</button>
			<button className={editClasses} onClick={props.setEditMode}>Edit</button>
		</div>
	);
};
export default Toolbar;