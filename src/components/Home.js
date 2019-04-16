import { h } from 'hyperapp';
import { Route } from "@hyperapp/router"
import Chart from 'chart.js'

const MyChart = (props) => {
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d');
      const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: ['Imac Gaming'],
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: props.hoursPlayed
            }]
        },

        // Configuration options go here
        options: {}
      });
    }
  })
}

export default () => (
  <div>
    <h2>Home</h2>
    <MyChart hoursPlayed={[0, 10, 5, 2, 20, 30, 45]} />
  </div>
);
