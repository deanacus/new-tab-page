import React from 'react';

const Link = ( props ) => (
	<a className="link-item" href={props.url}>
		<h2>{props.abbrev}</h2>
		<p>{props.title}</p>
	</a>
);

export default Link;
