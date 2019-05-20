import { location as router } from '@hyperapp/router'
const format = require('format-number');

const API_URL = "https://api.twitch.tv/kraken/"
const CLIENT_ID = "v4la970ztrif17s6tvu56zb1gyticw"

export default {
	location: router.actions,

	/**
	 * @name : getTopData
	 * @parameter : ()
	 * @return : (state, actions)
	 * @descripton : Retrieve all the data from the API for the homepage
	 */
	getTopData: () => (state,actions) => {
		actions.getTopGames()
		actions.getTopStreams()
		actions.getTopClips()
		return {...state}
	},

	/**
	 * @name : getTopGames
	 * @parameter : ()
	 * @return : (state, actions)
	 * @descripton : Retrieve data from the global top games and set the new state
	 */
	getTopGames: () => (state, actions) => {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Client-ID': CLIENT_ID
		}

		const options = {
			method: 'GET',
			headers: headers,
			mode: 'cors',
			cache: 'default'
		}

		const response = fetch(API_URL + 'games/top?limit=5', options)
			.then(response => response.json())
			.catch(function(error) {
				console.log(error)
			})

		response.then((data) => {
			const games = data.top
			const newGames = games.map(g => ({
				...g,
				viewers_formated: format({integerSeparator: ' ', suffix: ' viewers'})(g.viewers) // Number formatting
			}))
			actions.setTopGames(newGames)
		})

		return {
			...state,
			topGamesLoading: true
		}
	},

	/**
	 * @name : setTopGames
	 * @parameter : (payload)
	 * @return : (state)
	 * @descripton : Set the top games with the payload parameter and return the new state 
	 */
	setTopGames: (payload) => {
		return (state) => ({
			...state,
			topGames: payload,
			topGamesLoading: false
		})
	},

	/**
	 * @name : getTopStreams
	 * @parameter : (none)
	 * @return : (state, actions)
	 * @descripton : Retrieve data from the global top streams and set the new state
	 */
	getTopStreams: () => (state, actions) => {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Client-ID': CLIENT_ID
		}

		const options = {
			method: 'GET',
			headers: headers,
			mode: 'cors',
			cache: 'default'
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
			const newStreams = streams.map(s => ({
				...s,
				viewers_formated: format({integerSeparator: ' ', suffix: ' viewers'})(s.viewers) // Number formatting
			}))
			actions.setTopStreams(newStreams)
		})

		return {
			...state,
			topStreamsLoading: true
		}
	},

	/**
	 * @name : setTopStreams
	 * @parameter : (payload)
	 * @return : (state)
	 * @descripton : Set the top streams with the payload parameter and return the new state
	 */
	setTopStreams: (payload) => {
		return (state) => ({
			...state,
			topStreams: payload,
			topStreamsLoading: false
		})
	},

	/**
	 * @name : getTopStreamsFromGame
	 * @parameter : (game)
	 * @return : (state, actions)
	 * @descripton : Retrieve data from the top streams for the game parameter and set the new state
	 */
	getTopStreamsFromGame: (game) => (state, actions) => {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Client-ID': CLIENT_ID
		}

		const options = {
			method: 'GET',
			headers: headers,
			mode: 'cors',
			cache: 'default'
		}

		const response = fetch(API_URL + 'streams?limit=5&game=' + game, {
			headers,
			...options
		}).then(response => response.json())
			.catch(function(error) {
				console.log(error)
			});

		response.then((data) => {
			const streams = data.streams.map(s => ({
				...s,
				viewers_formated: format({integerSeparator: ' ', suffix: ' viewers'})(s.viewers) // Number formatting
			}))
			const newStreams = {
				searchedGame:game,
				results:[...streams]
			}
			actions.setTopStreamsFromGame(newStreams)
		})

		return {
			...state,
			topStreamsFromGameLoading: true
		}
	},

	/**
	 * @name : setTopStreamsFromGame
	 * @parameter : (payload)
	 * @return : (state)
	 * @descripton : Set the top streams from the selected game with the payload parameter and return the new state
	 */
	setTopStreamsFromGame: (payload) => {
		return (state) => ({
			...state,
			topStreamsFromGame: payload,
			topStreamsFromGameLoading: false
		})
	},

	/**
	 * @name : getTopClips
	 * @parameter : (none)
	 * @return : (state, actions)
	 * @descripton : Retrieve the data from the global top clips and set the new state
	 */
	getTopClips: () => (state, actions) => {
		const headers = {
			'Accept': ' application/vnd.twitchtv.v5+json\r\n',
			'Content-Type': 'application/json',
			'Client-ID': CLIENT_ID
		}

		const options = {
			method: 'GET',
			headers: headers,
			mode: 'cors',
			cache: 'default'
		}

		const response = fetch(API_URL + 'clips/top?limit=5', {
			headers,
			...options
		}).then(response => response.json())
			.catch(function(error) {
				console.log(error)
			});

		response.then((data) => {
			const clips = data.clips
			const newClips = clips.map(s => ({
				...s,
				views_formated: format({integerSeparator: ' ', suffix: ' views'})(s.views) // Number formatting
			}))
			actions.setTopClips(newClips)
		})

		return {
			...state,
			topClipsLoading: true
		}
	},

	/**
	 * @name : setTopClips
	 * @parameter : (payload)
	 * @return : (state)
	 * @descripton : Set the top clips with the payload parameter and set the new state
	 */
	setTopClips: (payload) => {
		return (state) => ({
			...state,
			topClips: payload,
			topClipsLoading: false
		})
	},

	/**
	 * @name : setSelectedClip
	 * @parameter : (payload)
	 * @return : (state)
	 * @descripton : Set the selected clip with the payload parameter and return the new state
	 */
	setSelectedClip: (payload) => {
		return (state) => ({
			...state,
			selectedClip: payload
		})
	},

	/**
	 * @name : setChannelValue
	 * @parameter : (value)
	 * @return : (staste)
	 * @descripton : Set the channel value with the payload parameter and return the new state
	 */
	setChannelValue: (value) => (state) => {
		return {
			...state,
			channelInput: {
				...state.channelInput,
				value
			}
		}
	},

	/**
	 * @name : setComparedChannelValue
	 * @parameter : (value)
	 * @return : (state)
	 * @descripton : Set the compared channel value with the payload parameter and return the new state 
	 */
	setComparedChannelValue: (value) => (state) => {
		return {
			...state,
			comparedChannelInput: {
				...state.comparedChannelInput,
				value
			}
		}
	},

	/**
	 * @name : setChannel
	 * @parameter : (payload)
	 * @return : (state)
	 * @descripton : Set the channel with the payoad parameter and return the new state
	 */
	setChannel: (payload) => (state) => {
		return {
			...state,
			channelLoaded: true,
			channels: [
				payload
			]
		}
	},

	/**
	 * @name : getCurrentChannels
	 * @parameter : (none)
	 * @return : (state)
	 * @descripton : Retrieve the data from the current channels
	 */
	getCurrentChannels: () => (state) => {
		return {...state, channelLoading: false}
	},

	/**
	 * @name : addChannel
	 * @parameter : (payload)
	 * @return : (state)
	 * @descripton : Add a new channel with the payload parameter in the channels array and return the new state
	 */
	addChannel: (payload) => (state) => {
		const found = false
		for (const c of state.channels)
			if (c._id == payload._id)
				return {...state, channelLoading: false}
		return {
			...state,
			channelLoading: false,
			channels: [
				...state.channels,
				payload
			]
		}
	},

	/**
	 * @name : resetChannel
	 * @parameter : (none)
	 * @return : (state)
	 * @descripton : Reset the channels array and return the new state
	 */
	resetChannel: () => (state) => {
		return {
			...state,
			channelLoaded: false,
			channels : []
		}
	},

	/**
	 * @name : clearChannels
	 * @parameter : (none)
	 * @return : (state)
	 * @descripton : Clear the channels array except the current channel and return the new state
	 */
	clearChannels: () => (state) => {
		return {
			...state,
			channels : [
				state.channels[0]
			]
		}
	},

	/**
	 * @name : getChannelByName
	 * @parameter : (none)
	 * @return : (state, actions)
	 * @descripton : Retrieve the data from the channel (state.channelInput.value) and set the new state
	 */
	getChannelByName: () => (state, actions) => {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Client-ID': CLIENT_ID
		}

		const options = {
			method: 'GET',
			headers: headers,
			mode: 'cors',
			cache: 'default'
		}

		const response = fetch(API_URL + 'channels/' + state.channelInput.value, options)
			.then(response => response.json())
			.catch(function(error) {
				console.log(error)
			})

		response.then((data) => {
			"error" in data ? actions.resetChannel() : actions.setChannel(data)
		})
		return state
	},

	/**
	 * @name : getComparedChannelByName
	 * @parameter : (none)
	 * @return : (state, actions)
	 * @descripton : Retrieve the data from the compared channel (state.comparedChannelInput.value) and set the new state
	 */
	getComparedChannelByName: () => (state, actions) => {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Client-ID': CLIENT_ID
		}

		const options = {
			method: 'GET',
			headers: headers,
			mode: 'cors',
			cache: 'default'
		}

		const response = fetch(API_URL + 'channels/' + state.comparedChannelInput.value, options)
			.then(response => response.json())
			.catch(function(error) {
				console.log(error)
			})

		response.then((data) => {
			"error" in data ? actions.getCurrentChannels() : actions.addChannel(data)
		})

		return {
			...state,
			channelLoading: true
		}
	},

	/**
	 * @name : searchGameValueUpdate
	 * @parameter : (value)
	 * @return : (state)
	 * @descripton : Set the search game value with the value parameter and return the new state
	 */
	searchGameValueUpdate: (value) => (state) => {
		return {
			...state,
			searchGame: {
				...state.searchGame,
				value: value
			}
		}
	},

	/**
	 * @name : searchGameQuery
	 * @parameter : (none)
	 * @return : (state, actions)
	 * @descripton : Retrieve the data from the game query and set the new state
	 */
	searchGameQuery: () => (state, actions) => {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Client-ID': CLIENT_ID
		}

		const options = {
			method: 'GET',
			headers: headers,
			mode: 'cors',
			cache: 'default'
		}

		const response = fetch(API_URL + 'search/games?type=suggest&query=' + state.searchGame.value, options)
			.then(response => response.json())
			.catch(function(error) {
				console.log(error)
			})

		response.then((data) => {
			actions.setSearchGamesResults(data.games)
		})

		return state
	},

	/**
	 * @name : setSearchGamesResults
	 * @parameter : (payload)
	 * @return : (state)
	 * @descripton : Set the search games results with the payload parameter and return the new state
	 */
	setSearchGamesResults: (payload) => (state) => {
		return {
			...state,
			searchGame: {
				...state.searchGame,
				results: payload
			}
		}
	},

	/**
	 * @name : resetSearchedGames
	 * @parameter : (none)
	 * @return : (state)
	 * @descripton : Clear the results for the searched games and return the new state
	 */
	resetSearchedGames: () => (state) => {
		return {
			...state,
			searchGame: {
				...state.searchGame,
				results: []
			}
		}
	},
};
