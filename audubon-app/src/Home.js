import './Home.css';
import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";


class Home extends Component {
    
    render() {
        console.log('homepage\n',this.props);
        let listOfBirds = this.props.birds.map((item,index) => {
            return (
              <div className="bird" key={index}>
               <Link to={"/bird/" + index}><img src={item.image} /></Link>
              </div>
            );
        });
        
        return (
        <div className="Home">
            <p>This is the homepage!</p>
            <h3>Birds</h3>
            <div className="images">
            {listOfBirds}
            </div>        
        </div>
        );
    }
}

export default Home;
