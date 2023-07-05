import HorizontalScrollBar from './HorizontalScrollBar';

import Card from './card';
import Unicorn from './assets/projects/kaggle EDA/Unicorn Companies.png';
import Diamond from './assets/projects/kaggle EDA/Diamond Hunting.png';
import Economics from './assets/projects/kaggle EDA/Economics.png';
import Happiness from './assets/projects/kaggle EDA/Happiness Metrics.png';
import Immigration from './assets/projects/kaggle EDA/Immigration.png';
import Ski from './assets/projects/kaggle EDA/Ski Town.png';
import Electric from './assets/projects/kaggle EDA/Electric Vehicle.png'







function EDAScrollBar ({children}) {






    return (

        <div style={{maxWidth:'100%'}}>
            <div style={{display:'flex', justifyContent:'center', maxWidth:'100%'}}>
                <HorizontalScrollBar>
                    <Card/>
                    <div className="card">
                        <h3>
                        Electric Vehicles
                        </h3>
                        <a href='https://www.kaggle.com/code/jackhasselbring/unicorn-companies-eda'>
                            <img src={Electric}/>
                        </a>        
                    </div>
                    <div className="card">
                        <h3>
                        Unicorn Companies
                        </h3>
                        <a href='https://www.kaggle.com/code/jackhasselbring/unicorn-companies-eda'>
                            <img src={Unicorn}/>
                        </a>        
                    </div>
                    <div className="card">
                        <h3>
                        Diamond Price Prediction
                        </h3>
                        <a href='https://www.kaggle.com/code/jackhasselbring/unicorn-companies-eda'>
                            <img src={Diamond}/>
                        </a>        
                    </div>
                    <div className="card">
                        <h3>
                        US Macro Economics Analysis
                        </h3>
                        <a href='https://www.kaggle.com/code/jackhasselbring/unicorn-companies-eda'>
                            <img src={Economics}/>
                        </a>        
                    </div>
                    <div className="card">
                        <h3>
                        National Happiness Metrics
                        </h3>
                        <a href='https://www.kaggle.com/code/jackhasselbring/unicorn-companies-eda'>
                            <img src={Happiness}/>
                        </a>        
                    </div>
                    <div className="card">
                        <h3>
                        United States Immigration Data
                        </h3>
                        <a href='https://www.kaggle.com/code/jackhasselbring/unicorn-companies-eda'>
                            <img src={Immigration}/>
                        </a>        
                    </div>
                    <div className="card">
                        <h3>
                        Ski Town Real Estate Information
                        </h3>
                        <a href='https://www.kaggle.com/code/jackhasselbring/unicorn-companies-eda'>
                            <img src={Ski}/>
                        </a>        
                    </div>
                    <Card/>
                </HorizontalScrollBar>

            </div>
        </div>


    )
}



export default EDAScrollBar























