import { h } from 'hyperapp'
import Chart from 'chart.js'
import TopGames from './TopGames'
import TopStreams from './TopStreams'
 
export default props => locationProps => state => (
	<div class="home" oncreate={props.actions.getTopData}>
		<h2>Top Games {state.topGamesLoading && "loading..."}</h2>
		<button class="primary-btn" onclick={() => {props.actions.setTopGames([])}}>Clear</button>
		<button class="secondary-btn" onclick={props.actions.getTopGames}>Refresh</button>
		<TopGames topGames={state.topGames} />

		<h2>Top Streams {state.topStreamsLoading && "loading..."}</h2>
		<button class="primary-btn" onclick={() => {props.actions.setTopStreams([])}}>Clear</button>
		<button class="secondary-btn" onclick={props.actions.getTopStreams}>Refresh</button>
		<TopStreams topStreams={state.topStreams} />
	</div>
);
