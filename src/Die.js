import React, { Component } from 'react';

import './Die.css';

export default class Die extends Component {
	render() {
		let dieNumber = null;
		const { number } = this.props;

		switch (number) {
			case 1:
				dieNumber = 'fa-dice-one';
				break;
			case 2:
				dieNumber = 'fa-dice-two';
				break;
			case 3:
				dieNumber = 'fa-dice-three';
				break;
			case 4:
				dieNumber = 'fa-dice-four';
				break;
			case 5:
				dieNumber = 'fa-dice-five';
				break;
			case 6:
				dieNumber = 'fa-dice-six';
				break;

			default:
				dieNumber = 'fa-dice-six';
				break;
		}

		return (
			<div className='Die'>
				<i className={`fas ${dieNumber} fa-7x`} />
			</div>
		);
	}
}
