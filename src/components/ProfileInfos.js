import { h } from 'hyperapp'

export default (props) => (
	<div id="profile-container" class="d-flex flex-wrap justify-content-center">
		<div class="profile-card d-flex flex-column justify-content-center align-items-center">
			<img class="profile" src={props.profile.logo} alt={props.profile.display_name}/>
			<p className='name'>{props.profile.display_name}</p>
		</div>
		<div class="profile-infos d-flex flex-column justify-content-center align-items-center">
			<p className='value'>{props.profile.followers}</p>
			<p className='name'>Followers</p>
		</div>
		<div class="profile-infos d-flex flex-column justify-content-center align-items-center">
			<p className='value'>{props.profile.views}</p>
			<p className='name'>Views</p>
		</div>
	</div>
);