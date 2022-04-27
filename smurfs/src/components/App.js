import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux';
import {fetchSmurfs, addSmurf} from '../state/actions'

class App extends Component {
  
  componentDidMount(){
    this.props.fetchSmurfs();
  }

  handleAddSmurf = (smurfData) => {
    this.props.addSmurf(smurfData);
  }
  // NOW MAKE A NEW COMPONENT AND ROUTE IT TO /FORM, ADD FORM FUNCTIONALITY AND ADD HANDLEADDSMURF TO THE FORM SO IT POSTS TO THE API AND IT WILL RENDER TO THE APP

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

export default connect(mapState, {fetchSmurfs, addSmurf})(App);