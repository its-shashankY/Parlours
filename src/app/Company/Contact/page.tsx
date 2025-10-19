'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className='bg-gray-50 min-h-screen text-gray-800'>
      <header className='bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-20'>
        <h1 className='text-5xl font-bold tracking-tighter'>Contact Us</h1>
        <p className='mt-4 text-lg'>
          We'd love to hear from you! Reach out with any questions or to book
          an appointment.
        </p>
      </header>

      <main className='container mx-auto py-16 px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <section>
            <h2 className='text-4xl font-bold text-gray-900 mb-8 tracking-tighter'>
              Get in Touch
            </h2>
            <Card>
              <CardContent className='p-8'>
                <form className='space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-white'
                    >
                      Full Name
                    </label>
                    <Input
                      id='name'
                      type='text'
                      className='mt-1 block w-full'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-white'
                    >
                      Email
                    </label>
                    <Input
                      id='email'
                      type='email'
                      className='mt-1 block w-full'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-white'
                    >
                      Message
                    </label>
                    <Textarea
                      id='message'
                      className='mt-1 block w-full'
                      rows={5}
                    />
                  </div>
                  <div className='text-center'>
                    <Button
                      type='submit'
                      className='bg-pink-500 hover:bg-pink-600 text-white'
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className='text-4xl font-bold text-gray-900 mb-8 tracking-tighter'>
              Our Location
            </h2>
            <div className='space-y-6 text-lg'>
              <div className='flex items-center'>
                <FaMapMarkerAlt className='text-pink-500 mr-4' />
                <span>Ramdurg, Belgaum, Karnataka, India</span>
              </div>
              <div className='flex items-center'>
                <FaPhoneAlt className='text-pink-500 mr-4' />
                <span>(123) 456-7890</span>
              </div>
              <div className='flex items-center'>
                <FaEnvelope className='text-pink-500 mr-4' />
                <span>contact@beautyparlour.com</span>
              </div>
            </div>
            <div className='mt-8'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.641881655554!2d75.302396!3d15.956794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb76991270478e5%3A0x9525e363155799b6!2sRamdurg%2C%20Karnataka%20591123%2C%20India!5e0!3m2!1sen!2sus!4v1683054543789!5m2!1sen!2sus'
                width='100%'
                height='300'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                title='Google Maps Location'
              ></iframe>
            </div>
          </section>
        </div>
      </main>

      <footer className='bg-gray-800 text-white py-10 text-center'>
        <p>&copy; 2024 Beauty Parlour. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
