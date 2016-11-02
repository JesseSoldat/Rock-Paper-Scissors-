import React, {Component} from 'react';

export default class extends Component {

	render(){
		return(
		<div className="btn-group btn-group-justified pad">
			<div className="btn-group" roleName="group">
				<button typeName="button" className="btn btn-default" onClick={this.props.play.bind(this, 'Rock')}
				>Rock
				</button>
			</div>

			<div className="btn-group" roleName="group">
				<button typeName="button" className="btn btn-default" onClick={this.props.play.bind(this, 'Paper')}
				>Paper
				</button>
			</div>

			<div className="btn-group" roleName="group">
				<button typeName="button" className="btn btn-default" onClick={this.props.play.bind(this, 'Scissors')}
				>Scissors
				</button>
			</div>
		</div>
		)
	}
}