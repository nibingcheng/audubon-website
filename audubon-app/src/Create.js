import './Create.css';
import Home from './Home'
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Create extends Component {
    constructor() {
        super()
    
        this.state = {
          name: "",
          genus: "",
          image: "",
          homepage: "",
          conservationStatus: ""
        }
    }
    handleName=(e)=>{
        this.setState ({
            name: e.target.value
        })
    }
    handleGenus=(e)=>{
        this.setState ({
            genus: e.target.value
        })
    }
    handleImage=(e)=>{
        this.setState ({
            image: e.target.value
        })
    }
    handleHomepage=(e)=>{
        this.setState ({
            homepage: e.target.value
        })
    }
    handleStatus=(e)=>{
        this.setState ({
            conservationStatus: e.target.value
        })
    }
    
    render() {
        this.newBird=()=>{
            // console.log('This is the create page!\n', this.state);
            return (
                <Home newBird={this.state} />
            )
        }
        return (
            <div className="form">
                <h2>Add a New Bird</h2> 
                
                <div>Name</div>
                <input type="text" placeholder="" onChange={this.handleName}/>
                <div>Genus</div>
                <input type="text" placeholder="" onChange={this.handleGenus}/>
                <div>Image</div>
                <input type="text" placeholder="url" onChange={this.handleImage}/>
                <div>Homepage</div>
                <input type="text" placeholder="url" onChange={this.handleHomepage}/>
                <div >Conservation status</div>
                <textarea id="cs" name="" onChange={this.handleStatus}></textarea>
                <br /><br />
                <Link to='/'>
                <button type='submit' onClick={this.newBird}>Submit</button>
                </Link>
                
          </div>
        );
    }
}

export default Create;