import { location as router } from '@hyperapp/router'

const API_URL = "https://api.twitch.tv/kraken/"
const CLIENT_ID = "v4la970ztrif17s6tvu56zb1gyticw"

export default {
	location: router.actions,

	getTopGames: () => (state, actions) => {
		console.log("getTopGames actions", API_URL)

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
			console.log('data',data)
			const games = data.top
			console.log('GAMES', games)

			const names = games.map(g => g.game.name)
			console.log('NAMES',names)

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
};
