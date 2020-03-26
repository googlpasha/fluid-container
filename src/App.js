import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Tank from './tanks/Tank1'
import TankStart from './tanks/TankSatrt'

class App extends React.Component {
  render(){
    var prepared = false;
    if(this.props.tank1 == 10){
         this.prepared = true;
         console.log(this.prepared)
    }
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <h1>Fluid counter!</h1>
              {this.props.tank1}
              <TankStart tank1={this.props.tank1} fillUp={this.props.fillUp} />
              <Tank tank1={this.props.tank2} start={this.prepared} fillUp={this.props.fillUp2} />
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    age:state.age,
    tank1:state.tank1,
    tank2:state.tank2
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({type:'AGE_UP', value: 1}),
    fillUp: () => dispach({type:'FILL_UP', value: 1}),
    fillUp2: () => dispach({type:'FILL_UP', value:2})
  }
}

export default connect(mapStateToProps, mapDispachToProps) (App);
