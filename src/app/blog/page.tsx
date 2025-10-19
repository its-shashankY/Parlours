
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Bridal Makeup",
    description: "Look your best on your special day with our professional bridal makeup services.",
    image: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?_gl=1*1joidnp*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMyODM5JGozMCRsMCRoMA..",
    link: "/blog/bridal-makeup",
  },
  {
    title: "Party Makeup",
    description: "Get ready for any occasion with our stunning party makeup.",
    image: "https://images.pexels.com/photos/6184932/pexels-photo-6184932.jpeg?_gl=1*1stzgbu*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMyOTMwJGozMCRsMCRoMA..",
    link: "/blog/party-makeup",
  },
  {
    title: "Nail Art",
    description: "Express yourself with our creative and intricate nail art designs.",
    image: "https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?_gl=1*nbfya4*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMzMzEyJGo1MSRsMCRoMA..",
    link: "/blog/nail-art",
  },
  {
    title: "Haircut",
    description: "Transform your look with a stylish new haircut from our expert stylists.",
    image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?_gl=1*1p7g7lr*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMzMDI4JGo2MCRsMCRoMA..",
    link: "/blog/haircut",
  },
  {
    title: "Manicure",
    description: "Pamper your hands with our relaxing and rejuvenating manicure treatments.",
    image: "https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?_gl=1*jhlfo7*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMzMTU4JGozNyRsMCRoMA..",
    link: "/blog/manicure",
  },
  {
    title: "Pedicure",
    description: "Treat your feet to a soothing pedicure and leave with happy, healthy feet.",
    image: "https://images.pexels.com/photos/4963838/pexels-photo-4963838.jpeg?_gl=1*1mrr17v*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMzMTk0JGoxJGwwJGgw",
    link: "/blog/pedicure",
  },
  {
    title: "Facial",
    description: "Rejuvenate your skin with our customized facial treatments.",
    image: "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?_gl=1*xvbjdg*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMzMjIyJGo1NCRsMCRoMA..",
    link: "/blog/facial",
  },
  {
    title: "Waxing",
    description: "Enjoy smooth, hair-free skin with our professional waxing services.",
    image: "https://images.pexels.com/photos/6763618/pexels-photo-6763618.jpeg?_gl=1*xpswpp*_ga*MTYzNDkxOTMyNS4xNzM2MjQ1Nzk0*_ga_8JE65Q40S6*czE3NTc0MzI4MDkkbzEwJGcxJHQxNzU3NDMzMjY2JGoxMCRsMCRoMA..",
    link: "/blog/waxing",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">Our Services</h1>
        <p className="text-gray-400 mt-2 text-lg">Discover the wide range of services we offer</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service) => (
          <Link href={service.link} key={service.title}>
            <Card className="bg-gray-800 border-gray-700 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col">
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
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
              <CardFooter>
                <span className="text-pink-400 hover:underline">Read More</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
