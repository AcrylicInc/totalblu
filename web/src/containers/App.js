import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../scenes/navigation/components/Header/actions';
import PropTypes from 'prop-types';
import Header from '../scenes/navigation/components/Header';

class App extends Component {
	// static propTypes = {
	//     players: PropTypes.array.isRequired
	// };

	render() {
	const { dispatch, players, selectedPlayerIndex } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);

    // let selectedPlayer;
    // if(selectedPlayerIndex !== -1){
    //   selectedPlayer = players[selectedPlayerIndex];
    // }

    // const playerComponents = players.map((player, index) => (
    //   <Player
    //     index={index}
    //     name={player.name}
    //     score={player.score}
    //     key={player.name}
    //     updatePlayerScore={updatePlayerScore}
    //     removePlayer={removePlayer}
    //     selectPlayer={selectPlayer}
    //   />
    // ));

          		// { playerComponents }


		return (
			<div className="totalblu-hr">
				<Header />
          		
			</div>
		);
	}
} 

const mapStateToProps = state => (
  {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
);

//export default connect(mapStateToProps)(App);
export default App;