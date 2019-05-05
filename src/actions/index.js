import { location as router } from '@hyperapp/router'

const API_URL = "https://api.twitch.tv/kraken/"
const CLIENT_ID = "v4la970ztrif17s6tvu56zb1gyticw"

export default {
	location: router.actions,

	getTopData: () => (state,actions) => {
		console.log("getTopData actions", API_URL)
		console.log('actions',actions)
		actions.getTopGames()
		actions.getTopStreams()
		return {...state}
	},

	getTopGames: () => (state, actions) => {
		console.log("getTopGames actions", API_URL)
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'method': 'GET',
			'Client-ID': CLIENT_ID 
		}
		const options = {
		}

		const response = fetch(API_URL + 'games/top?limit=5', {
			headers,
			...options
		}).then(response => response.json())
			.catch(function(error) {
				console.log(error)
			});

		response.then((data) => {
			const games = data.top
			
			actions.setTopGames(games)
		})

		return {
			...state,
			topGamesLoading: true
		}
	},
	
	setTopGames: (payload) => {
		console.log("payload", payload)
		return (state) => ({
			...state,
			topGames: payload,
			topGamesLoading: false
		})
	},

	getTopStreams: () => (state, actions) => {
		console.log("getTopStreams actions", API_URL)
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'method': 'GET',
			'Client-ID': CLIENT_ID 
		}
		const options = {
		}

		const response = fetch(API_URL + 'streams?limit=5', {
			headers,
			...options
		}).then(response => response.json())
			.catch(function(error) {
				console.log(error)
			});

		response.then((data) => {
			const streams = data.streams
			console.log('STREAMS', streams)
			
			actions.setTopStreams(streams)
		})

		return {
			...state,
			topStreamsLoading: true
		}
	},

	setTopStreams: (payload) => {
		console.log("payload", payload)
		return (state) => ({
			...state,
			topStreams: payload,
			topStreamsLoading: false
		})
	},
};
