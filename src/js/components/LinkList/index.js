import React from 'react';
import Link from '../Link';

const LinkList = ( props ) => (
	<div className="link-list">
		{
			props.links.map( link => {
				return <Link
					key={link.id}
					abbrev={link.abbrev}
					title={link.title}
					url={link.url}
				/>;
			} )
		}
	</div>
);

export default LinkList;
