import { h } from 'hyperapp'

export default (props) => (
	<div class="search-channel">
		<h2>Compare</h2>
		<input
			type="text"
			class="p-2"
			name="search-channel"
			placeholder="Channel name"
			oninput={ (e) => props.actions.setComparedProfileValue(e.target.value) }
			value={props.state.comparedProfileInput.value}
		/>
		<button class="secondary-btn" onclick={props.actions.getComparedChannelByName}>Add</button>
	</div>
);