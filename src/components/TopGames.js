import { h } from 'hyperapp'

export default (props) => (
	<ul class="top-games d-flex flex-wrap justify-content-between py-3">
		{props.topGames && props.topGames.map(g => (
			<li key={g.id} class="my-3 mx-1 d-flex flex-column">
				<img src={g.game.box.template.replace('{width}', '285').replace('{height}', '380')} alt={g.name} />
				<div class="legend">
					<p class="name">{g.game.name}</p>
					<p class="viewers-count">{g.viewers_formated}</p>
				</div>
			</li>
		))}
	</ul>
);