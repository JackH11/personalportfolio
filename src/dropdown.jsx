import './dropdown.css'
import {Button, ButtonGroup} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import About from './about'
import Projects from './projects'
import Reflections from './relfections';


function Dropdown() {


    const [selectedPage, setSelectedPage] = useState('About');

    
    return (
    
    <div>
        <div class="largeBox">
            <div class='name'>
                Jack Hasselbring
            </div>
            <div class="headerContainer">
                
                <Button className="smallBox" onClick={() => setSelectedPage('About')}>
                    About
                </Button>
                <Button className="smallBox" onClick={() => setSelectedPage('Projects')}>
                    Projects
                </Button>
                <Button className="smallBox" onClick={() => setSelectedPage('Reflections')}>
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