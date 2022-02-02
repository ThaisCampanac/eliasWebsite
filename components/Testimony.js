import React from "react";

export default function Testimony(props){
    return(
        <div>
            <h3>{props.quote}</h3>
            <h4>{props.author}</h4>
        </div>
    );
}