"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold tracking-tight">About Our Beauty Parlour</h1>
        <p className="mt-4 text-lg">Your sanctuary for beauty and wellness.</p>
      </header>

      <main className="container mx-auto py-16 px-6">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
            Founded in 2010, our beauty parlour has been a haven for those seeking to enhance their natural beauty. 
            We started with a small team of passionate stylists and have grown into a full-service salon known for 
            our dedication to quality and customer satisfaction.
          </p>
        </section>

        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center text-gray-900">Meet Our Team</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-bold">Jane Doe</CardTitle>
                <p className="text-md text-pink-500">Lead Stylist</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Jane has over 15 years of experience in the beauty industry, specializing in creative hair design and color treatments.
                </p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg" />
                  <AvatarFallback>ES</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-bold">Emily Smith</CardTitle>
                <p className="text-md text-pink-500">Makeup Artist</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Emily is a certified makeup artist with a flair for bridal and special occasion makeup.
                </p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg" />
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-bold">Michael Brown</CardTitle>
                <p className="text-md text-pink-500">Skin Care Specialist</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Michael is an expert in skincare, offering personalized facials and treatments to rejuvenate your skin.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
            Our mission is to provide a welcoming and luxurious environment where you can relax, rejuvenate, and leave feeling beautiful inside and out. 
            We are committed to using high-quality products and staying up-to-date with the latest trends to offer you the best possible service.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10 text-center">
        <p>&copy; 2024 Beauty Parlour. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
