import { h } from 'hyperapp'

export default (props) => (
	<ul class="top-games">
		{props.topStreams && props.topStreams.map(s => (
			<li key={s._id}>
				<a href={s.channel.url}>
          <img src={s.channel.logo} alt={s.channel.name}/>
        </a>
        <div class="legend">
          <p>{s.channel.name}</p>
          <p>Playing {s.game}</p>
          <p>{s.viewers} Viewers</p>
        </div>
			</li>
		))}
	</ul>
);
