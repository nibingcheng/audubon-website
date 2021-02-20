import './Show.css';
import React, { Component } from "react";

class Show extends Component {
    
    render() {
        console.log('showpage\n',this.props.match.params.index);
        let index = this.props.match.params.index;
        
        return (
        <div className="Show">
            <p>This is the showpage!</p>
            <img src={this.props.birds[`${index}`].image} alt=""/>
            <div className="container">
                <p>{this.props.birds[`${index}`].name}</p>
                <p>({this.props.birds[`${index}`].genus})</p>
                <h4>Conservation Status</h4>
                <p>{this.props.birds[`${index}`].conservationStatus}</p>
                <button>
                    <a href={this.props.birds[`${index}`].homepage}>
                    Read More
                    </a>
                </button>
            </div>
        </div>
        );
    }
}

export default Show;