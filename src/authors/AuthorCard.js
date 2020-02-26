import React from "react";
import { Card, Button } from "react-bootstrap";

export function AuthorCard(props) {
    return (
        <Card style={{ width: "16em" }}>
            <Card.Img variant="top" src={props.author.image}/>
            <Card.Body>
                <Card.Title>{props.author.fName} {props.author.lName}</Card.Title>
                <Card.Text>Number of Titles: {props.author.numTitles}</Card.Text>
                <Button variant="warning">View Author</Button>
            </Card.Body>
        </Card>
    );
}