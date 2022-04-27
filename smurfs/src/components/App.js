import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux';
import {fetchSmurfs} from '../state/actions'

class App extends Component {
  
  componentDidMount(){
    this.props.fetchSmurfs();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <p>Name: {smurf.name}</p>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          )
        })}
        {this.props.loading && <h1>LOADING.....</h1>}
        {this.props.errorMessage && <h1>{this.props.errorMessage}</h1>}
      </div>
    );
  }
}

const mapState = (s) => {
  return {
    smurfs: s.smurfReducer,
    loading: s.loadingReducer,
    errorMessage: s.errorReducer,
  }
}

export default connect(mapState, {fetchSmurfs})(App);