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
		};

		this.showAddForm = this.showAddForm.bind( this );
		this.showEditForm = this.showEditForm.bind( this );
		this.closeModal = this.closeModal.bind( this );
		this.addLink = this.addLink.bind( this );
	}

	showAddForm() {
		this.setState( { showModal: true, modal: 'addLink' } );
	}

	showEditForm() {
		this.setState( { showModal: true, modal: 'editLinks' } );
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

	render() {
		return (
			<React.Fragment>
				<NavBar toggleAddLinks={this.showAddForm} toggleEditLinks={this.showEditForm}/>
				<LinkList links={this.state.links} />
				{
					this.state.showModal &&
					this.state.modal &&
					<Modal content={this.state.modal} close={this.closeModal} add={this.addLink} />
				}
			</React.Fragment>
		);
	}
};

ReactDOM.render( <App />, document.querySelector( '#app' ) );
