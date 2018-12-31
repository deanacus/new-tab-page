import React from 'react';

class Clock extends React.Component {
	constructor( props ) {
		super( props );
		this.state = { date: new Date() };
	}

	_addLeadingZero( num ) {
		if ( 10 > num ) {
			return '0' + num;
		}
		else {
			return num;
		}
	};

	updateTime() {
		this.setState( { date: new Date() } );
	}

	componentDidMount() {
		this.interval = setInterval( this.updateTime.bind( this ), 200 );
	}

	render() {
		return (
			<div className="clock">
				<div className="hours">{this._addLeadingZero( this.state.date.getHours() ) }</div>
				:
				<div className="minutes">{this._addLeadingZero( this.state.date.getMinutes() ) }</div>
				:
				<div className="seconds">{this._addLeadingZero( this.state.date.getSeconds() ) }</div>
			</div>
		);
	}
}

export default Clock;