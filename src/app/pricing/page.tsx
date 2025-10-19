
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const servicesWithPricing = [
  {
    title: "Bridal Makeup",
    description: "Look your best on your special day.",
    image: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?_gl=1*1joidnp*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMyODM5JGozMCRsMCRoMA..",
    price: "₹20750",
  },
  {
    title: "Party Makeup",
    description: "Get ready for any occasion.",
    image: "https://images.pexels.com/photos/6184932/pexels-photo-6184932.jpeg?_gl=1*1stzgbu*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMyOTMwJGozMCRsMCRoMA..",
    price: "₹8300",
  },
  {
    title: "Nail Art",
    description: "Creative and intricate nail designs.",
    image: "https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?_gl=1*nbfya4*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMzMzEyJGo1MSRsMCRoMA..",
    price: "₹4150",
  },
  {
    title: "Haircut",
    description: "A stylish new look from our experts.",
    image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?_gl=1*1p7g7lr*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMzMDI4JGo2MCRsMCRoMA..",
    price: "₹4980",
  },
  {
    title: "Manicure",
    description: "Relaxing and rejuvenating hand treatments.",
    image: "https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?_gl=1*jhlfo7*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMzMTU4JGozNyRsMCRoMA..",
    price: "₹3320",
  },
  {
    title: "Pedicure",
    description: "Soothing treatments for happy feet.",
    image: "https://images.pexels.com/photos/4963838/pexels-photo-4963838.jpeg?_gl=1*1mrr17v*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMzMTk0JGoxJGwwJGgw",
    price: "₹4150",
  },
  {
    title: "Facial",
    description: "Rejuvenate your skin with custom facials.",
    image: "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?_gl=1*xvbjdg*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMzMjIyJGo1NCRsMCRoMA..",
    price: "₹6640",
  },
  {
    title: "Waxing",
    description: "Enjoy smooth, hair-free skin.",
    image: "https://images.pexels.com/photos/6763618/pexels-photo-6763618.jpeg?_gl=1*xpswpp*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMzMjY2JGoxMCRsMCRoMA..",
    price: "₹5810",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">Our Pricing</h1>
        <p className="text-gray-400 mt-2 text-lg">Find the perfect service at the perfect price</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {servicesWithPricing.map((service) => (
          <Card key={service.title} className="bg-gray-800 border-gray-700 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <CardTitle className="text-2xl font-bold tracking-tight">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-400 mb-4">{service.description}</p>
              <p className="text-3xl font-bold text-pink-400">{service.price}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
                <Link href="/parlour">Book Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
