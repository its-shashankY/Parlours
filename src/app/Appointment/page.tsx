'use client';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useRouter } from 'next/navigation';

export default function ParlourPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    } else {
      router.push('/Authentication/Login');
    }
  }, [router]);

  const handleBooking = async () => {
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    // Validation
    if (!name.trim()) {
      setError("Please enter your name");
      setIsLoading(false);
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email");
      setIsLoading(false);
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number");
      setIsLoading(false);
      return;
    }
    if (!service) {
      setError("Please select a service");
      setIsLoading(false);
      return;
    }
    if (!date) {
      setError("Please select a date");
      setIsLoading(false);
      return;
    }
    if (!time) {
      setError("Please select a time slot");
      setIsLoading(false);
      return;
    }

    try {
      const appointmentData = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        service: service,
        date: format(date, "PPP"),
        time: time,
        notes: notes.trim() || "",
        createdAt: Timestamp.now(),
        status: "pending"
      };

      console.log("Attempting to save:", appointmentData);

      const docRef = await addDoc(collection(db, "appointments"), appointmentData);
      
      console.log("Document written with ID: ", docRef.id);
      setSuccess("Appointment booked successfully!");
      
      // Clear form
      setName('');
      setEmail('');
      setPhone('');
      setService('');
      setDate(new Date());
      setTime('');
      setNotes('');
      
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error("Error adding document: ", e);
            setError(`Failed to book appointment: ${e.message || 'Unknown error'}`);
        } else {
            setError('An unexpected error occurred.');
        }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <p className="text-white">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-lg bg-gray-800 text-white border-gray-700 shadow-lg rounded-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tighter">
            Beauty Parlour Appointment
          </CardTitle>
          <CardDescription className="text-gray-400 text-base">
            Book your appointment with us
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="bg-gray-700 border-gray-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 border-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="bg-gray-700 border-gray-600"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="service">Service *</Label>
            <Select onValueChange={setService} value={service}>
              <SelectTrigger id="service" className="bg-gray-700 border-gray-600">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="bridal-makeup">Bridal Makeup</SelectItem>
                <SelectItem value="party-makeup">Party Makeup</SelectItem>
                <SelectItem value="nail-art">Nail Art</SelectItem>
                <SelectItem value="haircut">Haircut</SelectItem>
                <SelectItem value="manicure">Manicure</SelectItem>
                <SelectItem value="pedicure">Pedicure</SelectItem>
                <SelectItem value="facial">Facial</SelectItem>
                <SelectItem value="waxing">Waxing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="grid gap-3">
              <Label htmlFor="date">Appointment Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="w-full justify-start text-left font-normal bg-gray-700 border-gray-600 hover:bg-gray-600"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="time">Time Slot *</Label>
              <Select onValueChange={setTime} value={time}>
                <SelectTrigger id="time" className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="13:00">01:00 PM</SelectItem>
                  <SelectItem value="14:00">02:00 PM</SelectItem>
                  <SelectItem value="15:00">03:00 PM</SelectItem>
                  <SelectItem value="16:00">04:00 PM</SelectItem>
                  <SelectItem value="17:00">05:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="notes">Special Notes</Label>
            <Textarea
              id="notes"
              placeholder="Any special requests?"
              className="bg-gray-700 border-gray-600"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handleBooking} 
            disabled={isLoading}
            className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white text-lg font-md tracking-tighter disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Booking..." : "Book Appointment"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}