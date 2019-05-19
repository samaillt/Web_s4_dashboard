import { h } from 'hyperapp'

export default (props) => (
	<div class="search-channel">
		<h2>Compare</h2>
		<input
			type="text"
			class="p-2"
			name="search-channel"
			placeholder="Channel name"
			oninput={ (e) => props.actions.setComparedChannelValue(e.target.value) }
			value={props.state.comparedChannelInput.value}
		/>
		<button class="secondary-btn" onclick={props.actions.getComparedChannelByName}>Add</button>
		<button class="primary-btn" onclick={props.actions.clearChannels}>Clear</button>
	</div>
);