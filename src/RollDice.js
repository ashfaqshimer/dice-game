import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

export default class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = { number1: 6, number2: 6, rolling: false };
		this.roll = this.roll.bind(this);
	}

	roll() {
		const random1 = Math.floor(Math.random() * 10) + 1;
		const random2 = Math.floor(Math.random() * 10) + 1;
		this.setState({ rolling: true });
		setTimeout(() => {
			this.setState({ number1: random1, number2: random2, rolling: false });
		}, 2000);
	}

	render() {
		return (
			<div className='RollDice'>
				<h1 className='RollDice-title'>Winner Winner, Chicken Dinner!</h1>
				<Die number={this.state.number1} />
				<Die number={this.state.number2} />
				<button className='RollDice-button' disabled={this.state.rolling} onClick={this.roll}>
					{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
				</button>
			</div>
		);
	}
}
