import React, { useState , useEffect} from 'react';
import './HorizontalScrollBar.css';

import RightArrow from './assets/extraPics/rightArrow.png'


function scrollBar ({children}) {

    const [scrollPosition, setScrollPosition] = useState();
    const [currentIndex, setCurrentIndex] = useState(1);
    const scrollContainerRef = React.useRef(null);

    useEffect(() => {

      console.log(scrollContainerRef.current.children.length);

      const container = scrollContainerRef.current;
        if (container) {
          const newIndex = currentIndex;
          const card = container.firstChild;
          const containerWidth = container.offsetWidth;
          const cardWidth = card.offsetWidth;
          const targetCard = container.children[newIndex];
          
          if (targetCard && newIndex < container.children.length -1){
            const containerLeft = container.getBoundingClientRect().left; // Get container's left edge position
            const targetPosition =
                targetCard.getBoundingClientRect().left -
                containerLeft +
                container.scrollLeft +
                (cardWidth - containerWidth) / 2;
            container.scrollTo({
                left: targetPosition,
                behavior: 'smooth'
            })
            setCurrentIndex(newIndex);
            setScrollPosition(targetPosition);
          }
        }
    }, []);


    const handleMoveRight = () => {

        const container = scrollContainerRef.current;
        if (container) {
          const newIndex = currentIndex + 1;
          const card = container.firstChild;
          const containerWidth = container.offsetWidth;
          const cardWidth = card.offsetWidth;
          const targetCard = container.children[newIndex];
          
          if (targetCard && newIndex < container.children.length -1){
            const containerLeft = container.getBoundingClientRect().left; // Get container's left edge position
            const targetPosition =
                targetCard.getBoundingClientRect().left -
                containerLeft +
                container.scrollLeft +
                (cardWidth - containerWidth) / 2;
            container.scrollTo({
                left: targetPosition,
                behavior: 'smooth'
            })
            setCurrentIndex(newIndex);
            setScrollPosition(targetPosition);
          }
        }
    };

    const handleMoveLeft = () => {
        const container = scrollContainerRef.current;
        if (container) {

          const newIndex = currentIndex - 1;
          const card = container.firstChild;
          const cardWidth = card.offsetWidth;
          const containerWidth = container.offsetWidth;
          const targetCard = container.children[newIndex];

          
          if (targetCard && newIndex != 0) {
            const containerLeft = container.getBoundingClientRect().left; // Get container's left edge position
            const targetPosition =
                targetCard.getBoundingClientRect().left -
                containerLeft +
                container.scrollLeft +
                (cardWidth - containerWidth) / 2;
            container.scrollTo({
              left: targetPosition,
              behavior: 'smooth',
            });
            setCurrentIndex(newIndex);
            setScrollPosition(targetPosition);
          }
        }
      };

    return (
    <div style={{display:'flex', alignItems:'center'}}>


        <img src={RightArrow} style={{maxHeight:'60px', transform:'rotate(180deg)',visibility: currentIndex <= 1 ? 'hidden' : 'visible'}} onClick={handleMoveLeft} ></img>
        <div 
        style={{display:'flex', overflowX:'hidden', scrollBehavior:'smooth',scrollLeft:scrollPosition, width:'900px'}}
        ref={scrollContainerRef}
        >
            {React.Children.map(children, (child, index) => (
            <div className="card" 
            style={{ 
                flexShrink: 0, 
                width:'700px',
                height: '550px',
                justifyContent:'center', 
                display:'flex', 
                visibility: currentIndex === index ? 'visible' : 'visible'
            }}>{child}</div>
            ))}
        </div>
        
        {scrollContainerRef.current &&
        <img src={RightArrow} style={{maxHeight:'60px',visibility: currentIndex >= scrollContainerRef.current.children.length - 2 ? 'hidden' : 'visible'}} onClick={handleMoveRight}></img>
        }
        
    </div>
    )



}

export default scrollBar
