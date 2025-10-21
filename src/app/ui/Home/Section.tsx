"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

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
      "https://images.pexels.com/photos/3212179/pexels-photo-3212179.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
  },
  {
    title: "Marriage Makeup",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
  },
  {
    title: "Nail Fashion",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/6135681/pexels-photo-6135681.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
  },

  {
    title: "UP Fashion View",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
  },
  {
    title: "New Fashion View",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
  },
  {
    title: "For Fashion View",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
  },

  {
    title: "For Shopping",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
  },
  {
    title: "Fashion View",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
  },
  {
    title: "Shopping",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
  },
  {
    title: "Beauty Parlour",
    link: "/Appointment",
    thumbnail:
      "https://images.pexels.com/photos/7195812/pexels-photo-7195812.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
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
