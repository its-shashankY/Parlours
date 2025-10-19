'use client';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className='bg-gray-50 min-h-screen text-gray-800'>
      <header className='bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-20'>
        <h1 className='text-5xl font-bold tracking-tight'>Privacy Policy</h1>
      </header>

      <main className='container mx-auto py-16 px-6'>
        <section className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            1. Information We Collect
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            We collect information that you provide to us directly, such as
            when you create an account, book an appointment, or communicate with
            us. This may include your name, email address, phone number, and any
            other information you choose to provide.
          </p>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            2. How We Use Your Information
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            We use the information we collect to provide, maintain, and improve
            our services. This includes processing your bookings, communicating
            with you, and personalizing your experience.
          </p>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            3. Sharing of Your Information
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            We do not share your personal information with third parties except
            as necessary to provide our services or as required by law. We may
            share information with our trusted partners who assist us in
            operating our website and conducting our business.
          </p>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            4. Security of Your Information
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, no method of
            transmission over the internet is 100% secure.
          </p>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            5. Changes to This Policy
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on this page.
          </p>
        </section>
      </main>

      <footer className='bg-gray-800 text-white py-10 text-center'>
        <p>&copy; 2024 Beauty Parlour. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;
