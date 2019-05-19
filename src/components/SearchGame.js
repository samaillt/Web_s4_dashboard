import { h } from 'hyperapp'

export default (props) => (
	<div class="search-games">
		<input
			type="text"
			class="p-2"
			name="search-game"
			value={props.searchGame.value}
			placeholder="Search game..."
			oninput={(e) => {
				props.searchGameValueUpdate(e.target.value)
				if (e.target.value.length >= 3) {
					props.searchGameQuery()
				} else {
					props.resetSearchedGames()
				}
			}}
			autocomplete="off" />
		<button
			onclick={() => props.searchGameQuery()}
			disabled={!props.searchGame.value}
			class="ml-2 p-2">Search</button>
		{
			props.searchGame.results.length > 0 &&
			(
				<div>
					<ul class="search-game-results mb-3 p-3 d-inline-flex flex-column">
					{
						props.searchGame.results.map(game =>
							(
								<li
									onclick={() => props.getTopStreamsFromGame(game.name)}
									class="d-flex">{game.name}</li>
							)
						)
					}
					</ul>
				</div>
			)
		}
	</div>
);
