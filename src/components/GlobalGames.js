import { h } from 'hyperapp'
const format = require('format-number');

const GlobalGamesChart = (props) => {
  return h('div',{}, [
		h('canvas', {
			oncreate: (element) => {
				const ctx = element.getContext('2d');
				const chart = new Chart(ctx, {
					type: 'bar',
					//The data for our dataset
					data: {
						labels: props.labels,
						datasets: [
							{
								label: 'Number of Viewers',
								backgroundColor: [
									'rgba(100, 65, 165, .9)',
									'rgba(100, 65, 165, .9)',
									'rgba(100, 65, 165, .9)',
									'rgba(100, 65, 165, .9)',
									'rgba(100, 65, 165, .9)',
								],	
								data: props.data
							}
						]
					},
					options: {
						scales: {
							yAxes: [{
								ticks: {
									// Format ticks on the Y axis
									callback: function(value, index, values) {
										return format({integerSeparator: ' '})(value);
									}
								}
							}],
							xAxes: [{
								barPercentage: .5,
							}]
		        }
					}
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
