"use client";

import React from 'react';
import Link from 'next/link';

import './Nav.css';
import { TbMoped, TbMenu, TbSearch } from "react-icons/tb";
import { IconContext } from 'react-icons';

export default function Nav() {
    return(
        <nav>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle'} }}>
            <Link id='home' href="/">welp  <TbMoped size="2em"/></Link>
            <form id="search-wrapper" action="/search" method="get" autoComplete="off">
                <input type="search" placeholder="Search" name="q"></input>
                <button type="submit" value=""><TbSearch size="1.2em"/></button>
            </form>
                
            <input type="checkbox" id="menu-toggle"/>
                
            <label htmlFor="menu-toggle" className="hamburger-icon">
                <TbMenu size="2em"/>
            </label>
            
            <div id="nav-wrapper">
                <Link href="/about">About</Link>
                <div className="divider"></div>
                <Link href="/contact">Contact Us</Link>
                <div className="divider"></div>
                <Link href="/feedback">Send Feedback</Link>
            </div>
            </IconContext.Provider>
        </nav>
    );
}