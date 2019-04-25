import { location as router } from '@hyperapp/router'

const API_URL = "https://api.twitch.tv/helix/"
const CLIENT_ID = "v4la970ztrif17s6tvu56zb1gyticw"

export default {
	location: router.actions,

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

		const response = fetch(API_URL + 'games/top', {
			headers,
			...options
		}).then(response => response.json())
			.catch(function(error) {
				console.log(error)
			});

		response.then((data) => {
			const games = data.data.slice(0,5)
			console.log('GAMES', games)

			const names = games.map(g => g.name)
			console.log("names", names)
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
