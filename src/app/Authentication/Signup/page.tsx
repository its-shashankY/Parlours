'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSignup = async () => {
    setError(null);
    setSuccess(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      setSuccess('Account created successfully! A verification email has been sent.');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-900 p-4 sm:p-6 md:p-8'>
      <Card className='w-full max-w-md bg-gray-800 text-white border-gray-700 shadow-lg rounded-xl'>
        <CardHeader className='text-center'>
          <CardTitle className='text-3xl font-bold tracking-tighter'>
            Create an Account
          </CardTitle>
          <CardDescription className='text-gray-400 text-base'>
            Join us to book your appointments easily.
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-6'>
          <div className='grid gap-3'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              className='bg-gray-700 border-gray-600'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              placeholder='Create a password'
              className='bg-gray-700 border-gray-600'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          {success && <p className='text-green-500 text-sm'>{success}</p>}
        </CardContent>
        <CardFooter className='flex flex-col gap-4'>
          <Button onClick={handleSignup} className='w-full bg-[#4f46e5] hover:bg-[#4338ca] text-lg font-semibold tracking-tighter text-white'>
            Sign Up
          </Button>
          <div className='text-center text-sm'>
            Already have an account?{'​'}
            <Link href='/Authentication/Login' className='text-white hover:underline'>
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
