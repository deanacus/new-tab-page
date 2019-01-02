import React from 'react';

class AddLink extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			id: this.generateLinkID(),
			abbrev: '',
			title: '',
			url: '',
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
		let identifier = event.target.name;
		let value = event.target.value;
		this.setState( state => {
			return { [ identifier ]: value };
		} );
	}

	handleSubmit() {
		event.preventDefault();
		if ( '' !== this.state.abbrev && '' !== this.state.title && '' !== this.state.url ) {
			this.props.add( this.state );
			this.props.close();
		}
	}

	render() {
		return (
			<div className="link-form">
				<h1>Add New Link</h1>
				<form onSubmit={this.handleSubmit}>
					<label className="form-field">
						<p>Abbreviation</p>
						<input type="text" name="abbrev" onChange={this.handleChange} />
					</label>
					<label className="form-field">
						<p>Title</p>
						<input type="text" name="title" onChange={this.handleChange} />
					</label>
					<label className="form-field">
						<p>URL</p>
						<input type="url" placeholder="http://" name="url" onChange={this.handleChange} />
					</label>
					<div className="controls">
						<button type="submit">Add</button>
						<button onClick={this.props.close} type="button">Cancel</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddLink;