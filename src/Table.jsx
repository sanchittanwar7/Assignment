import React, { Component } from 'react'
import ReactTable from 'react-table'
// import mergeJSON from 'merge-json'
import './Table.css'
// var batting_data = [];


class Table extends Component {

	constructor(props){
		super(props)
		this.state = {
			this_data: [],
			batting_data: require('./batting.json')
		}
	}


	getData(team, division, tournament){
		var temp = []
		// console.log('temp', temp)
		this.state.batting_data.map((first, key1) => {
			if(division === "ALL" || tournament === "ALL" || (first.tournament === tournament && first.division === division)){
				first.stats.map((player, key2) => {
					if((tournament === "ALL" || first.tournament === tournament) && (division === "ALL" || first.division === division)){
						if(player[1] !== "Team" && team === "ALL" || player[1] === team){
							
							temp.push(player)
							
						}
					}
				})
			}
		})
				// console.log('temp', temp)

		this.setState({this_data: temp})
	}


	componentWillMount(){
		// console.log('this_data before', this.state.this_data)
		// console.log('batting_data before', this.state.batting_data)
		const team = this.props.team;
		const division = this.props.division;
		const tournament = this.props.tournament;
		// this.setState({this_data: []})
		this.getData(team, division, tournament)
		

	}

	// componentDidMount(){
	// 	this.setState({this_data: []})
	// }


	componentDidMount() {
		// const team = this.props.team;
		// const division = this.props.division;
		// const tournament = this.props.tournament;
		setInterval(() => {
			const team = this.props.team;
			const division = this.props.division;
			const tournament = this.props.tournament;
			this.getData(team, division, tournament)
		}, 1000);
	}

