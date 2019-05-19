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
	selectedClip:{},
	profileInput: {
		value: ''
	},
	profiles: [],
	comparedProfileInput: {
		value: ''
	},
	channelLoaded: false,
	searchGame: {
		value: '',
		results: []
	}
};
