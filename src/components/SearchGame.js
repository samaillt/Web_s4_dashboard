import { h } from 'hyperapp'

export default (props) => (
	<div class="search-games">
		<input
			type="text"
			name="search-game"
			value={props.searchGame.value}
			oninput={(e) => {
				props.searchGameValueUpdate(e.target.value)
				props.searchGameQuery()
			}} />
		<button
			onclick={() => props.searchGameQuery()}
			disabled={!props.searchGame.value}>Valider</button>
		{
			props.searchGame.results &&
			(<ul class="search-game-results my-3 p-3 d-flex flex-column w-50">
				{props.searchGame.results.map(game => (<li class="d-flex">{game.name}</li>))}
			</ul>)
		}
	</div>
);
