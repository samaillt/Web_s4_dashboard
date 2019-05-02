import { h } from 'hyperapp'
import Chart from 'chart.js'
import TopGames from './TopGames'
import GlobalGames from './GlobalGames'

const LineChart = (props) => {
	return h('div', {}, [
			h('canvas', {
				oncreate: (element) => {
					const ctx = element.getContext('2d');
					const chart = new Chart(ctx, {
						// The type of chart we want to create
						type: 'line',

						// The data for our dataset
						data: {
							labels: props.labels,
							datasets: [{
								label: ['Viewers'],
								backgroundColor: 'rgb(255, 99, 132)',
								borderColor: 'rgb(255, 99, 132)',
								data: props.data
							}]
						},

						// Configuration options go here
						options: {}
					});
				},
			})
		]
	)
}

export default props => locationProps => state => (
	<div class="home" oncreate={props.getTopGames}>
		<h2>Top games {state.topGamesLoading && "loading..."}</h2>
		<button class="primary-btn" onclick={() => {props.setTopGames([])}}>Clear</button>
		<button class="secondary-btn" onclick={props.getTopGames}>Refresh</button>
		
		<TopGames topGames={state.topGames} />
		<GlobalGames	key="chart1" 
									labels = {state.topGames.map(g => g.game.name)}
									data = {state.topGames.map(g => g.viewers)}/>
	</div>
);
