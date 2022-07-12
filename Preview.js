import React, { Component } from 'react'
import Css from '../App.css';

 class Preview extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            childtextUpdate:this.props.message,
        };
      }

  handleinputChange = (event) => {
   this.setState({
   [event.target.name] : event.target.value
   });
   }

  render() {
    return (
        <>

       
<div className='col-md-2 ' style = {{backgroundColor: this.state.bgColor}}>
<h4 className='float-left mt-4'>Slides</h4>
<div className="card mb-2 h-25">
  <div className="card-body ">
    <h5 className="card-title"></h5>
    <input type="text" className="form-control headingtestsm h-25 p-3" placeholder="Heading........" value = {this.props.headingValue}></input>
  <input type="text" className="form-control mt-2" placeholder="Your text here...." value = {this.props.elementValue}></input>
 


     
  </div>
</div>
</div>
  
  </>
    )
  }
}

export default Preview