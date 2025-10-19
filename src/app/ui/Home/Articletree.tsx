import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconStar,
  IconHeart,
  IconCrown,
  IconFlower,
  IconSparkles,
  IconMoodSmileBeam,
  IconHandSanitizer,
} from "@tabler/icons-react";
import Image from "next/image";

export default function TestimonialsGrid() {
  return (
    <>
    <div className="text-center font-extrabold text-6xl mt-[40px] tracking-tighter">Testimonials of Customers</div><br/>
    <BentoGrid className="max-w-5xl mx-auto py-10">
      {testimonials.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.name}
          description={item.feedback}
          header={item.header}
          icon={item.icon}
          className={i === 2 || i === 5 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-100 dark:from-neutral-900 dark:to-neutral-800 to-rose-50">
     <img  width="100%" src="https://images.pexels.com/photos/15723780/pexels-photo-15723780.jpeg?_gl=1*1b61q19*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzYwNzckbzExJGcxJHQxNzU3NDM2Mjk2JGozOCRsMCRoMA.."/>
  </div>
);

const testimonials = [
  {
    name: "Priya Sharma",
    feedback:
      "Absolutely loved my bridal makeup! The team made me feel like a princess. Highly recommend for weddings.",
    header: <Skeleton />,
    icon: <IconCrown className="h-5 w-5 text-pink-500" />,
  },
  {
    name: "Ananya Gupta",
    feedback:
      "The facial and skincare treatments here are heavenly. My skin has never felt so fresh and glowing!",
    header: <Skeleton />,
    icon: <IconFlower className="h-5 w-5 text-rose-500" />,
  },
  {
    name: "Rohini Verma",
    feedback:
      "I love their nail art designs. Super creative, neat, and long-lasting. Great value for money too.",
    header: <Skeleton />,
    icon: <IconHeart className="h-5 w-5 text-red-500" />,
  },
  {
    name: "Kavya Reddy",
    feedback:
      "The spa sessions are so relaxing! The ambience, aroma, and massage all helped me unwind completely.",
    header: <Skeleton />,
    icon: <IconHandSanitizer className="h-5 w-5 text-green-500" />,
  },
  {
    name: "Meera Joshi",
    feedback:
      "Best parlour in town! From mehendi to makeup, everything is professional and customer-friendly.",
    header: <Skeleton />,
    icon: <IconMoodSmileBeam className="h-5 w-5 text-yellow-500" />,
  },
  {
    name: "Simran Kaur",
    feedback:
      "Super hygienic and modern beauty parlour. I always come here for my monthly grooming sessions.",
    header: <Skeleton />,
    icon: <IconStar className="h-5 w-5 text-orange-500" />,
  },
];
