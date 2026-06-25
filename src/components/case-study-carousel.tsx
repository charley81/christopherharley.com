import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const slides = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5jJrsNSsSmam0ll20x5Nop10e0fc41fLZigxUbmZTRyVDAylaITuWiL-e-flayGUBpnAfwoV6pnvgrb7zzFgIZ5z5JkiEmaBDbyyglt1ybuGcsgd4KtQ975lVHYldPXr3MHoHcDZGUFYRsyFZqXxVcAUyUEKW1DFlTV1aXfA29hbPePDnP_QBu4Yw6tVQpgGgp-in0Psr8ymC70a_gABzgBedn8GY1INFiftbZgrc5DUWUVWeTZoww-5LWICtGZoJo6WwcmP-jtE',
    alt: 'Project preview 1',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0AjWCNVTXHkrgBOnrU2ZHq4T96zstouxqw4K62KvfrghjopPMZpfy5pelhianXnDKDGcYxTYfiGW2c8bf93yTEQxYIqtKOTgaozQIGl-1lcGUmCFN0cutPxAAhECG5ERAf6yKdaVJF9KWVtuTHaYhR3CmW9xF1FTXQikG_-SpKXBkfRMv2QUAgAm0ZCBGOLBKrEHI6FnZbZPtMPVr_d1P6_oaAPA_RjalHczPXZKeHwC9mC5jiAnldbU6Ffbok2oWEQIoehIxuek',
    alt: 'Project preview 2',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhdCbmRVB0OXDiYQq6R8YQOogb_yELmbtcyhLJelUZ2Mf1H5_WDDFdQQAVIytXcX9LFVA-pKfZfuyzrkpAP54GnJHQfsZB-E4yX_mVrBxc5_ZYCOonQ6gGuly-iKynLOSrmuvMIHgIJLIc7MvtnPg779o3Ul8IGGRn8nkpW3gxKJNBjmOMu80cD4FnmGE7nP9Lckmipo_v88fnighMH5yFfODmQ47zhZ3uw88KZZ0R3hGEzRd1o_Fb-nn4jUkRKgM2jKl3a_TLpvA',
    alt: 'Project preview 3',
  },
]

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
        {slides.map((slide, i) => (
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
