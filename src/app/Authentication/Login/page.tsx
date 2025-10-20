'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user.emailVerified) {
        await signOut(auth);
        setError('Please verify your email before logging in.');
        return;
      }
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to a protected route or dashboard
      window.location.href = '/';
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-900 p-4 sm:p-6 md:p-8'>
      <Card className='w-full max-w-md bg-gray-800 text-white border-gray-700 shadow-lg rounded-xl'>
        <CardHeader className='text-center'>
          <CardTitle className='text-3xl font-bold tracking-tighter'>
            Welcome Back!
          </CardTitle>
          <CardDescription className='text-gray-400 text-base'>
            Sign in to continue to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-6'>
          <div className='grid gap-3'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              className='bg-ray-700 border-gray-600'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              placeholder='Enter your password'
              className='bg-gray-700 border-gray-600'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className='text-red-500 text-sm'>{error}</p>}
        </CardContent>
        <CardFooter className='flex flex-col gap-4'>
          <Button onClick={handleLogin} className='w-full bg-[#4f46e5] hover:bg-[#4338ca] text-lg font-semibold tracking-tighter text-white'>
            Login
          </Button>
          <div className='text-center text-sm'>
            <Link href='/Authentication/ForgotPassword' className='text-white hover:underline'>
              Forgot your password?
            </Link>
          </div>
          <div className='text-center text-sm text-white'>
            Don&apos;t have an account?{' '}
            <Link href='/Authentication/Signup' className='text-[#93c5fd] hover:underline'>
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
