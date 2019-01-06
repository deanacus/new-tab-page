import React from 'react';
import defaultLinks from '../../defaultLinks.js';
import LinkList from '../LinkList/';
import Clock from '../Clock/';
import Toolbar from '../Toolbar/';
import LinkForm from '../LinkForm/';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			links: defaultLinks,
			editMode: false,
			addMode: false,
		};

		this.setAddMode = this.setAddMode.bind( this );
		this.setEditMode = this.setEditMode.bind( this );
		this.addLink = this.addLink.bind( this );
		this.deleteLink = this.deleteLink.bind( this );
		this.resetLinks = this.resetLinks.bind( this );
	}

	setAddMode() {
		this.setState( state=> ( { addMode: ! state.addMode } ) );
	}

	addLink( newLink ) {
		this.setState( state => {
			const newLinksArray = [
				...state.links,
				newLink,
			];
			return { links: newLinksArray };
		} );
	}

	deleteLink( linkID ) {
		this.setState( ( state ) => {
			var newLinksArray = state.links.filter( link => link.id !== linkID );
			return { links: newLinksArray };
		} );
	}

	resetLinks() {
		this.setState( { links: [] } );
	}

	setEditMode() {
		this.setState( state=> ( { editMode: ! state.editMode } ) );
	}

	componentDidMount() {
		const localLinks = localStorage.getItem( 'ntp-links' );
		if ( localLinks ) {
			this.setState( { links: JSON.parse( localLinks ) } );
		}
	}

	componentDidUpdate() {
		localStorage.setItem( 'ntp-links', JSON.stringify( this.state.links ) );
	}

	render() {
		return (
			<React.Fragment>
				<Clock />
				<LinkList links={ this.state.links } editMode={ this.state.editMode } deleteLink={ this.deleteLink } />
				<Toolbar setEditMode={ this.setEditMode } setAddMode={this.setAddMode} editMode={ this.state.editMode } />
				{this.state.addMode && <LinkForm close={this.setAddMode} save={this.addLink} />}
			</React.Fragment>
		);
	}
};

export default App;