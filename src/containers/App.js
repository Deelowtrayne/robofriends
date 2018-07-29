import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then ( res => res.json() )
		  .then ( users => {this.setState({robots: users})} )
		  .catch( err => err );
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.username.toLowerCase().includes(searchfield.toLowerCase());
		});

		if (robots.length === 0) {
			return <h1 className="tc loading">Loading robots...</h1>
		}

		return (
			<div className="tc">
				<h1 className="f1"><a href='/'>RoboFriends</a></h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
				<Footer />
			</div>
			
		)
	}
};

export default App;