import React from 'react';

class LinkForm extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			id:  this.props.id || this.generateLinkID(),
			title: this.props.title || '',
			url: this.props.url || '',
			valid: false,
		};

		this.generateLinkID = this.generateLinkID.bind( this );
		this.handleChange = this.handleChange.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
	}

	generateLinkID() {
		const id = Math.floor( 1000 + Math.random() * 9000 );
		if ( 1234 !== id ) {
			return id;
		}
		else {
			this.generateLinkID();
		}
	};

	handleChange( event ) {
		let identifier = event.currentTarget.name;
		let value = event.currentTarget.value;
		let valid = false;

		if ( '' !== this.state.title && '' !== this.state.url ) {
			valid = true;
		}

		this.setState( state => {
			return {
				[ identifier ]: value,
				valid: valid,
			};
		} );
	}

	handleSubmit( event ) {
		event.preventDefault();
		if ( this.state.valid ) {
			this.props.save( this.state, this.state.id );
			this.props.close();
		}
	}

	render() {
		return (
			<div className="modal">
				<div className="modal-content">
					<form onSubmit={this.handleSubmit}>
						<label className="form-field">
							<span className="sr-only">Link Title</span>
							<input type="text" name="title" placeholder="Link title" onChange={this.handleChange} />
						</label>
						<label className="form-field">
							<span className="sr-only">Link Address</span>
							<input type="url" placeholder="Link address" name="url" onChange={this.handleChange} />
						</label>
						<div className="form-controls">
							<button type="submit">Add</button>
							<button onClick={this.props.close} type="button">Cancel</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default LinkForm;