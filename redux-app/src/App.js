import React, { Component } from 'react';
import { connect } from 'react-redux'





class App extends Component {
    addTrack() {
        this.props.onAddTrack(this.inputText.value);
        this.inputText.value = '';
    }
  render() {
      console.log(this.props.testStore);

      return (
      <div>
          <input type="text" ref={(input) => {this.inputText = input}}/>
          <button onClick={this.addTrack.bind(this)}>add track</button>
          <ul>
              {this.props.testStore.map((track, index) => (
                  <li key={index}>{track}
                  <button>delete</button></li>
                  ))
              }
          </ul>
      </div>
    );
  }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({
                type: 'ADD_TRACK',
                payload: trackName
            })
        },
    })
)(App);
