import { h } from 'hyperapp'

export default (props) => (
	<div class="search-channel">
		<h2>Compare</h2>
		<div class="search d-flex flex-wrap justify-content-center">
			<input
				type="text"
				class="p-2"
				name="search-channel"
				placeholder="Channel name"
				oninput={ (e) => props.actions.setComparedChannelValue(e.target.value) }
				value={props.state.comparedChannelInput.value}
			/>
			<button class="primary-btn p-2" onclick={props.actions.getComparedChannelByName}>Add</button>
			<button class="secondary-btn" onclick={props.actions.clearChannels}>Clear</button>
		</div>
	</div>
);