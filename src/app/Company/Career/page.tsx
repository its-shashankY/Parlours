'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CareerPage = () => {
  return (
    <div className='bg-gray-50 min-h-screen text-white'>
      <header className='bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-20'>
        <h1 className='text-5xl font-bold tracking-tight'>Join Our Team</h1>
        <p className='mt-4 text-lg'>
          We're looking for passionate individuals to join our mission.
        </p>
      </header>

      <main className='container mx-auto py-16 px-6'>
        <section>
          <h2 className='text-4xl font-bold text-center text-gray-900'>
            Open Positions
          </h2>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <Card className='transform hover:scale-105 transition-transform duration-300'>
              <CardHeader>
                <CardTitle className='text-2xl font-bold'>
                  Senior Hair Stylist
                </CardTitle>
                <p className='text-md text-pink-500'>Full-Time</p>
              </CardHeader>
              <CardContent>
                <p className='text-white tracking-tight'>
                  We are looking for an experienced hair stylist to lead our
                  hair design team. Must have at least 5 years of experience.
                </p>
                <Button className='mt-4 bg-pink-500 hover:bg-pink-600 text-white'>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
            <Card className='transform hover:scale-105 transition-transform duration-300'>
              <CardHeader>
                <CardTitle className='text-2xl font-bold'>
                  Esthetician
                </CardTitle>
                <p className='text-md text-pink-500'>Part-Time</p>
              </CardHeader>
              <CardContent>
                <p className='text-white tracking-tight'>
                  Seeking a licensed esthetician to provide a range of
                  skincare treatments. Flexible hours available.
                </p>
                <Button className='mt-4 bg-pink-500 hover:bg-pink-600 text-white'>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
            <Card className='transform hover:scale-105 transition-transform duration-300'>
              <CardHeader>
                <CardTitle className='text-2xl font-bold'>
                  Front Desk Coordinator
                </CardTitle>
                <p className='text-md text-pink-500'>Full-Time</p>
              </CardHeader>
              <CardContent>
                <p className='text-white tracking-tight'>
                  Join our team as the first point of contact for our clients.
                  Excellent customer service skills required.
                </p>
                <Button className='mt-4 bg-pink-500 hover:bg-pink-600 text-white'>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className='mt-20'>
          <h2 className='text-4xl font-bold text-center text-gray-900 tracking-tighter'>
            Apply Now
          </h2>
          <Card className='max-w-2xl mx-auto mt-10'>
            <CardContent className='p-8'>
              <form className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-white'
                  >
                    Full Name
                  </label>
                  <Input id='name' type='text' className='mt-1 block w-full' />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-white'
                  >
                    Email
                  </label>
                  <Input id='email' type='email' className='mt-1 block w-full' />
                </div>
                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-white'
                  >
                    Phone
                  </label>
                  <Input id='phone' type='tel' className='mt-1 block w-full' />
                </div>
                <div>
                  <label
                    htmlFor='resume'
                    className='block text-sm font-medium text-white'
                  >
                    Resume/CV
                  </label>
                  <Input id='resume' type='file' className='mt-1 block w-full' />
                </div>
                <div>
                  <label
                    htmlFor='cover-letter'
                    className='block text-sm font-medium text-white'
                  >
                    Cover Letter
                  </label>
                  <Textarea
                    id='cover-letter'
                    className='mt-1 block w-full'
                  />
                </div>
                <div className='text-center'>
                  <Button
                    type='submit'
                    className='bg-purple-600 hover:bg-purple-700 text-white'
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className='bg-gray-800 text-white py-10 text-center'>
        <p>&copy; 2024 Beauty Parlour. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CareerPage;
