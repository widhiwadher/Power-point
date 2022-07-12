import React, { Component } from 'react';
import yellow from '../accets/Indian-yellow-painted-swatch.jpg';
import green from '../accets/grass-green-color-solid-background-1920x1080.png';
import orange from '../accets/360_F_329191596_tRQiV7LZjTZtuPM09QyOS09HV1D9VimE.jpg';
import pink from '../accets/abstract-design-hand-painted-background_23-2148428070.webp';
import Blue  from '../accets/depositphotos_3681590-stock-photo-blue-background.jpg';




export class Header extends Component {




  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-color white-text">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Powerpoint</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Presentation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Saved</a>
        </li>
      </ul>
   
      <div className="accordion me-3 " id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button me-2" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Designs
      </button>
    </h2>

  </div>
</div>
      <form className="d-flex mr-auto search-center" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </div>
 
</nav>
<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse hide" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
     <button className = "border me-2" onClick={this.props.colorGreen}><img className = "me-3" src={green} width="30px"height ="30px" alt ="green color"/></button>
    <button className = "border me-2" onClick={this.props.colorOrange}> <img className = "me-3" src={orange} width="30px"height ="30px" alt ="orange color"/></button>
    <button className = "border me-2" onClick={this.props.colorPink}><img className = "me-3" src={pink} width="30px"height ="30px" alt ="yellow color"/></button>
    <button className = "border me-2" onClick={this.props.colorBlue}><img className = "me-3" src={Blue} width="30px"height ="30px" alt ="yellow color"/></button>
      </div>
    
  </div>
      </div>
    )
  }
}

export default Header