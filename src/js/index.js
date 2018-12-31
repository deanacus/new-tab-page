import React from 'react';
import ReactDOM from 'react-dom';
import links from './data.js';
import LinkList from './components/LinkList';
import NavBar from './components/NavBar';

const App = function() {
	return (
		<React.Fragment>
			<NavBar />
			<LinkList links={links} />
		</React.Fragment>
	);
};

ReactDOM.render( <App />, document.querySelector( '#app' ) );
