import React from 'react';

class Clock extends React.Component {
	constructor( props ) {
		super( props );
		this.state = { date: new Date() };

		this.getWeekday = this.getWeekday.bind( this );
		this.getMonth = this.getMonth.bind( this );
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

	getWeekday() {
		const days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];

		return days[ this.state.date.getDay() ];
	}

	getMonth() {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		return months[ this.state.date.getMonth() ];
	}

	componentDidMount() {
		this.interval = setInterval( this.updateTime.bind( this ), 200 );
	}

	render() {
		return (
			<header>
				<h2>{ this.getWeekday() }</h2>
				<p>{this.getMonth()} {this.state.date.getDate() }</p>
				<div className="clock">
					<span className="hours time-segment">{this._addLeadingZero( this.state.date.getHours() ) }</span>
				:
					<span className="minutes time-segment">{this._addLeadingZero( this.state.date.getMinutes() ) }</span>
				</div>
			</header>
		);
	}
}

export default Clock;