import React from 'react';
import LinkForm from '../LinkForm';
import EditableLink from '../EditableLink';

class Modal extends React.Component{

	render() {
		let content = '';

		if ( 'addLink' === this.props.action ) {
			content = (
				<div className="modal-content">
					<h1>Add New Link</h1>
					<div className="modal-body">
						<LinkForm
							save={this.props.add}
							close={this.props.close}
							buttonText="Add"
						/>
					</div>
				</div>
			);
		}
		else if ( 'editLinks' === this.props.action ) {
			content = (
				<div className="modal-content">
					<h1>Edit Links</h1>
					<div className="modal-body">
						{ this.props.links.map( link => (
							<EditableLink
								key={link.id}
								id={link.id}
								title={link.title}
								url={link.url}
								delete={this.props.delete}
								editSingle={this.props.editSingle}
							/>
						) )}
					</div>
					<div className="form-controls">
						<button onClick={this.props.close} type="button">Cancel</button>
					</div>
				</div>
			);
		}
		else if ( 'editSingleLink' === this.props.action ) {
			content = (
				<div className="modal-content">
					<h1>Edit Link</h1>
					<div className="modal-body">
						<LinkForm id={this.props.singleLink.id}
							abbrev={this.props.singleLink.abbrev}
							title={this.props.singleLink.title}
							url={this.props.singleLink.url}
							close={this.props.close}
							save={this.props.edit}
							buttonText="Save"
						/>
					</div>
				</div>
			);
		}

		return (
			<div className="modal">
				{content}
			</div>
		);
	}
}


export default Modal;