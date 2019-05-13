import { h } from 'hyperapp'
import Chart from 'chart.js'
import TopGames from './TopGames'
import GlobalGames from './GlobalGames'
import TopStreams from './TopStreams'
import SearchGame from './SearchGame'

export default props => locationProps => state => (
	<div class="home" oncreate={props.actions.getTopData}>
		<h2>Top Games {state.topGamesLoading && "loading..."}</h2>
		<button class="primary-btn" onclick={() => {props.actions.setTopGames([])}}>Clear</button>
		<button class="secondary-btn" onclick={props.actions.getTopGames}>Refresh</button>
		{!state.topGamesLoading &&
			<GlobalGames
				key="chart2"
				labels={state.topGames.map(g => g.game.name)}
				data={state.topGames.map(g => g.viewers)} />}
		<TopGames topGames={state.topGames} />
		<h2>Search Game</h2>
		{state.searchGame.results &&
			(<button class="secondary-btn mb-2" onclick={props.actions.resetSearchedGames}>Clear</button>)
		}
		<SearchGame
			searchGameValueUpdate={props.actions.searchGameValueUpdate}
			searchGame={state.searchGame}
			searchGameQuery={props.actions.searchGameQuery}
			resetSearchedGames={props.actions.resetSearchedGames}/>
		<h2>Top Streams {state.topStreamsLoading && "loading..."}</h2>
		<button class="primary-btn" onclick={() => {props.actions.setTopStreams([])}}>Clear</button>
		<button class="secondary-btn" onclick={props.actions.getTopStreams}>Refresh</button>
		<TopStreams topStreams={state.topStreams} />
	</div>
);
