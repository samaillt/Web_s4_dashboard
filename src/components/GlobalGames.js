import { h } from 'hyperapp'

export default (props) => (
    <div>
      <canvas oncreate={ (element) => {
          console.log('names',props.labels)
          console.log('data',props.data)

          const ctx = element.getContext('2d');
          const chart = new Chart(ctx, {
          
            type: 'bar',
    
            // The data for our dataset
            data: {
              labels: props.labels,
              datasets: [
                {
                  label: 'Views',
                  backgroundColor: ['#3e95cd', '#8e5ea2','#3cba9f','#e8c3b9','#c45850'],
                  data: props.data 
                }
              ]
            },
            options: {}
          });
      }
      }>
      </canvas>
    </div>
); 