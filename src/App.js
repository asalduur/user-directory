import React, { Component } from 'react'
import './App.css'
import users from './user-directory/data'
import Slides from './components/Slides'
import Buttons from './components/Buttons'
import PageCounter from './components/PageCounter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      users: users,
      currentUser: 0
    }
    this.nextUser = this.nextUser.bind(this)
    this.backUser = this.backUser.bind(this)
  }

  nextUser(){
    if (this.state.currentUser < this.state.users.length - 1) {
      this.setState({currentUser: this.state.currentUser + 1});
    } 
     else if (this.state.currentUser === this.state.users.length -1){
      this.setState({currentUser: 0})
    }
  }
  backUser(){
    if (this.state.currentUsers.length > 0) {
      this.setState({currentUser: this.state.currentUser - 1});
    }
    else if (this.state.currentUser === 0){
      this.setState({currentUser: this.state.users.length - 1})
    }
  }
  
  render() {
    return (
    <div className="App">
      <div className='header'>
        <div className='homeButton'>Home</div>
      </div>
      <div className='content'>
        <PageCounter 
        userArr={this.state.users} 
        currentUser={this.state.currentUser}
        />
        <Slides user={this.state.users[this.state.currentUser]}/>
        <Buttons 
          currentUser={this.state.currentUser} 
          nextUserFn={this.nextUser} 
          backUserFn={this.backUser}
        />
      </div>
    </div>
   )
  }
}

export default App
