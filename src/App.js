import React from 'react';
import './App.css';
import { connect } from 'react-redux'

class Tank extends React.Component {

  tankFiller = () =>{
    if(this.props.a < 100)
      setTimeout(() => {
        this.props.fillUp()
        this.tankFiller()
      }, 500);

  }
  render(){
    var tank1 = {
      height: "100px",
      width: "50px",
      border: "3px solid #000"
    }
    var tank1FillAmmount = this.props.a;
    var tank1EmptyAmmount = 100 - tank1FillAmmount;
    tank1.background = "linear-gradient(to top, #3caa3c " + tank1FillAmmount + "%, #fff " + tank1EmptyAmmount + "%)"
    return (
      <div>
        <div>
          {tank1.background}
          <div style={tank1}></div>
          <button onClick={this.tankFiller.bind(this)}>FILL</button>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <h1>Fluid counter!</h1>
              {this.props.a}
              <Tank a={this.props.a} fillUp={this.props.fillUp} />
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    age:state.age,
    a:state.a
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({type:'AGE_UP', value: 1}),
    fillUp: () => dispach({type:'FILL_UP'})
  }
}

export default connect(mapStateToProps, mapDispachToProps) (App);
