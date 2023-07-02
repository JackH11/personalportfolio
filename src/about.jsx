import './about.css'
import {Button, ButtonGroup} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import trustees from './assets/about/trustees.png'
import giffin from './assets/about/giffin2.jpg';
import att from './assets/about/at&t.jpg';
import linkedIn from './assets/about/linkedin.png';
import kaggle from './assets/about/k.png';
import giffinLogo from './assets/about/giffin-logo-color.png';
import msuLogo from './assets/about/msulogo.png';
import attlogo from './assets/about/att-logo-1.png';

import HorizontalScrollBar from './HorizontalScrollBar';

import Card from './card';
import Unicorn from './assets/projects/kaggle EDA/Unicorn Companies.png';






function About() {



    return (
    <div>
        <div class='containerabout'>
                    
            <div class='subsection3'>
                <div class='logo1'>
                    <div class='logo11'>
                        <img src={attlogo} class='giffinLogo'></img>
                    </div>
                    <div class='logo12'>
                        <div class='logo12header1'>
                            <div class='logo12headerp1'>
                                AT&T
                            </div>
                        </div>
                        <div class='logo12header'>
                            <div class='logo12headerp'>
                                Network Engineer
                            </div>
                        </div>
                        <div class='logo12subheader'>
                            <div class='logo12subheaderp'>
                                Dallas, TX
                            </div>
                        </div>
                        <div class='logo12body'>
                            <div class='logo12bodyp'>


                                After graduating I moved to Dallas Texas to work as a Network Engineer in AT&T's technology development program. Here I have been able to 
                                rotate and work in different areas of the company.<br></br><br></br>

                                Over the past year I have been picking up new skills and seeing first hand how new initiatives are driven at a company as large as AT&T.
                                
                                
                                <br></br><br></br>

                                Takeaways


                                <ul className="custom-list">
                                    
                                    <li>
                                        Connecting with others expands your reach and ability to positively impact the company and those around you. 
                                    </li>
                                    <li>
                                        Stay focused on how products or applications add value to the business and users. It's easy to get caught up in fancy technology
                                    </li>
                                    <li>
                                        Peoples' time and attention are limited resources. Effective data reports convery a message in a way that's easy to understand.
                                    </li>


                                </ul>


                            </div>
                        </div>
                        
                            
                    </div>
                </div>
                
            </div>
            <div class='subsection2'>
                <div class='logo1'>
                    <div class='logo11'>
                        <img src={msuLogo} class='giffinLogo'></img>
                    </div>
                    <div class='logo12'>
                        <div class='logo12header1'>
                            <div class='logo12headerp1'>
                                Michigan State University
                            </div>
                        </div>
                        <div class='logo12header'>
                            <div class='logo12headerp'>
                                B.S. Mechanical Engineering, Minor in Computer Science and German
                            </div>
                        </div>
                        <div class='logo12subheader'>
                            <div class='logo12subheaderp'>
                                Lansing, MI
                            </div>
                        </div>
                        <div class='logo12body'>
                            <div class='logo12bodyp'>


                                I spent four years at MSU exposed to people with different backgrounds and viewpoints, all of who had their own unique goals and aspirations. 
                                This was a time that I spent trying to balance being in the moment and open to new ideas and oppurtunites while also preparing myself 
                                for a sucessfull post-college life.<br></br><br></br>
                                
                                The end of my second year is when COVID took the world by storm and classes moved online. I saw remote leraning as an oppurtunity to significanlty 
                                improve my freedom as I didn't have to spend time commuting and I could take coursework at my own pace. However, as the months went by I realized there
                                was something fundamental missing about the remote environment. Maybe it's the limited peer collaberation or somthing as simple as not being in the physical
                                presense of other like minded individuals trying to learn. Regardless of what it is, it's something I keep in mind to this day when considering the present day
                                dilemma of Remote vs. In-Person work
                                <br></br><br></br>

                                Takeaways


                                <ul className="custom-list">
                                    
                                    <li>
                                        Investing time into wandering to find what you enjoy doing is worth it and will pay off in the long run. Take the oppurtunity to do so. 
                                    </li>
                                    <li>
                                        Good practices become good habits and good habits compound over time. By staying disciplined and developing good study skills early I set myself up
                                        for higher levels of success later on for what felt like lower cost. 
                                    </li>


                                </ul>


                            </div>
                        </div>
                        
                            
                    </div>
                </div>
                
            </div>
            <div class='subsection1'>
                <div class='logo1'>
                    <div class='logo11'>
                        <img src={giffinLogo} class='giffinLogo'></img>
                    </div>
                    <div class='logo12'>
                        <div class='logo12header1'>
                            <div class='logo12headerp1'>
                                Giffin Inc.
                            </div>
                        </div>
                        <div class='logo12header'>
                            <div class='logo12headerp'>
                                Mechanical Engineering Intern, Summer 2019 and 2020
                            </div>
                        </div>
                        <div class='logo12subheader'>
                            <div class='logo12subheaderp'>
                                Auburn Hills, MI and Detroit, MI
                            </div>
                        </div>
                        <div class='logo12body'>
                            <div class='logo12bodyp'>


                                Here was my first hands on expierence in an Engineering role. I worked on the Mac Ave. Assembly plant in Detroit, MI designing and building the assembly 
                                plant responsible for applying paint onto the Jeep Grand Wagoneer and Jeep Grand Cherokee.  <br></br><br></br>
                                
                                I was able to work with a diverse range of engineers,
                                contracters, and union workers in this multifaceted project. I spent a Summer in the design phase working heavily with schematics, drawings, and 3D
                                renders. I went back the next Summer to work at the build site handling on-the-fly problems as the factory was built and commissioned. <br></br><br></br>

                                Takeaways


                                <ul className="custom-list">
                                    
                                    <li>
                                        It's impossible to plan for everything. Unseen challenges will arise while executing on a plan and a great Engineer must be able to 
                                        overcome these obstacles.
                                    </li>
                                    <li>
                                        A well functioning team works together toward a common goal by balancing competing priorities and limitations. Effective communication and collaberation
                                        is imperative while working in this environment. 
                                    </li>
                                    <li>
                                        Safety and Reliability is an extremely valuable commodity. Significant investment is put into making sure systems do not fail under any circumstances.
                                    </li>


                                </ul>


                            </div>
                        </div>
                        
                            
                    </div>
                </div>
            </div>
            <div class='subsection4'>
                
                <div style={{display:'flex', justifyContent:'center'}}>
                <HorizontalScrollBar>
                    <Card title="Filler Beginning"/>
                    <Card title="Card 2"/>
                    <div className="card">
                        <img src={Unicorn}/>
                        <h3>Card 3</h3>
                    </div>
                    <Card title="Card 4"/>
                    <Card title="Card 5"/>
                    <Card title="Card 6"/>
                    <Card title="Card 7"/>
                    <Card title="Card 8"/>
                    <Card title="Card 9"/>
                    <Card title="Card 10"/>
                    <Card title="Card 11"/>
                    <Card title="Filler End"/>
                </HorizontalScrollBar>

                </div>




            </div>
            <div class='subsection' style={{display:'none'}}>
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
    </div>
    )
}

export default About;