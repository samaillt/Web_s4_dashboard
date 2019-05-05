import { h } from 'hyperapp'

export default (props) => (
	<div>
		<div class="profile-infos">
			<p className='value'>{props.profile.followers}</p>
			<p className='name'>Followers</p>
		</div>
		<div class="profile-infos">
			<p className='value'>{props.profile.views}</p>
			<p className='name'>Views</p>
		</div>
		<img class="profile" src={props.profile.logo} alt={props.profile.display_name}/>
	</div>
);
