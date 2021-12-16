import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image'
const EmblaCarousel = ({ carousel }) => {
  
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  /*const slides = Array.from(Array(carousel.length).keys());*/

  var media = [];

    carousel.map((car) => {
        /*console.log(car.fields.file.url)*/
        media.push(car.fields.file.url)
    }) 
    
  const mediaByIndex = index => media[index % media.length];
  
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  {
                    /*<Image
                    className="embla__slide__img"
                    src={`https:${mediaByIndex(index)}`}
                    alt="prévia."
                    width={1024}
                    height={786}
                    />
                  console.log(`https:${mediaByIndex(index)}`)*/
                  
                    <img
                    className="embla__slide__img"
                    src={mediaByIndex(index)}
                    alt="prévia"
                  />
                  }
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
