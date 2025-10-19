"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Header } from "@/app/ui/Home/Header"

export default function Section() {
  return <div className="mt-10">
          <HeroParallax products={products} />
         </div>
}
export const products = [
  {
    title: "Facial",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/3212179/pexels-photo-3212179.jpeg?_gl=1*16xomg6*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MjY1MjIkbzkkZzEkdDE3NTc0Mjc0MTMkajE0JGwwJGgwg",
  },
  {
    title: "Marriage Makeup",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?_gl=1*penw1t*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MjY1MjIkbzkkZzEkdDE3NTc0MjcxODIkajIwJGwwJGgw",
  },
  {
    title: "Nail Fashion",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/6135681/pexels-photo-6135681.jpeg?_gl=1*82ytw7*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MjY1MjIkbzkkZzEkdDE3NTc0MjcwMTIkajUyJGwwJGgw",
  },

  {
    title: "UP Fashion View",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?_gl=1*1qdfvwv*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MjY1MjIkbzkkZzEkdDE3NTc0MjY1NTQkajI4JGwwJGgw",
  },
  {
    title: "New Fashion View",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?_gl=1*1qdfvwv*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MjY1MjIkbzkkZzEkdDE3NTc0MjY1NTQkajI4JGwwJGgw",
  },
  {
    title: "For Fashion View",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?_gl=1*1qdfvwv*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MjY1MjIkbzkkZzEkdDE3NTc0MjY1NTQkajI4JGwwJGgw",
  },

  {
    title: "For Shopping",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?_gl=1*3bv2gk*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MjY1MjIkbzkkZzEkdDE3NTc0MjY4MzUkajI1JGwwJGgw",
  },
  {
    title: "Fashion View",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?_gl=1*1qdfvwv*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MjY1MjIkbzkkZzEkdDE3NTc0MjY1NTQkajI4JGwwJGgw",
  },
  {
    title: "Shopping",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?_gl=1*3bv2gk*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MjY1MjIkbzkkZzEkdDE3NTc0MjY4MzUkajI1JGwwJGgw",
  },
  {
    title: "Beauty Parlour",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/7195812/pexels-photo-7195812.jpeg?_gl=1*bk0d5o*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MjY1MjIkbzkkZzEkdDE3NTc0MjY5MzkkajIxJGwwJGgw",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
