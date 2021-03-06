import React, {Component} from 'react';

export default class extends Component {
	render(){
		var stats = this.props.scores.reduce( (stats, game) => {
			// console.log('---------------------');
			// console.log(stats);
			// console.log(game);
			if(game.result === 2) {
				stats.won++;
			} else if (game.result === 1){
				stats.tie++;
			} else if (game.result === 0){
				stats.lost++
			} return stats

		}, {won: 0, lost: 0, tie: 0});

		var message = ''
		var alertClass = '';

		if(this.props.scores.length){
			// console.log('Stats', stats);
			var game = this.props.scores[this.props.scores.length - 1]; //current round
			// console.log('game', game);
			if (game.result === 1) {
				message = "Tie! Play Again...";
			} else if (game.result === 2){
				message = "You Won! "+game.player+" beats "+game.computer+"!";
				alertClass = "won";
			} else {
				message = "You Lost! "+game.player+" loses to "+game.computer+"!";
				alertClass = "lost"
			}
		}
		return(
		<nav className="navbar navbar-default">
			<div className="container-fluid gameInfo">
				<div className="row">
					<div className="col-sm-6">
						<h4 className={alertClass}>
							<span><strong>{message}</strong></span>
						</h4>
					</div>
					<div className="col-sm-2 text-right">
						<h4>Won: <span><strong>{stats.won}</strong></span>
						</h4>
					</div>
					<div className="col-sm-2 text-right">
						<h4>Lost: <span><strong>{stats.lost}</strong></span>
						</h4>
					</div>
					<div className="col-sm-2 text-right">
						<h4>Tie: <span><strong>{stats.tie}</strong></span>
						</h4>
					</div>
				</div>
			</div>
		</nav>
		)
	}

}