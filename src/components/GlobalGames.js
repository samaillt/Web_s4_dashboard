import { h } from 'hyperapp'

const GlobalGamesChart = (props) => {
  return h('div',{}, [
		h('canvas', {
			oncreate: (element) => {
				console.log('GAME', props.labels)
				console.log('VIEWERS', props.data)
				const ctx = element.getContext('2d');
				const chart = new Chart(ctx, {
					type: 'bar',
					//The data for our dataset
					data: {
						labels: props.labels,
						datasets: [
							{
								label: 'Number of Viewers',
								backgroundColor: ['#3e95cd', '#8e5ea2','#3cba9f','#e8c3b9','#c45850'],
								data: props.data
							}
						]
					},
					options: {}
				}, []);
			}
			//onupdate: ...,
			//onremove: ...,
			//ondestroy: ...,
		})
	]);
}

export default (props) => (
      <GlobalGamesChart labels={props.labels} data={props.data}/>
); 