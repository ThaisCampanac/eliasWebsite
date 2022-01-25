import Image from "next/image";
import React from "react";

export default function Service(props){
    return(
        <div>
            <Image src={props.photo}></Image>
            <h4 className="Service-name">
                {props.name}
            </h4>
            <p className="Service-des">
                {props.description}
            </p>
        </div>
    );
}
