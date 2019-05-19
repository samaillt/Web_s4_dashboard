import { h } from 'hyperapp'
import Chart from 'chart.js'
import TopGames from './TopGames'
import GlobalGames from './GlobalGames'
import TopStreams from './TopStreams'
import TopStreamsFromGame from './TopStreamsFromGame'
import TopClips from './TopClips'
import SelectedClip from './SelectedClip'
import SearchGame from './SearchGame'

export default props => locationProps => state => (
	<div class="home" oncreate={props.actions.getTopData}>
		<div class="component">
			<h2>Top Games {state.topGamesLoading && "loading..."}</h2>
			<button class="primary-btn" onclick={() => {props.actions.setTopGames([])}}>Clear</button>
			<button class="secondary-btn" onclick={props.actions.getTopGames}>Refresh</button>
			{!state.topGamesLoading &&
				<GlobalGames
					key="chart1"
					labels={state.topGames.map(g => g.game.name)}
					data={state.topGames.map(g => g.viewers)} />}
			<TopGames
				topGames={state.topGames}
				getTopStreamsFromGame={props.actions.getTopStreamsFromGame}/>
		</div>

		<div class="component">
			<div class="d-flex">
				<div class="">
					<h2>Search Game</h2>
					{state.searchGame.results &&
						<button
								class="secondary-btn mb-2"
								onclick={props.actions.resetSearchedGames}>Clear</button>
					}
					<SearchGame
						searchGameValueUpdate={props.actions.searchGameValueUpdate}
						searchGame={state.searchGame}
						searchGameQuery={props.actions.searchGameQuery}
						resetSearchedGames={props.actions.resetSearchedGames}
						getTopStreamsFromGame={props.actions.getTopStreamsFromGame}/>
				</div>
				<div>
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
				</div>
			</div>
		</div>

		<div class="component">
			<h2>Top Streams {state.topStreamsLoading && "loading..."}</h2>
			<button class="primary-btn" onclick={() => {props.actions.setTopStreams([])}}>Clear</button>
			<button class="secondary-btn" onclick={props.actions.getTopStreams}>Refresh</button>
			<TopStreams topStreams={state.topStreams} />
		</div>

		<div class="component">
			<h2>Top Clips {state.topClipsLoading && "loading..."}</h2>
			<button class="primary-btn" onclick={() => {props.actions.setTopClips([]); props.actions.setSelectedClip({})}}>Clear</button>
			<button class="secondary-btn" onclick={props.actions.getTopClips}>Refresh</button>
			<TopClips
				topClips={state.topClips}
				setSelectedClip={props.actions.setSelectedClip}/>
			{state.selectedClip !== {} && <SelectedClip selectedClip={state.selectedClip} />}
		</div>
	</div>
);
