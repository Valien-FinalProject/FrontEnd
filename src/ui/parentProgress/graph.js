import React from 'react';
import {connect} from 'react-redux'



const ReactHighcharts = require('react-highcharts')
const HighCharts = require('highcharts')

// HighCharts.setOptions({
// 	lang:{
// 		shortWeekdays:['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
// 	}
// })

// const config = React.createClass{
//     chart: {
//             type: 'column',
//             backgroundColor:"red",
//             height:1000
//         },

//         title: {
//             text: "Children's Progress" 
//         },

//         subtitle: {
//             text: 'Total Points'
//         },

//         xAxis: {
//             categories:["c1", "c2", "c3", "c4","c5","c6","c7"]
//           },
//         series: [{
//             data: [5, 6, 4, 7, 6, 2, 1]
//             // pointStart: Date.UTC(2016,8,22),
//             // pointIntervalUnit: 'day'
//         }]

//   };
// class Graph extends React.Component {
//   componentDidMount() {
//   	console.log()
//     let chart = this.refs.chart.getChart();
//     // chart.series[0].addPoint({x: 10, y: 12});
//   }
 
//   render() {
//     return <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
//   }
// }

// const stateToProps = function(state){
// 	return{
// 		rewards:state.rewardReducer.rewards,
//     children:state.parentReducer.children
// 	}
// }



// export default connect(stateToProps)(Graph)