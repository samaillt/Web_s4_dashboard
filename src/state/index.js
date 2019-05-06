import { location as router } from '@hyperapp/router'

export default {
	location: router.state,
	topGames: [],
	topStreams: [],
	profileInput: {
		value: ''
	},
	channelLoaded : false
};
