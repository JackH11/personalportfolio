import './dropdown.css'
import {Button, ButtonGroup} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import About from './about'
import Projects from './projects'
import Reflections from './relfections';
import personalPhoto from './assets/about/Personal Photo 3.jpg'


function Dropdown() {


    const [selectedPage, setSelectedPage] = useState('About');

    
    return (
    
    <div>
        <div class="largeBox">
            <div class='name'>
                
            </div>
            <div class="headerContainer">
                
                <Button className="smallBox" onClick={() => setSelectedPage('About')} style={{display:'none'}}>
                    About
                </Button>
                <Button className="smallBox" onClick={() => setSelectedPage('Projects')} style={{display:'none'}}>
                    Projects
                </Button>
                <Button className="smallBox" onClick={() => setSelectedPage('Reflections')} style={{display:'none'}}>
                    Reflections
                </Button>
            </div>
            
        </div> 
        <div>
            {selectedPage === 'About' && <About />}
            {selectedPage === 'Projects' && <Projects />}
            {selectedPage === 'Reflections' && <Reflections />}

        </div>

    </div>
    )
}

export default Dropdown;