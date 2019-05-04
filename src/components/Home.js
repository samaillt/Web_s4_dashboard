import { h } from 'hyperapp'
import Chart from 'chart.js'
import TopGames from './TopGames'
import GlobalGames from './GlobalGames'

export default props => locationProps => state => ( 
	<div class="home" oncreate={props.getTopGames}> 
		{console.log('state init', state)}
		<h2>Top games {state.topGamesLoading && "loading..."}</h2>
		<button class="primary-btn" onclick={() => {props.setTopGames([])}}>Clear</button>
		<button class="secondary-btn" onclick={props.getTopGames}>Refresh</button>
		<TopGames topGames={state.topGames} />

		<h2>Top global games {state.topGamesLoading && "loading..."}</h2>
		{!state.topGamesLoading && 
		<GlobalGames 
			key="chart2" 
			labels={state.topGames.map(g => g.game.name)} 
			data={state.topGames.map(g => g.viewers)} />}
	</div>
);
