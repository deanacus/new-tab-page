import React from 'react';

const EditLinks = ( props ) => (
	<div className="link-form">
		<h1>Edit Links</h1>
		<form>
			<div className="controls">
				<button type="button">Add</button>
				<button onClick={props.close} type="button">Cancel</button>
			</div>
		</form>
	</div>
);

export default EditLinks;