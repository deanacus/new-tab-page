import React from 'react';

class LinkForm extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			id:  this.props.id || this.generateLinkID(),
			abbrev: this.props.abbrev || '',
			title: this.props.title || '',
			url: this.props.url || '',
			valid: false,
		};

		this.generateLinkID = this.generateLinkID.bind( this );
		this.isValid = this.isValid.bind( this );
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

	isValid() {
		if ( '' !== this.state.abbrev && '' !== this.state.title && '' !== this.state.url ) {
			return true;
		}
		return false;
	}

	handleChange( event ) {
		let identifier = event.currentTarget.name;
		let value = event.currentTarget.value;
		this.setState( state => {
			return { [ identifier ]: value };
		} );
	}

	handleSubmit() {
		event.preventDefault();
		if ( this.isValid() ) {
			this.props.save( this.state, this.state.id );
			this.props.close();
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label className="form-field">
					<p>Abbreviation</p>
					<input type="text" name="abbrev" defaultValue={this.props.abbrev} onChange={this.handleChange} />
				</label>
				<label className="form-field">
					<p>Title</p>
					<input type="text" name="title" defaultValue={this.props.title} onChange={this.handleChange} />
				</label>
				<label className="form-field">
					<p>URL</p>
					<input type="url" placeholder="http://" name="url" defaultValue={this.props.url} onChange={this.handleChange} />
				</label>
				<div className="form-controls">
					<button type="submit">{this.props.buttonText}</button>
					<button onClick={this.props.close} type="button">Cancel</button>
				</div>
			</form>
		);
	}
}

export default LinkForm;