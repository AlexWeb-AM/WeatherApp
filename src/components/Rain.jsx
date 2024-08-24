import { useContext, useEffect } from "react";
import { ThemeContext } from "../context";


export default function Rain() {

    let ct = useContext(ThemeContext)

    useEffect(() => {
        const rainContainer = document.querySelector('.rain');
    
        for (let i = 0; i < 100; i++) {
          const raindrop = document.createElement('div');
          raindrop.classList.add('raindrop');
          

          raindrop.style.left = `${Math.random() * 100}%`;
          
          
          const fallDuration = Math.random() * 1 + 1;
          const fallDelay = Math.random() * 3;
          raindrop.style.animationDuration = `${fallDuration}s`;
          raindrop.style.animationDelay = `${fallDelay}s`;
          
          rainContainer.appendChild(raindrop);
        }
      }, []);

    return (
        <div className={`rain ${ct.theme ? 'rain_dark':'rain_light'}`}></div>
    )
}