import React from 'react';
import EditableLink from '../EditableLink';

const EditLinks = ( props ) => {
	const handleDelete = () => {
		console.log( 'Delete button clicked for link ID: ' + props.link.id );
	};
	const links = props.links.map( link => (
		<EditableLink
			key={link.id}
			id={link.id}
			title={link.title}
			url={link.url}
			delete={props.delete}
			close={props.close}
		/>
	) );
	return (
		<div className="link-form">
			<h1>Edit Links</h1>
			{links}
		</div>
	);
};

export default EditLinks;