import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import style from './game.css';

import Scores from './Scores';
import Pad from './Pad';

class App extends Component {
	constructor() {
		super()

		this.state = {
			computer: this.randomPick(),
			games: []
		};

		this.randomPick = this.randomPick.bind(this);
		this.play = this.play.bind(this);
	}

	randomPick() {
		var options = ["Rock", "Paper", "Scissors"];
		return options[Math.floor(Math.random()*3)];
	}

	play(option) {
		var game = {};
		console.log('Player:', option);
		console.log('Computer: ', this.state.computer);
		if(this.state.computer === option){
			game.result = 1;
			console.log('Tie!');
		} else if ( 
			(this.state.computer === "Rock" && option === "Paper")
			||
			(this.state.computer === "Paper" && option === "Scissors")
			||
			(this.state.computer === "Scissors" && option === "Rock")
			) {
				game.result = 2;
				console.log("Win!");
			} else {
				game.result = 0;
				console.log("Loose!");
			}
			game.computer = this.state.computer;
			game.player = option;

			var games = this.state.games;
			games.push(game);

			var random = this.randomPick();

			this.setState({games, computer: random});


	}

	render(){
		return (
		<div>
			<h3>JLab</h3>
			<Scores scores={this.state.games} />
			<Pad play={this.play}/>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));