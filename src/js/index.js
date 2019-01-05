import React from 'react';
import ReactDOM from 'react-dom';
import links from './data.js';
import LinkList from './components/LinkList';
import NavBar from './components/NavBar';
import Modal from './components/Modal';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			links: links,
			showModal: false,
			modal: '',
			linkToEdit: '',
		};

		this.showAddForm = this.showAddForm.bind( this );
		this.showEditForm = this.showEditForm.bind( this );
		this.showEditSingle = this.showEditSingle.bind( this );
		this.closeModal = this.closeModal.bind( this );
		this.addLink = this.addLink.bind( this );
		this.deleteLink = this.deleteLink.bind( this );
		this.editLink = this.editLink.bind( this );
	}

	showAddForm() {
		this.setState( { showModal: true, modal: 'addLink' } );
	}

	showEditForm() {
		this.setState( { showModal: true, modal: 'editLinks' } );
	}

	showEditSingle( linkID ) {
		const linkToEdit = this.state.links.find( link => link.id === linkID );
		this.setState( { showModal: true, modal: 'editSingleLink', linkToEdit: linkToEdit } );
	}

	closeModal() {
		this.setState( {
			showModal: false,
			modal: '',
		} );
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
			return {links: newLinksArray };
		} );
	}

	editLink( newLink, linkID ) {
		this.setState( ( state ) => {
			const newLinks = state.links.map( link => {
				if ( link.id === linkID ) {
					link = newLink;
				}
				return link;
			} );

			return {links: newLinks};
		} );
	}

	render() {
		return (
			<React.Fragment>
				<NavBar toggleAddLinks={this.showAddForm} toggleEditLinks={this.showEditForm}/>
				<LinkList links={this.state.links} />
				{
					this.state.showModal &&
					this.state.modal &&
					<Modal
						action={this.state.modal}
						add={this.addLink}
						close={this.closeModal}
						delete={this.deleteLink}
						edit={this.editLink}
						editSingle={this.showEditSingle}
						links={this.state.links}
						singleLink={this.state.linkToEdit}
					 />
				}
			</React.Fragment>
		);
	}
};

ReactDOM.render( <App />, document.querySelector( '#app' ) );
