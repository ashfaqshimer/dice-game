import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

export default class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = { number1: 'six', number2: 'six', rolling: false };
		this.roll = this.roll.bind(this);
	}

	static defaultProps = {
		dice: ['one', 'two', 'three', 'four', 'five', 'six']
	};

	roll() {
		const random1 = this.props.dice[Math.floor(Math.random() * this.props.dice.length)];
		const random2 = this.props.dice[Math.floor(Math.random() * this.props.dice.length)];

		this.setState({ rolling: true });
		setTimeout(() => {
			this.setState({ number1: random1, number2: random2, rolling: false });
		}, 1000);
	}

	render() {
		return (
			<div className='RollDice'>
				<h1 className='RollDice-title'>Winner Winner, Chicken Dinner!</h1>
				<Die number={this.state.number1} rolling={this.state.rolling} />
				<Die number={this.state.number2} rolling={this.state.rolling} />
				<button className='RollDice-button' disabled={this.state.rolling} onClick={this.roll}>
					{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
				</button>
			</div>
		);
	}
}
