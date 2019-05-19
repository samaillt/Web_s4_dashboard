import { h } from 'hyperapp'
const format = require('format-number');

const ChannelsComparisonChart = (props) => {
  return h('div',{}, [
		h('canvas', {
			class: 'my-3 mx-1	', 
			oncreate: (element) => {
				const colors = [];
				for (const o of props.labels) {
				  colors.push('rgba(100, 65, 165, ' + (Math.random() * (0.9 - 0.1) + 0.1).toFixed(4) + ')');
				}
				const ctx = element.getContext('2d');
				const chart = new Chart(ctx, {
					type: 'doughnut',
					//The data for our dataset
					data: {
						labels: props.labels,
						datasets: [
							{
								backgroundColor: colors,
								data: props.data
							}
						]
					}
				}, []);
			}
		})
	]);
}

export default (props) => (
    <ChannelsComparisonChart labels={props.labels} data={props.data}/>
);