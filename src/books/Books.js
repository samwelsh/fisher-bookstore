import React, { Component } from "react";
import { BookDisplay } from "./BookDisplay";
import "./Books.css";

 /* export default function Books () {
    return (
        <div className="Books">
            <div className="lander">
                <h1>Books</h1>
                <p>Books Section.</p>
            </div>
        </div>
    );
} */

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                } ,
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                } ,
                {
                    id: 3,
                    title: "Financial Accounting",
                    author: "Marc Smith",
                    isbn: "823-7281507965"
                } ,
                {
                    id: 4,
                    title: "Managerial Accounting",
                    author: "Marc Smith",
                    isbn: "412-7604651320"
                } ,
                {
                    id: 5,
                    title: "If Animals Kissed Goodnight",
                    author: "Ann Whitford Paul",
                    isbn: "985-8905753215"
                } ,
                {
                    id: 6,
                    title: "Open Book",
                    author: "Jessica Simpson",
                    isbn: "369-1836383985"
                } ,
                {
                    id: 7,
                    title: "The Very Hungry Caterpillar",
                    author: "Eric Carle",
                    isbn: "102-0702149648"
                } ,
                {
                    id: 8,
                    title: "Becoming",
                    author: "Michelle Obama",
                    isbn: "436-6319562018"
                }
            ]
        }
    };
    render() {
        return (
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
               </div>
            </div>
        );
    }
}

