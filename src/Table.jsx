import React, { Component } from 'react'
import ReactTable from 'react-table'
import './Table.css'

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
		this.setState({this_data: temp})
	}

	componentWillMount(){
		const team = this.props.team;
		const division = this.props.division;
		const tournament = this.props.tournament;
		this.getData(team, division, tournament)
	}

	componentDidMount() {
		setInterval(() => {
			const team = this.props.team;
			const division = this.props.division;
			const tournament = this.props.tournament;
			this.getData(team, division, tournament)
		}, 1000);
	}

	render() {
		const columns = [{
		    Header: 'Batsman',
		    id: 'batsman',
		    accessor: d => d[0] 
		  },{
		    Header: 'Team',
		    id: 'team',
		    accessor: d => d[1] 
		  },{
		    Header: 'Matches',
		    id: 'matches',
		    accessor: d => d[2],
		    sortMethod: (a, b) => {
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    return 0
			  } 
		  },{
		    Header: 'Innings',
		    id: 'innings',
		    accessor: d => d[3],
		    sortMethod: (a, b) => {
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    return 0
			  }
		  },{
		    Header: 'Not Outs',
		    id: 'not_outs',
		    accessor: d => d[4],
		    sortMethod: (a, b) => {
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    return 0
			  }
		  },{
		    Header: 'Runs',
		    id: 'runs',
		    accessor: d => d[5],
		    sortMethod: (a, b) => {
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    return 0
			  }
		  },{
		    Header: 'Highest',
		    id: 'highest',
		    accessor: d => d[6],
		    sortMethod: (a, b) => {
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    return 0
			  }
		  },{
		    Header: '50s',
		    id: '50s',
		    accessor: d => d[7],
		    sortMethod: (a, b) => {
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    return 0
			  }
		  },{
		    Header: '100s',
		    id: '100s',
		    accessor: d => d[8],
		    sortMethod: (a, b) => {
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    // force any string values to lowercase
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    return 0
			  }
		  },{
		    Header: 'Average',
		    id: 'average',
		    accessor: d => d[9],
		    sortMethod: (a, b) => {
		    	if(a === "-")
		    		a = Number.MIN_SAFE_INTEGER
		    	if(b === "-")
		    		b = Number.MIN_SAFE_INTEGER
			    a = (a === null || a === undefined) ? -Infinity : a
			    b = (b === null || b === undefined) ? -Infinity : b
			    a = a === 'string' ? a.toLowerCase() : a
			    b = b === 'string' ? b.toLowerCase() : b
			    if (parseFloat(a) > parseFloat(b)) {
			      return 1
			    }
			    if (parseFloat(a) < parseFloat(b)) {
			      return -1
			    }
			    return 0
			  }
		  }]

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