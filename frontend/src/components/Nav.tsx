import React from 'react';

import './Nav.css';

import menu from '../assets/menu.svg'
import moped from '../assets/moped.svg'
import search from'../assets/search.svg'

export default function Nav() {
    return(
        <nav>
            <a id='home' href="/">welp<img src={moped} alt=""></img></a>
            <form id="search-wrapper" action="/search" method="get" autoComplete="off">
                <input type="search" placeholder="Search" name="q"></input>
                <button type="submit" value=""><img className="icon" src={search} alt=""></img></button>
            </form>
                
            <input type="checkbox" id="menu-toggle"/>
                
            <label htmlFor="menu-toggle" className="hamburger-icon">
                <img src={menu} alt=""></img>
            </label>
            
            <div id="nav-wrapper">
                <a href="/about">About</a>
                <div className="divider"></div>
                <a href="/contact">Contact Us</a>
                <div className="divider"></div>
                <a href="/feedback">Send Feedback</a>
            </div>
        </nav>
    );
}