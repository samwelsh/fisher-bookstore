import React, { Component } from "react";
import "./Authors.css";
import { AuthorsDisplay } from "./AuthorsDisplay";

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    fName: "JK",
                    lName: "Rowling",
                    numTitles: 14,
                    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg" ,
                },
                {
                    id: 2,
                    fName: "Barack",
                    lName: "Obama",
                    numTitles: 2,
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg",
                },
                {
                    id: 3,
                    fName: "Stephen",
                    lName: "King",
                    numTitles: 31,
                    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg",
                }
            ] 
        }
    }
    render() {
        return (
            <div className="Authors">
                <div className="lander">
                    <AuthorsDisplay authors={this.state.authors} />
               </div>
            </div>
        );
    }
}