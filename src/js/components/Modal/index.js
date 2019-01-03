import React from 'react';
import AddLink from '../AddLink';
import EditLinks from '../EditLinks';

const Modal = ( props ) => (
	<div className="modal">
		{'addLink' === props.content && <AddLink close={props.close} add={props.add} />}
		{'editLinks' === props.content && <EditLinks close={props.close} links={props.links} delete={props.delete} />}
	</div>
);

export default Modal;