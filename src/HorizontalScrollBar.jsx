import React, { useState , useEffect} from 'react';
import './HorizontalScrollBar.css';

function scrollBar ({children}) {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(1);
    const scrollContainerRef = React.useRef(null);


    const handleMoveRight = () => {

        const container = scrollContainerRef.current;
        if (container) {
          const newIndex = currentIndex + 1;
          const card = container.firstChild;
          const containerWidth = container.offsetWidth;
          const cardWidth = card.offsetWidth;
          const targetCard = container.children[newIndex];

          console.log(newIndex);
          
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
            console.log(targetPosition);
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
          
          console.log(newIndex);

          
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
            console.log(targetPosition);
            setScrollPosition(targetPosition);
          }
        }
      };

    return (
    <div style={{display:'flex'}}>

        <button onClick={handleMoveLeft}>Move Left</button>
        <div 
        style={{display:'flex', overflowX:'hidden', scrollBehavior:'smooth',scrollLeft:scrollPosition, width:'650px'}}
        ref={scrollContainerRef}
        >
            {React.Children.map(children, (child, index) => (
            <div className="card" 
            style={{ 
                flexShrink: 0, 
                width:'1200px',
                height: '450px',
                justifyContent:'center', 
                display:'flex', 
                visibility: currentIndex === index ? 'visible' : 'visible'
            }}>{child}</div>
            ))}
        </div>

        
        <button onClick={handleMoveRight}>Move Right</button>
        
    </div>
    )



}

export default scrollBar
