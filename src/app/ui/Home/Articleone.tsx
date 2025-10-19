"use client";

import Carousel from "@/components/ui/carousel";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "Hair Styling",
      button: "Book Appointment",
      src: "https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?_gl=1*1hrkr5m*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MTYyOTQkbzYkZzEkdDE3NTc0MTYzODUkajU5JGwwJGgw",
    },
    {
      title: "Bridal Makeup",
      button: "Book Appointment",
      src: "https://images.pexels.com/photos/12995512/pexels-photo-12995512.jpeg?_gl=1*fnd49s*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MTk3MjIkbzckZzEkdDE3NTc0MTk4NjAkajYwJGwwJGgw",
    },
    {
      title: "Facial & Skincare",
      button: "Book Appointment",
      src: "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?_gl=1*ay4215*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MTk3MjIkbzckZzEkdDE3NTc0MTk5MTgkajIkbDAkaDA.",
    },
    {
      title: "Spa & Relaxation",
      button: "Book Appointment",
      src: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?_gl=1*15xp3i1*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MTk3MjIkbzckZzEkdDE3NTc0MTk5NzUkajQwJGwwJGgw",
    },
    {
      title: "Nail Art",
      button: "Book Appointment",
      src: "https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?_gl=1*xme6w9*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MTk3MjIkbzckZzEkdDE3NTc0MjAwMTkkajYwJGwwJGgw",
    },
    {
      title: "Mehendi Designs",
      button: "Book Appointment",
      src: "https://images.pexels.com/photos/8819774/pexels-photo-8819774.jpeg?_gl=1*mu7anj*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MTk3MjIkbzckZzEkdDE3NTc0MjAwNzIkajckbDAkaDA.",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
    <div className="mx-auto w-[90%] left-[5%] py-20 text-6xl font-bold tracking-tight">
      Explore our Best
      <PointerHighlight>
        <span>Services</span>
      </PointerHighlight>
    </div>
      <Carousel slides={slideData} />
    </div>
  );
}
