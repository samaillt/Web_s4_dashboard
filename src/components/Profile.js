import { h } from 'hyperapp';
import ProfileInfos from './ProfileInfos'

export default props => locationProps => state => (
	<div id="profile-content">
		<h2>Profile</h2>
		<div class="search">
			<input
				oninput={ (e) => props.actions.setProfileValue(e.target.value) }
				value={state.profileInput.value}
			/>
			<button class="secondary-btn" onclick={props.actions.getChannelByName}>Search</button>
		</div>
		{state.channelLoaded && 
			<ProfileInfos 
				profile={state.profile}
			/>}
	</div>
);