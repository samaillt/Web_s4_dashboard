import { h } from 'hyperapp'

export default (props) => (
  <ul class="top-clips cards d-flex flex-wrap justify-content-between py-3">
		{props.topClips && props.topClips.map(c => (
			<li key={c.tracking_id} class="my-3 mx-1 d-flex flex-column" onclick={() => props.setSelectedClip(c)}>
				<img src={c.thumbnails.medium} alt={c.slug} />
				<div class="legend">
					<p class="name">{c.title}</p>
					<p class="name">{c.broadcaster.display_name}</p>
					<p class="viewers-count">{c.views_formated}</p>
				</div>
			</li>
		))}
    </ul>
);
