import React from "react";
import Image from "next/image";


export default function TeamMembers(props){
    return(
        <div>
            <Image src={props.photo}></Image>
            <h4 className="Team-name">
                {props.name}
            </h4>
            <p className="Team-title">
                {props.title}
            </p>
        </div>
    );
}