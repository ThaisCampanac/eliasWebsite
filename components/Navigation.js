import React from 'react'
import Link from 'react-scroll/modules/components/Link';

export default function Navigation() {
    return(
        <div className='Navigation'>
            <ul>
                <li>
                    <Link classname='Link' to="about-us" spy={true} smooth={true}>About Us</Link>
                </li>
                <li>
                    <Link classname='Link' to="what-we-do" spy={true} smooth={true}>What We Do</Link>
                </li>
                <li>
                    <Link classname='Link' to="our-work" spy={true} smooth={true}>Our Work</Link>
                </li>
                <li>
                    <Link classname='Link' to="meet-the-team" spy={true} smooth={true}>Meet the Team</Link>
                </li>
                <li>
                    <Link classname='Link' to="client" spy={true} smooth={true}>Testimonies</Link>
                </li>
                <li>
                    <Link classname='Link' to="contact" spy={true} smooth={true}>Contact Us</Link>
                </li>
            </ul>
        </div>
    );
}