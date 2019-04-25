import { h } from 'hyperapp'

export default (props) => (
	<ul class="top-games">
		{props.topGames && props.topGames.map(g => (
			<li key={g.id}>
				<img src={g.box_art_url.replace('{width}', '285').replace('{height}', '380')} alt={g.name} />
				<div class="legend">
					<p>{g.name}</p>
				</div>
			</li>
		))}
	</ul>
);
