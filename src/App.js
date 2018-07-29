import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import {robots} from './robots';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: '',
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {

		const filteredRobots = this.state.robots.filter(robot => {
			return robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		return (
			<div className="tc">
				<h1 className="f-headline">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots || this.state.robots}/>
			</div>
			
		)
	}
};

export default App;