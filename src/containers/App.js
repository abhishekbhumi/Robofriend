import React  from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''	
		}
	}

	componentDidMount(){
		window.fetch('https://jsonplaceholder.typicode.com/users')
			.then(response =>response.json())
			.then(users => this.setState( {robots: users} ));
	}

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value });
	}

    render(){
    			const filterRobots = this.state.robots.filter(robot =>{
					return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})

    if(this.state.robots.length===0){
    	return <h1>Loading</h1>;
    }	else{

	return(
			<div className="title tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filterRobots} />
				</Scroll>
			</div>
		);
}
}
}

export default App;