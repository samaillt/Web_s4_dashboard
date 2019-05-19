import { h } from 'hyperapp'

const ChannelsComparisonChart = (props) => {
  return h('div',{}, [
		h('canvas', {
			oncreate: (element) => {
				const colors = [];
				for (const o of props.labels) {
				  colors.push('rgba(100, 65, 165, .9)');
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