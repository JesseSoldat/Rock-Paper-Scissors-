import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import style from './game.css';

import Pad from './Pad';

class App extends Component {
	constructor() {
		super()

		this.state = {
			games: []
		};

		this.randomPick = this.randomPick.bind(this);
		this.play = this.play.bind(this);
	}

	randomPick() {
		let options = ["Rock", "Paper", "Scissors"];
		return options[Math.floor(Math.random()*3)];
	}

	play(option) {
		var game = {};
		console.log(option);

	}

	render(){
		return (
		<div>
			<h3>JLab</h3>
			<Pad play={this.play}/>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));