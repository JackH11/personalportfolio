import './projects.css'
import {Button, ButtonGroup} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import vite from './assets/projects/vite.png';
import printer1 from './assets/projects/Printer 1 - Dorm.jpg';
import printer2 from './assets/projects/printer2.jpg';
import drone from './assets/projects/drone.jpg';
import snake from './assets/projects/snakeVid2.gif';
import EDA from './EDA.jsx';


function Projects() {

    
    return (
    
    <div class='containerprojects'>


        <div class='subsection'>
            <div class='trusteesText'>
            </div>
            <EDA></EDA>

        </div>     
        <div class='subsection'>
            <div class='trusteesText'>
                <div class='sub-header'>
                    React Website
                </div>
                <div class='sub-body'>
                    Developed a website using react, vite, and node. Had a lot of fun!   
                </div>
            </div>
            <img src={vite} class='picture vite'></img>
        </div>
        <div class='subsection'>
            <div class='trusteesText'>
                <div class='sub-header'>
                    Snake AI
                </div>
                <div class='sub-body'>
                    Using Keras, Tensorflow, and OpenAI's Gym Environment, I created a snake game in which a neural network learns
                    how to seek out food and avoid hitting walls or itself. The numbers depict the snake at various training intervals.
                </div>
            </div>
            <img src={snake} class='trustees'></img>
        </div>
        <div class='subsection'>
            <div class='trusteesText'>
                <div class='sub-header'>
                    Drone Hand Detection
                </div>
                <div class='sub-body'>
                    I programmed a tello drone using Python, Tensorflow, and Google's object detection API to respond to hand movements.
                    I trained the model to locate a hand and perform actions based on the position. The image detection takes into account
                    distance and horizontal position to make the appropriate response. 
                </div>
            </div>
            <img src={drone} class='picture drone'></img>
        </div>
        <div class='subsection'>
            <div class='trusteesText'>
                <div class='sub-header'>
                    Custom 3D Printer 2.0
                </div>
                <div class='sub-body'>
                    I designed a second model of the printer featuring light aluminum as opposed to steel, a better quality bigTreeTech board,
                    and contructed it with 3D printed parts made from the first printer. This printer could support a heated bed and had higher
                    printing speeds and print quality.
                </div>
            </div>
            <img src={printer2} class='picture printer2'></img>
        </div>
        <div class='subsection'>
            <div class='trusteesText'>
                <div class='sub-header'>
                    Custom 3D Printer 1.0
                </div>
                <div class='sub-body'>
                    While in College I designed and built a custom 3D printer. The basic hardware components were purchased at a local hardware store, while
                    the electronics and other advanced components were bought on Amazon. The first version of the printer ran on Arduino Mega with RAMPS 1.4
                    control board and ran on open source marlin firmware. This project was inspired by RZtronics.
                </div>
            </div>
            <img src={printer1} class='picture printer1'></img>
        </div>

    </div>
    )
}

export default Projects;