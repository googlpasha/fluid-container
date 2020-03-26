import React from 'react';
export default class 
 extends React.Component {

    tankFiller = () =>{
      if(this.props.tank1 < 100)
        setTimeout(() => {
          this.props.fillUp()
          this.tankFiller()
        }, 500);
  
    }
    render(){
      var tank1Styles = {
        height: "100px",
        width: "50px",
        border: "3px solid #000"
      }
      var tank1FillAmmount = this.props.tank1;
      var tank1EmptyAmmount = 100 - tank1FillAmmount;
      tank1Styles.background = "linear-gradient(to top, #3caa3c " + tank1FillAmmount + "%, #fff " + tank1EmptyAmmount + "%)"
      return (
        <div>
          <div>
            {tank1Styles.background}
            <div style={tank1Styles}></div>
            <button onClick={this.tankFiller.bind(this)}>FILL</button>
          </div>
        </div>
      )
    }
  }