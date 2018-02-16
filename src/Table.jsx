import React, { Component } from 'react'
import ReactTable from 'react-table'

class Table extends Component {

	render() {
		console.log('props', this.props)
		let data;
		if(this.props.division === "ALL" && this.props.tournament === "ALL")
			data = this.props.data[0].stats;
		else{
			if(this.props.division === "A"){
				if(this.props.tournament === "Pro40")
					data = this.props.data[0].stats;
				else
					data = this.props.data[2].stats;
			}
			else{
				data = this.props.data[1].stats;
			}
		}

		const req_data = data;

		console.log('req_data', req_data)

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
		    accessor: d => d[2] // String-based value accessors!
		  },{
		    Header: 'Innings',
		    id: 'innings',
		    accessor: d => d[3] // String-based value accessors!
		  },{
		    Header: 'Not Outs',
		    id: 'not_outs',
		    accessor: d => d[4] // String-based value accessors!
		  },{
		    Header: 'Runs',
		    id: 'runs',
		    accessor: d => d[5] // String-based value accessors!
		  },{
		    Header: 'Highest',
		    id: 'highest',
		    accessor: d => d[6] // String-based value accessors!
		  },{
		    Header: '50s',
		    id: '50s',
		    accessor: d => d[7] // String-based value accessors!
		  },{
		    Header: '100s',
		    id: '100s',
		    accessor: d => d[8] // String-based value accessors!
		  },{
		    Header: 'Average',
		    id: 'average',
		    accessor: d => d[9] // String-based value accessors!
		  }]
		  return(
			<ReactTable
			    data={req_data}
			    columns={columns}
			  />  
		)
	}
}

export default Table