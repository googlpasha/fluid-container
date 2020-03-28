import React from 'react';
import './App.css';
import { connect } from 'react-redux'
// import Tank from './tanks/Tank1'
import Tank from './tanks/Tank'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tank1: {
        id: 1,
        value: 0
      },
      tank2: {
        id: 2,
        value: 0
      }
    }
    this.changeTank1Val = this.changeTank1Val.bind(this)
    this.changeTank2Val = this.changeTank2Val.bind(this)
    this.checkAllTanks = this.checkAllTanks.bind(this)
  }
  // componentWillUpdate(){
  //   console.log("PROPS: ", this.props.tank1)
  //   this.setState({
  //     tank1 : this.props.tank1
  //   })
  // }
  changeTank1Val(tank){
    console.log(tank)
    if((this.state.tank1.value < 100)){
      let tankCopy = tank
      tankCopy.value++
      // if(tankCopy.value>10){
      //   tankCopy2.value++
      // }
      this.setState({
        state : tankCopy
      })
      setTimeout(() => {
        this.changeTank1Val(tank)
      }, 100);
    }
  }

  async checkAllTanks(){
    for (var key in this.state) {
      console.log("ITIRATION NUM: ", this.state[key].id)
      if(this.state[key].value <= 100){
        await this.changeTank1Val(this.state[key])
        console.log("FIRST DONE")
      }
    }
  }
  changeTank2Val(){
    let tankCopy = this.state.tank2
    tankCopy.value++
    this.setState({
      state : tankCopy
    })
  }
  render(){

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <h1>Fluid counter!</h1>
              {this.state.tank1.value}
              <button onClick={this.checkAllTanks}>FILL</button>
              <Tank tank1={this.state.tank1} fillUp={this.changeTank1Val}/>
              <Tank tank1={this.state.tank2} start={this.prepared} fillUp={this.changeTank2Val} />
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) =>{
//   return {
//     age:state.age,
//     tank1:state.tank1,
//     tank2:state.tank2
//   }
// }

// const mapDispachToProps = (dispach) => {
//   return {
//     onAgeUp: () => dispach({type:'AGE_UP', value: 1}),
//     fillUp: () => dispach({type:'FILL_UP', value: 1}),
//     fillUp2: () => dispach({type:'FILL_UP', value:2})
//   }
// }

// export default connect(mapStateToProps, mapDispachToProps) (App);
export default App