import { h } from 'hyperapp'

export default (props) => (
	<div id="channel-container" class="d-flex flex-wrap justify-content-between">
		<div class="channel-card d-flex flex-column justify-content-center align-items-center">
			<img class="channel" src={props.channel.logo} alt={props.channel.display_name}/>
			<p className='name'>{props.channel.display_name}</p>
		</div>
		<div class="channel-infos d-flex flex-column justify-content-center align-items-center">
			<p className='value'>{props.channel.followers}</p>
			<p className='name'>Followers</p>
		</div>
		<div class="channel-infos d-flex flex-column justify-content-center align-items-center">
			<p className='value'>{props.channel.views}</p>
			<p className='name'>Views</p>
		</div>
	</div>
);