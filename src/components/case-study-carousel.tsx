import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { caseStudySlides } from '../data/carousel-slides'

export function CaseStudyCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  )

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent>
        {caseStudySlides.map((slide, i) => (
          <CarouselItem key={i}>
            <div className="relative w-full aspect-[16/7] overflow-hidden bg-surface-container rounded-lg border border-outline-variant">
              <img
                alt={slide.alt}
                className="w-full h-full object-cover grayscale"
                src={slide.src}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
    </Carousel>
  )
}