	render() {
		// console.log('props', this.props)
		



		// let this_data = []


		// batting_data = require('./batting.json');


		// const team = this.props.team;
		// const division = this.props.division;
		// const tournament = this.props.tournament;

		// this.getData(team, division, tournament)


		// var temp = []
		// console.log('temp', temp)
		// this.state.batting_data.map((first, key1) => {
		// 	if(division === "ALL" || tournament === "ALL" || (first.tournament === tournament && first.division === division)){
		// 		first.stats.map((player, key2) => {
		// 			if(team === "ALL" || player[1] === team){
						
		// 				temp.push(player)
						
		// 			}
		// 		})
		// 	}
		// })
		// 		console.log('temp', temp)

		// this.setState({this_data: temp})


		



		// this.state.batting_data.map((first, key1) => {
		// 	if(division === "ALL" || tournament === "ALL" || (first.tournament === tournament && first.division === division)){
		// 		first.stats.map((player, key2) => {
		// 			if(team === "ALL" || player[1] === team){
		// 				var temp = this.state.this_data
		// 				temp.push(player)
		// 				this.setState({this_data: temp})
		// 			}
		// 		})
		// 	}
		// })

		// console.log('this_data after', this.state.this_data)
		// console.log('batting_data after', this.state.batting_data)


		// let data = [];
		// if(this.props.division === 'ALL' && this.props.tournament === 'ALL'){
		// 	data = mergeJSON.merge(batting_data[0].stats, batting_data[1].stats);
		// 	data = mergeJSON.merge(data, batting_data[2].stats);
		// }
		// else if(this.props.division === "ALL"){
		// 	if(this.props.tournament === "Pro40"){
		// 		// data = mergeJSON.merge(batting_data[0].stats, batting_data[1].stats);
		// 		data = batting_data[0].stats.concat(batting_data[1].stats);
		// 	}

		// 	else
		// 		data = batting_data[2].stats;
		// }
		// else if(this.props.tournament === "ALL"){
		// 	if(this.props.division === "A"){
		// 		data = batting_data[0].stats.concat(batting_data[2].stats);
		// 		// data = mergeJSON.merge(batting_data[0].stats, batting_data[2].stats);
		// 	}
		// 	else
		// 		data = batting_data[1].stats;
		// }
		// else{
		// 	if(this.props.division === "A"){
		// 		if(this.props.tournament === "Pro40")
		// 			data = batting_data[0].stats;
		// 		else
		// 			data = batting_data[2].stats;
		// 	}
		// 	else{
		// 		if(this.props.tournament === "Pro40")
		// 			data = batting_data[1].stats;
		// 	}
		// }

		// let req_data = data;



		// console.log('req_data before team filtering', req_data)

		const columns = [{
		    Header: 'Batsman',
		    id: 'batsman',
		    accessor: d => d[0] // String-based value accessors!
		  },{
		    Header: 'Team',
		    id: 'team',
		    accessor: d => d[1] // String-based value accessors!
		  },{
		    Header: 'Matches',
		    id: 'matches',
		    accessor: d => d[2],
		    sortMethod: (a, b) => {
			    // force null and undefined to the bottom
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    // force any string values to lowercase
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    // Return either 1 or -1 to indicate a sort priority
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
			    return 0
			  } // String-based value accessors!
		  },{
		    Header: 'Innings',
		    id: 'innings',
		    accessor: d => d[3],
		    sortMethod: (a, b) => {
			    // force null and undefined to the bottom
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    // force any string values to lowercase
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    // Return either 1 or -1 to indicate a sort priority
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
			    return 0
			  } // String-based value accessors!
		  },{
		    Header: 'Not Outs',
		    id: 'not_outs',
		    accessor: d => d[4],
		    sortMethod: (a, b) => {
			    // force null and undefined to the bottom
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    // force any string values to lowercase
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    // Return either 1 or -1 to indicate a sort priority
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
			    return 0
			  } // String-based value accessors!
		  },{
		    Header: 'Runs',
		    id: 'runs',
		    accessor: d => d[5],
		    sortMethod: (a, b) => {
			    // force null and undefined to the bottom
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    // force any string values to lowercase
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    // Return either 1 or -1 to indicate a sort priority
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
			    return 0
			  } // String-based value accessors!
		  },{
		    Header: 'Highest',
		    id: 'highest',
		    accessor: d => d[6],
		    sortMethod: (a, b) => {
			    // force null and undefined to the bottom
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    // force any string values to lowercase
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    // Return either 1 or -1 to indicate a sort priority
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
			    return 0
			  } // String-based value accessors!
		  },{
		    Header: '50s',
		    id: '50s',
		    accessor: d => d[7],
		    sortMethod: (a, b) => {
			    // force null and undefined to the bottom
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    // force any string values to lowercase
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    // Return either 1 or -1 to indicate a sort priority
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
			    return 0
			  } // String-based value accessors!
		  },{
		    Header: '100s',
		    id: '100s',
		    accessor: d => d[8],
		    sortMethod: (a, b) => {
			    // force null and undefined to the bottom
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    // force any string values to lowercase
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    // Return either 1 or -1 to indicate a sort priority
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
			    return 0
			  } // String-based value accessors!
		  },{
		    Header: 'Average',
		    id: 'average',
		    accessor: d => d[9],
		    sortMethod: (a, b) => {
		    	if(a === "-")
		    		a = Number.MIN_SAFE_INTEGER
		    	if(b === "-")
		    		b = Number.MIN_SAFE_INTEGER
			    // force null and undefined to the bottom
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    // force any string values to lowercase
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    // Return either 1 or -1 to indicate a sort priority
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
			    return 0
			  }// String-based value accessors!
		  }]

		 //  if(this.props.team !== "ALL"){
			//   req_data.map((player, key) => {
			//   	// console.log(player[1], this.props.team)
			//   	if(player[1] !== this.props.team){
			//   		delete req_data[key]
			//   		// console.log('deleting', player[1])
			//   	}
			//   })
			// }
		// console.log('req_data after team filtering', req_data)


		  return(

		  


		  	<div className = "table">
				<ReactTable
				    data={this.state.this_data}
				    columns={columns}
				/>  
			</div>

		)
	}
}

export default Table