"use client";
import Section from "@/app/ui/Home/Section"
import CarouselDemo from "@/app/ui/Home/Articleone"
import ThreeDCardDemo from "@/app/ui/Home/Articletwo"
import TestimonialsGrid from "@/app/ui/Home/Articletree"
import FooterSection from "@/app/ui/Home/Footer"

export default function HomePage(){
    return <>
             <Section/>
             <CarouselDemo/>
             <ThreeDCardDemo/>
             <TestimonialsGrid/>
             <FooterSection/>
            </>
}