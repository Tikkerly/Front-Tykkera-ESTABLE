"use client"
import { useEffect } from "react";
import "../Suscripcion/styles.css";


const Suscripcion = () => {
    useEffect(() => {
      console.clear();
  
      // Verifica si estamos en un entorno de navegador antes de acceder al DOM
      if (typeof window !== 'undefined') {
        const cardsContainer = document.querySelector(".cards");
        const cardsContainerInner = document.querySelector(".cards__inner");
        const cards = Array.from(cardsContainerInner.querySelectorAll(".card"));
        console.log(cards);
        const overlay = document.querySelector(".overlay");
  
        const applyOverlayMask = (e) => {
          const overlayEl = e.currentTarget;
          const x = e.pageX - cardsContainer.offsetLeft;
          const y = e.pageY - cardsContainer.offsetTop;
  
          overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
        };
  
  
        const observer = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            const cardIndex = cards.indexOf(entry.target);
            let width = entry.borderBoxSize[0].inlineSize;
            let height = entry.borderBoxSize[0].blockSize;

            if (cardIndex >= 0) {
              overlay.children[cardIndex].style.width = `${width}px`;
              overlay.children[cardIndex].style.height = `${height}px`;
              
            }
          });
        });
  
        const initOverlayCard = (cardEl) => {
          const overlayCard = document.createElement("div");
          overlayCard.classList.add("card");
        console.log(overlayCard);
          overlay.append(overlayCard);
          observer.observe(cardEl);
        };
  
        cards.forEach(initOverlayCard);
        document.body.addEventListener("pointermove", applyOverlayMask);
  
        return () => {
          observer.disconnect();
        };
      }
    }, []); 
  
    return (
        <div className="maain">
        <div className="main flow">
        <h1 className="main__heading"></h1>
        <div className="main__cards cards">
          <div className="cards__inner">
            <div className="cards__card card">
                
              <h2 className="card__heading">Basico</h2>
              <p className="card__price">$9.99</p>
              <ul role="list" class="card__bullets flow">
                <li>Algo piola por un mes</li>
                <li>Algo piola por un mes</li>
              </ul>
              <a href="#basic" className="card__cta cta">Un mes</a>
            </div>
    
            <div className="cards__card card">
            
              <h2 className="card__heading">Pro</h2>            
              <p className="card__price">$19.99</p>
              <ul role="list" className="card__bullets flow">
                <li>Algo piola por cinco meses</li>
                <li>Algo piola por cinco meses</li>
                <li>Algo piola por cinco meses</li>
              </ul>
                <a href="#pro" className="card__cta cta">Cinco Meses</a>
            </div>
    
            <div className="cards__card card">
            
              <h2 className="card__heading">Ultimate</h2>
              <p className="card__price">$29.99</p>
              <ul role="list" className="card__bullets flow">
                <li>Algo piola por un año</li>
                <li>Algo piola por un año</li>
                <li>Algo piola por un año</li>
                <li>Algo piola por un año</li>
              </ul>
              <a href="#ultimate" className="card__cta cta">Un año</a>
            </div>
            
          </div>
          
          <div className="overlay cards__inner"></div>
        </div>
      </div>
      </div>
    )
  };
  
  export default Suscripcion;