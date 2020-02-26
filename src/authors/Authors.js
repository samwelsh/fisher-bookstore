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
                    fName: "Bob",
                    lName: "Smith"
                },
                {
                    id: 2,
                    fName: "Mike",
                    lName: "Johnson"
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