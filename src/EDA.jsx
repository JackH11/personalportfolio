
import './EDA.css';
import Diamond from './assets/projects/kaggle EDA/Diamond Hunting.png';
import Economics from './assets/projects/kaggle EDA/Economics.png';
import Happiness from './assets/projects/kaggle EDA/Happiness Metrics.png';
import Immigration from './assets/projects/kaggle EDA/Immigration.png';
import Ski from './assets/projects/kaggle EDA/Ski Town.png';
import Unicorn from './assets/projects/kaggle EDA/Unicorn Companies.png';









function EDA() {


    return (

        <div class='container'>
            <div class='header'>
                Exploratory Data Analysis on Kaggle
            </div>  
            <div class='imagerow'>
                <div class='imageBox'>
                    <a href='https://www.kaggle.com/code/jackhasselbring/diamond-hunting-eda-and-r-over-0-98'>
                        <img src={Diamond} class='image image1'></img>
                    </a>
                    <div class='description'>
                        Diamond Price Predictions
                    </div>      
                </div>
                <div class='imageBox'>
                    <a href = 'https://www.kaggle.com/code/jackhasselbring/us-economics-eda'>
                        <img src={Economics} class='image image2'></img>
                    </a>
                    <div class='description'>
                        United States Economic Data
                    </div> 
                </div>
                <div class='imageBox'>
                    <a href='https://www.kaggle.com/code/jackhasselbring/happiness-index-eda'>
                        <img src={Happiness} class='image image3'></img>
                    </a>
                    <div class='description'>
                        National Happiness Metrics
                    </div> 
                </div>
            </div>
            <div class='imagerow'>
                <div class='imageBox'>
                    <a href='https://www.kaggle.com/code/jackhasselbring/immigration-eda'>
                        <img src={Immigration} class='image image1'></img>
                    </a>
                    <div class='description'>
                        United States Immigration Data
                    </div>      
                </div>
                <div class='imageBox'>
                    <a href='https://www.kaggle.com/code/jackhasselbring/ski-town-eda'>
                        <img src={Ski} class='image image2'></img>
                    </a>
                    <div class='description'>
                        Ski Town Real Estate Information
                    </div> 
                </div>
                <div class='imageBox'>
                    <a href='https://www.kaggle.com/code/jackhasselbring/unicorn-companies-eda'>
                        <img src={Unicorn} class='image image3'></img>
                    </a>
                    <div class='description'>
                        Unicorn Companies in the US
                    </div> 
                </div>
            
            </div>
        </div>
    )



}




export default EDA;


