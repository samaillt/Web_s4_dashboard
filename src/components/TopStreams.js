import { h } from 'hyperapp'

export default (props) => (
	<ul class="top-games d-flex flex-wrap justify-content-between py-3">
		{props.topStreams && props.topStreams.map(s => (
			<li key={s._id} class="my-3 mx-1 d-flex flex-column">
				<a href={s.channel.url} target="_blank">
          <img src={s.channel.logo} alt={s.channel.name}/>
        </a>
        <div class="legend">
          <p class="name">{s.channel.name}</p>
          <p>Playing {s.game}</p>
          <p class="viewers-count mt-2">{s.viewers_formated}</p>
        </div>
			</li>
		))}
	</ul>
);
