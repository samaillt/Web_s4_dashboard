import { h } from 'hyperapp'

export default (props) => (
	<div class="search-games">
		<input
			type="text"
			name="search-game"
			value={props.searchGame.value}
			oninput={(e) => props.searchGameValueUpdate(e.target.value)} />
		<button
			onclick={() => props.searchGameQuery()}
			disabled={!props.searchGame.value}>Valider</button>
		{
			props.searchGame.results &&
			(<ul class="search-game-results my-3 p-3">
				{props.searchGame.results.map(game => (<li>{game.name}</li>))}
			</ul>)
		}
	</div>
);
