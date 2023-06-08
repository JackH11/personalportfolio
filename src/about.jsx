import './about.css'
import {Button, ButtonGroup} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import trustees from './assets/about/trustees.png'
import giffin from './assets/about/giffin2.jpg';
import att from './assets/about/at&t.jpg';
import linkedIn from './assets/about/linkedin.png';
import kaggle from './assets/about/k.png';





function About() {

    
    return (
    
    <div class='containerabout'>
                
        <div class='subsection'>
            <div class='trusteesText'>
                <div class='sub-header'>
                    Michigan State University
                </div>
                <div class='sub-subHeader'>
                    B.S.in Mechanical Engineering, Minor in Computer Science and German,
                    Honors College Graduate, Board of Trustees Award Winner 
                </div>
                <div class='sub-body'>
                    I spent four years at MSU exposed to people from different backgrounds, all of whom had their own unique goals and aspirations. 
                    I felt this was a time that allowed me to focus on what was most important to me and how I wanted to spend my life. 
                    I made many mistakes but learned a lot. The image is of me and my parents on the day that I recieved the Board of Trustees Award 
                    for my accomplishments in the classroom and is representitive of years of hard work.
                </div>
            </div>
            <img src={trustees} class='trustees'></img>
        </div>
        <div class='subsection'>
            <div class='trusteesText'>
                <div class='sub-header'>
                    Giffin Inc.
                </div>
                <div class='sub-subHeader'>
                    Mechanical Engineering Intern
                </div>
                <div class='sub-body'>
                    While in school, I spent two Summers working for Giffin Inc helping to build Paint Assembly Shops. One in-office and one on-site at a 
                    Detroit Assembly Plant. Here is where I was first exposed to overcoming real-world engineering problems.
                </div>
            </div>
            <img src={giffin} class='giffin'></img>
        </div>
        <div class='subsection'>
            <div class='trusteesText'>
                <div class='sub-header'>
                    AT&T
                </div>
                <div class='sub-subHeader'>
                    Network Engineer
                </div>
                <div class='sub-body'>
                    I've been working here for about a year as a Network Engineer. I'm learning how design and implement new software solutions. 
                </div>
            </div>
            <img src={att} class='att'></img>
        </div>
        <div class='subsection'>
            <div class='connectText'>
                Connect with me on LinkedIn and Kaggle! 
            </div>
            <a href = "https://www.linkedin.com/in/jackhasselbring">
                <img src={linkedIn} class='items linkedIn'></img>
            </a>
            <a href = "https://www.kaggle.com/jackhasselbring">
                <img src={kaggle} class='items kaggle'></img>
            </a>

        </div>


    </div>
    )
}

export default About;