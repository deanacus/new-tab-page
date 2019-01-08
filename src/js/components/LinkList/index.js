import React from 'react';
import Link from '../Link';

const LinkList = ( props ) => (
	<div className="link-list">
		{
			props.links.map( link => {
				return <Link
					key={link.id}
					id={link.id}
					abbrev={link.abbrev}
					title={link.title}
					url={link.url}
					editMode={props.editMode}
					deleteLink={props.deleteLink}
				/>;
			} )
		}
	</div>
);

export default LinkList;
