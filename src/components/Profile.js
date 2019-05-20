import { h } from 'hyperapp';
import ProfileInfos from './ProfileInfos'
import SearchChannel from './SearchChannel'
import ChannelsComparison from './ChannelsComparison'

export default props => locationProps => state => (
	<div class="channel">

		<div class="component">
			<h2>Channel</h2>
			<div class="search d-flex flex-wrap justify-content-center">
				<input
					oninput={ (e) => props.actions.setChannelValue(e.target.value) }
					placeholder="Channel name"
					value={state.channelInput.value}
				/>
				<button class="primary-btn" onclick={props.actions.getChannelByName}>Search</button>
			</div>
			{state.channelLoaded && 
				<ProfileInfos 
					channel={state.channels[0]}
				/>
			}
		</div>
		{ state.channelLoaded && <div class="component">			
			<SearchChannel
				state={state}
				actions={props.actions}
			/>
			{state.channels.length > 1 && !state.channelLoading &&
			<div class="d-flex flex-wrap justify-content-between">
				<div class="d-flex flex-column justify-content-center align-items-center"> 
					<h3> Followers </h3>
					
					<ChannelsComparison
						key="chart2"
						labels={state.channels.map(p => p.display_name)}
						data={state.channels.map(p => p.followers)}
					/>
				</div>
				<div class="d-flex flex-column justify-content-center align-items-center"> 
					<h3> Views </h3>
					<ChannelsComparison
						key="chart2"
						labels={state.channels.map(p => p.display_name)}
						data={state.channels.map(p => p.views)}
					/>
				</div>
			</div>}
		</div>}
	</div>
);