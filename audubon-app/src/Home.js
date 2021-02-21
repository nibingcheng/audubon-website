import './Home.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {
    
    
    render() {
        console.log('This is the homepage',this.props);
        let listOfBirds = this.props.birds.map((item,index) => {
            return (
              <div className="bird" key={index}>
               <Link to={"/bird/" + index}><img src={item.image} alt="" /></Link>
              </div>
            );
        });
        return (
        <div className="Home">
            <div className="headerContainer">
                <h3>Birds</h3>
                <Link to="/create">
                    <div id='new-bird'>(Add a new bird)</div>
                </Link>
            </div>
            <div className="imageContainer">
                {listOfBirds}
            </div>        
        </div>
        );
    }
}

export default Home;
