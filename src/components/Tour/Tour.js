import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
    state = {
        showInfo: false
    }

    showInfoHandler = () => {
        const showInfo = this.state.showInfo;
        this.setState({showInfo: !showInfo})
    }


  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="image-container">
          <img src={img} alt="city tour" />
          <span onClick = {()=> {
            removeTour(id)
          }} className="close-btn">
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span>
              {" "}
              <i onClick = {this.showInfoHandler} className="fas fa-caret-square-down" />
            </span>{" "}
          </h5> 
          {this.state.showInfo && <p> {info}</p>}
        </div>
      </article>
    );
  }
}
