'use client';
import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className='bg-gray-50 min-h-screen text-gray-800'>
      <header className='bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-20'>
        <h1 className='text-5xl font-bold tracking-tight'>Terms of Service</h1>
      </header>

      <main className='container mx-auto py-16 px-6'>
        <section className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            1. Acceptance of Terms
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            By accessing or using our services, you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not
            use our services.
          </p>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            2. Service Bookings and Cancellations
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            All bookings are subject to availability. If you need to cancel or
            reschedule your appointment, please provide at least 24 hours'
            notice. Cancellations made with less than 24 hours' notice may be
            subject to a fee.
          </p>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            3. User Conduct
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            You agree to use our services only for lawful purposes. You are
            prohibited from posting or transmitting any material that is
            unlawful, threatening, or otherwise objectionable.
          </p>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            4. Limitation of Liability
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Our liability is limited to the fullest extent permitted by law. In
            no event shall we be liable for any indirect, incidental, or
            consequential damages arising out of your use of our services.
          </p>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            5. Governing Law
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the jurisdiction in which our parlour
            is located.
          </p>
        </section>
      </main>

      <footer className='bg-gray-800 text-white py-10 text-center'>
        <p>&copy; 2024 Beauty Parlour. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsOfServicePage;
