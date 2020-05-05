
import "./Authors.css";

import React, {useEffect, useState } from "react";
import {AuthorsDisplay} from "./AuthorsDisplay";

export default function Authors(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://localhost:5001/api/authors/")
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
    
    return (
        <div className="Authors">
            <div className="lander">
                <AuthorsDisplay authors={data} />
            </div>
        </div>
    )
}