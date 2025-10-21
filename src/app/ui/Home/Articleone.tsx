"use client";

import Carousel from "@/components/ui/carousel";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "Hair Styling",
      button: "Book Appointment",
      src: "https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    },
    {
      title: "Bridal Makeup",
      button: "Book Appointment",
      src: "https://images.pexels.com/photos/12995512/pexels-photo-12995512.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    },
    {
      title: "Facial & Skincare",
      button: "Book Appointment",
      src: "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    },
    {
      title: "Spa & Relaxation",
      button: "Book Appointment",
      src: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    },
    {
      title: "Nail Art",
      button: "Book Appointment",
      src: "https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    },
    {
      title: "Mehendi Designs",
      button: "Book Appointment",
      src: "https://images.pexels.com/photos/8819774/pexels-photo-8819774.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
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
