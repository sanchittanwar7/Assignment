import React, { Component } from 'react';
import './App.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			year: '2017',
			team: '',
			division: '',
			tournament: ''
		}
	}

	search(){
		console.log(this.state)
	}

	render() {
		return(
			<div className = "App">
			<Navbar>
			  <Navbar.Header>
			    <Navbar.Brand>
			      <a href="#home">Schedule</a>
			    </Navbar.Brand>
			  </Navbar.Header>
			  <Nav>
			    		    
			    <NavDropdown eventKey={3} title="Statistics" id="basic-nav-dropdown">
			      <MenuItem eventKey={3.1}>Action</MenuItem>
			      <MenuItem eventKey={3.2}>Another action</MenuItem>
			      <MenuItem eventKey={3.3}>Something else here</MenuItem>
			      <MenuItem divider />
			      <MenuItem eventKey={3.4}>Separated link</MenuItem>
			    </NavDropdown>
			    <NavDropdown eventKey={3} title="Live" id="basic-nav-dropdown">
			      <MenuItem eventKey={3.1}>Action</MenuItem>
			      <MenuItem eventKey={3.2}>Another action</MenuItem>
			      <MenuItem eventKey={3.3}>Something else here</MenuItem>
			      <MenuItem divider />
			      <MenuItem eventKey={3.4}>Separated link</MenuItem>
			    </NavDropdown>
			    <NavDropdown eventKey={3} title="Rules" id="basic-nav-dropdown">
			      <MenuItem eventKey={3.1}>Action</MenuItem>
			      <MenuItem eventKey={3.2}>Another action</MenuItem>
			      <MenuItem eventKey={3.3}>Something else here</MenuItem>
			      <MenuItem divider />
			      <MenuItem eventKey={3.4}>Separated link</MenuItem>
			    </NavDropdown>
			    <NavDropdown eventKey={3} title="Tournament" id="basic-nav-dropdown">
			      <MenuItem eventKey={3.1}>Action</MenuItem>
			      <MenuItem eventKey={3.2}>Another action</MenuItem>
			      <MenuItem eventKey={3.3}>Something else here</MenuItem>
			      <MenuItem divider />
			      <MenuItem eventKey={3.4}>Separated link</MenuItem>
			    </NavDropdown>
			    <NavDropdown eventKey={3} title="News" id="basic-nav-dropdown">
			      <MenuItem eventKey={3.1}>Action</MenuItem>
			      <MenuItem eventKey={3.2}>Another action</MenuItem>
			      <MenuItem eventKey={3.3}>Something else here</MenuItem>
			      <MenuItem divider />
			      <MenuItem eventKey={3.4}>Separated link</MenuItem>
			    </NavDropdown>
			    <NavDropdown eventKey={3} title="Clubs" id="basic-nav-dropdown">
			      <MenuItem eventKey={3.1}>Action</MenuItem>
			      <MenuItem eventKey={3.2}>Another action</MenuItem>
			      <MenuItem eventKey={3.3}>Something else here</MenuItem>
			      <MenuItem divider />
			      <MenuItem eventKey={3.4}>Separated link</MenuItem>
			    </NavDropdown>
			    <NavItem eventKey={2} href="#">
			      Venues
			    </NavItem>
			    <NavDropdown eventKey={3} title="About" id="basic-nav-dropdown">
			      <MenuItem eventKey={3.1}>Action</MenuItem>
			      <MenuItem eventKey={3.2}>Another action</MenuItem>
			      <MenuItem eventKey={3.3}>Something else here</MenuItem>
			      <MenuItem divider />
			      <MenuItem eventKey={3.4}>Separated link</MenuItem>
			    </NavDropdown>
			  </Nav>
			</Navbar>

			<div className = "input-form">
				<FormGroup controlId="formControlsSelect">
			      <ControlLabel>Year</ControlLabel>
			      <FormControl componentClass="select" placeholder="select">
			        <option value="2017">2017</option>
			      </FormControl>
			    </FormGroup>

			    <FormGroup controlId="formControlsSelect">
			      <ControlLabel>Tournament</ControlLabel>
			      <FormControl 
			      	componentClass="select" 
			      	placeholder="select"
			      	
			      >
			        <option 
			        	value="Pro40"
			        	onClick = { event => {this.setState({tournament: event.target.value}, function(){
			        		this.search()
			        	})}}
			        >
			        	Pro40
		        	</option>
			        <option 
			        	value="Smassh"
			        	onClick = { event => {this.setState({tournament: event.target.value}, function() {
			        		this.search()
			        	})}}
			        >
			        	Smassh
		        	</option>
			      </FormControl>
			    </FormGroup>

			    <FormGroup controlId="formControlsSelect">
			      <ControlLabel>Division</ControlLabel>
			      <FormControl componentClass="select" placeholder="select">
			        <option 
			        	value="A"
			        	onClick = { event => {this.setState({division: event.target.value}, function(){
			        		this.search()
			        	})}}
			        >
			        	A
		        	</option>
			        <option 
			        	value="B"
			        	onClick = { event => {this.setState({division: event.target.value}, function(){
			        		this.search()
			        	})}}
			        >
			        	B
		        	</option>
			      </FormControl>
			    </FormGroup>

			    <FormGroup controlId="formControlsSelect">
			      <ControlLabel>Team</ControlLabel>
			      <FormControl componentClass="select" placeholder="select">
			        <option value="All">All</option>
			        <option value="Boston Eagles">Boston Eagles</option>
			        <option value="Boston Gymkhana S.C A">Boston Gymkhana S.C A</option>
			        <option value="Boston Gymkhana S.C B">Boston Gymkhana S.C B</option>
			        <option value="Challengers Cricket Club">Challengers Cricket Club</option>
			        <option value="Commonwealth Cricket Club A">Commonwealth Cricket Club A</option>
			        <option value="Conway Cricket Club">Conway Cricket Club</option>
			        <option value="Guyana Cricket Club">Guyana Cricket Club</option>
			        <option value="Lagaan Lions">Lagaan Lions</option>
			        <option value="NECC Hawks">NECC Hawks</option>
			        <option value="NECC Stars">NECC Stars</option>

			      </FormControl>
			    </FormGroup>
			</div>
			</div>

		)
	}
}

export default App;