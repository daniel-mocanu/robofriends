import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import {robots} from './robots';
import Scroll from './Scroll'
import './App.css';





class App extends Component {
    constructor() {
        super()
        this.state = { // state describes application this is an array
            robots: robots, //this.state.robots
            searchfield: '' //this.state.search...
        }
    }

    componentDidMount() {
        this.setState({robots: robots})
    }

    onSearchChange = (event) =>{ //do this everytime you make a method use  => 
        this.setState({searchfield: event.target.value}) //set state is a react method. searchfeild is a object
        //event.target.value inputs what you wrote
        //setState is used to update state bc you are typing
    }


    render() { // render has to return something from class
        //const {robots, searchfield} = this.state; you can do it this way instead of writing this.state
        const filteredRobots  = this.state.robots.filter(robot => {//this.state.robots access's robots!!!!. syntax
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());//same thing^
        });
        return( // it needs to be in div, one single component
            <div className='tc'>  
                <h1> RoboFriends </h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                <Cardlist robots ={filteredRobots}/>
                </Scroll>
                
                

    
            </div>
        );
    }       
}
export default App;