import { h } from 'hyperapp'
import Chart from 'chart.js'
import TopGames from './TopGames'
import GlobalGames from './GlobalGames'
import TopStreams from './TopStreams'
import TopStreamsFromGame from './TopStreamsFromGame'

export default props => locationProps => state => (
	<div class="home" oncreate={props.actions.getTopData}>
		<h2>Top Games {state.topGamesLoading && "loading..."}</h2>
		<button class="primary-btn" onclick={() => {props.actions.setTopGames([])}}>Clear</button>
		<button class="secondary-btn" onclick={props.actions.getTopGames}>Refresh</button>
		<TopGames topGames={state.topGames} getTopStreamsFromGame={props.actions.getTopStreamsFromGame}/>

		<h2>Top Games Views {state.topGamesLoading && "loading..."}</h2>
		{!state.topGamesLoading &&
		<GlobalGames
			key="chart1"
			labels={state.topGames.map(g => g.game.name)}
			data={state.topGames.map(g => g.viewers)} />}

		<h2>{state.topStreamsFromGameLoading !== undefined && 
			state.topStreamsFromGameLoading && "Top Streams from game Loading ..."}
			{state.topStreamsFromGameLoading !== undefined && 
			!state.topStreamsFromGameLoading && ("Top Streams from " + state.topStreamsFromGame.searchedGame)}
		</h2>
		{state.topStreamsFromGameLoading !== undefined && 
		!state.topStreamsFromGameLoading &&
		<TopStreamsFromGame
			key="chart2"
			labels={state.topStreamsFromGame.results.map(s => s.channel.name)}
			data={state.topStreamsFromGame.results.map(s => s.viewers)}/>} 

		<h2>Top Streams {state.topStreamsLoading && "loading..."}</h2>
		<button class="primary-btn" onclick={() => {props.actions.setTopStreams([])}}>Clear</button>
		<button class="secondary-btn" onclick={props.actions.getTopStreams}>Refresh</button>
		<TopStreams topStreams={state.topStreams} />
	</div>
);
