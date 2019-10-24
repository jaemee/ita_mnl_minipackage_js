import React from 'react';
import './App.css';
import AddBooking from './components/AddBooking/addBooking';

export default class Booking extends React.Component {
  render(){
    return (
      <div className="App">
        <AddBooking addBooking={this.addNewBooking}/>
      </div>
    );
  }

  addNewBooking = newBooking => {
    console.log(newBooking)
    this.props.createNewBooking(newBooking)
  }
}

