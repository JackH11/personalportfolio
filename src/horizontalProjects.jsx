import HorizontalScrollBar from './HorizontalScrollBar';

import Card2 from './card2';
import Unicorn from './assets/projects/kaggle EDA/Unicorn Companies.png';
import Diamond from './assets/projects/kaggle EDA/Diamond Hunting.png';
import Economics from './assets/projects/kaggle EDA/Economics.png';
import Happiness from './assets/projects/kaggle EDA/Happiness Metrics.png';
import Immigration from './assets/projects/kaggle EDA/Immigration.png';
import Ski from './assets/projects/kaggle EDA/Ski Town.png';
import Electric from './assets/projects/kaggle EDA/Electric Vehicle.png'

import drone from './assets/projects/drone.jpg';
import Printer1 from './assets/projects/Printer 1 - Dorm.jpg';
import Printer2 from './assets/projects/printer2.jpg';
import snakeVid from './assets/projects/snakeVid2.gif';







function ProjectsScrollBar ({children}) {






    return (

        <div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <HorizontalScrollBar>
                    <Card2/>
                    <div className="card2">
                        <h3>
                        Snake Neural Net
                        </h3>
                        <a>
                            <img src={snakeVid}/>
                        </a>   
                        <div className='bottomText2'>
                            Created a snake game using Pygame, Keras, Tensorflow, and OpenAI's Gym Environment. The 
                            neural network learns how to seek out food and avoid hitting walls. The picture shows
                            the AI's progress at various step intervals.
                        </div>      
                    </div>
                    <div className="card2">
                        <h3>
                        Object Detection Drone
                        </h3>
                        <a>
                            <img src={drone}/>
                        </a>
                        <div className='bottomText2'>
                            Programmed a Tello Drone using Python, Tensorflow, and Google's
                            Object detection API to reposond to hand movements. The model was trained
                            to located a hand and navigate based on the position. The image detection
                            takes into account the distance and horizontal position of the hand to move
                            appropriately.
                        </div>
                        
                    </div>
                    <div className="card2">
                        <h3>
                        3D Printer V1
                        </h3>
                        <a>
                            <img src={Printer1}/>
                        </a>
                        <div className='bottomText2'>
                            Created a snake game using Pygame, Keras, Tensorflow, and OpenAI's Gym Environment. The 
                            neural network learns how to seek out food and avoid hitting walls. The picture shows
                            the AI's progress at various step intervals.
                        </div>        
                    </div>
                    <div className="card2">
                        <h3>
                        3D Printer V2
                        </h3>
                        <a>
                            <img src={Printer2}/>
                        </a> 
                        <div className='bottomText2'>
                            Designed a second model of the printer featuring aluminum as opposed to steel, a 
                            better quality bigTreeTech board, and constructed it with 3D printed parts made from the 
                            first printer. This printer could support a heated bed and had higher printing speeds 
                            and print quality.
                        </div>       
                    </div>
                    <Card2/>
                </HorizontalScrollBar>

            </div>
        </div>


    )
}



export default ProjectsScrollBar