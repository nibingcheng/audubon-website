import './Show.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Show extends Component {
    
    render() {
        console.log('showpage\n',this.props.match.params.index);
        let index = this.props.match.params.index;
        
        return (
        <div className="Show">
            <div id='imageLH'>
            <img src={this.props.birds[`${index}`].image} alt=""/>
            </div>
            <div className="text-container">
                <p>{this.props.birds[`${index}`].name}</p>
                <p>({this.props.birds[`${index}`].genus})</p>
                <h4>Conservation Status</h4>
                <p>{this.props.birds[`${index}`].conservationStatus}</p>
                <div id="read-more">
                    <a href={this.props.birds[`${index}`].homepage}>
                    Read More
                    </a>
                </div>
            </div>
        </div>
        );
    }
}

export default Show;