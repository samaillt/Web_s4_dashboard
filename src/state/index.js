import { location as router } from '@hyperapp/router'

export default {
	location: router.state,
	topGames: [],
	topStreams: [],
	topStreamsFromGame: {
		results:[],
		searchedGame:""
	},
	topClips:[],
	selectedClip: {},
	channelInput: {
		value: ''
	},
	channels: [],
	comparedChannelInput: {
		value: ''
	},
	channelLoaded: false,
	searchGame: {
		value: '',
		results: []
	}
};
