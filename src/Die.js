import React, { Component } from 'react';

import './Die.css';

export default class Die extends Component {
	render() {
		const { number, rolling } = this.props;
		return (
			<div className='Die'>
				<i className={`fas fa-dice-${number} fa-7x ${rolling && 'shaking'}`} />
			</div>
		);
	}
}
