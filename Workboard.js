import React, { Component } from "react";
import Preview from "./Preview";
import Header from './Header';

export class Workboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
        inputVal: "",

    };

    this.state = {
        headingVal: "",

    };
    this.state = {
        bgColor: ""
      }
}



onHandletext(e) {
    this.setState({ headingVal: e.target.value });
  }

  onInputtextChange (e)  {
    this.setState({ inputVal : e.target.value})
  }

 
  colorPink = () =>{
    this.setState({
        bgColor: "pink"
      })
}

colorOrange = (e) => {
    this.setState({
        bgColor: "red"
      })
}
colorGreen  = () => {
    this.setState({
        bgColor: "green"
      })
}
colorBlue =() => {
    this.setState ({
      bgColor: "blue"  
    })
}
//   onHandletext= (event) => {
// this.setState({
//     [event.target.headingVal]:event.target.value,
    
// });
//   }

  render() {
    return (
      <>
      <Header  colorGreen = {this.colorGreen} colorOrange = {this.colorOrange} colorPink = {this.colorPink} colorYellow = {this.colorYellow} colorBlue = {this.colorBlue}/>
        <div className="container-fluid" style = {{backgroundColor: this.state.bgColor}}>
          <div className="row ">
            <Preview colorOrange = {this.colorOrange} colorPink = {this.colorPink} colorYellow = {this.colorYellow} colorBlue = {this.colorBlue} colorGreen = {this.colorGreen} elementValue={this.state.inputVal}  headingValue={this.state.headingVal} /> 
            
            <div className="shadow-lg p-3 mb-5 mt-5 bg-body rounded col-md-10"
            >
              <div className="mb-3">
               
                <textarea
                  className="form-control border-grey headingtext p-3"
                  id="exampleFormControlTextarea1"
                  placeholder="Click to add Title"
                  value={this.state.headingVal}
                  onBlur ={this.onHandletext = this.onHandletext.bind(this)} 
                  onChange ={this.onHandletext}
                  rows="2"
                ></textarea>
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control border-grey  h-75 p-3"
                  id="exampleFormControlTextarea1"
                  placeholder="Click to add Text"
                  rows="12"
                  value={this.state.inputVal}
                  onBlur={ this.onInputtextChange = this.onInputtextChange.bind(this)}
                  onChange= {this.onInputtextChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Workboard;
