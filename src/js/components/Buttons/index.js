import React from 'react';

const Buttons = ( props ) => (
	<div className="buttons">
		<button type="button" className="add" onClick={props.toggleAddLinks}>Add</button>
		<button type="button" className="edit" onClick={props.toggleEditLinks}>Edit</button>
	</div>
);

export default Buttons;