import { location as router } from '@hyperapp/router'

export default {
	location: router.state,
	topGames: [],
	topStreams: [],
	topStreamsFromGame: {
		results:[],
		searchedGame:""
	},
	profileInput: {
		value: ''
	},
	channelLoaded : false
};
