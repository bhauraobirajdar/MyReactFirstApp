import React, { Component } from 'react';
import './Users.css';

class Users extends Component{
    constructor(){
        super();
        this.state = {
            pictures:[]
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/?results=100')
        .then( results =>{
            return results.json();
        })
        .then(data => {
            let pictures = data.results.map( (pic)=>{
                console.log("data loop",pic);
                return (
                    <div>
                        <div className="border-shadow">{pic.name.title}. {pic.name.last}, {pic.name.first}</div>
                    </div>
                )
            })
            this.setState({
                pictures:pictures
            })
        })
    }

    render(){
        return (
            <div>
                {this.state.pictures}
            </div>
        )
    }
}

export default Users;