import './reflections.css'
import {Button, ButtonGroup} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import watts from './assets/reflections/wattsSunset.png';
import skydiving from './assets/reflections/skydiving2.png';



function Reflections() {

    
    return (
    
    <div class='containerreflections'>
                
        <div class='subsection subsection-large'>
            <div class='quotetext'>
                “Life is like music for its own sake. We are living in an eternal now, and when we listen to music we are not listening to the past, 
                we are not listening to the future, we are listening to an expanded present.” ― Alan Watts
            </div>
            <img src={watts} class='wattsImage'></img>
        </div>
        <div class='subsection subsection-medium'>
            <div class='skydivingText'>
                I love pushing myself to do things I've never done before. In August of 2021 a close friend and I went skydiving before moving away
            </div>
            <img src={skydiving} class='skydivingImage'></img>
        </div>

    </div>
    )
}

export default Reflections;