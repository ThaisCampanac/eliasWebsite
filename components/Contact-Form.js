import React, {useState} from "react";

export default function ContactForm(){

    return(
        <div className="contact">
            <div className="name">
                <div className="first-name">
                    <label className="title">First Name</label>
                    <input className="control-form" type='text' required></input>
                </div>
                <div className="last-name">
                    <label className="title">Last Name</label>
                    <input className="control-form" type='text' required></input>
                </div>
            </div>
            <div className="email">
                <label className="title">Email</label>
                <input className="control-form" type='email' required></input>
            </div>
            <div className="message">
                <label className="title">Tell me about your inquiry</label>
                <input className="control-form" type='message' required></input>
            </div>
            <div className="submit">
                <button className="submit-button" type="submit">Submit</button>
            </div>
        </div>
    );
}