
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { CalendarIcon, Train, ArrowRight, MapPin, Search } from 'lucide-react';
import { format } from 'date-fns';

const Hero = () => {
  const [date, setDate] = useState<Date>();
  const [journeyType, setJourneyType] = useState("one-way");

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535535112387-56ffe8db21ff?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Book your <span className="text-railway-yellow">train journey</span> with ease
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Fast, secure, and convenient train bookings across India
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <RadioGroup 
              defaultValue="one-way" 
              className="flex gap-4 mb-6"
              onValueChange={setJourneyType}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-way" id="one-way" />
                <Label htmlFor="one-way">One Way</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="round-trip" id="round-trip" />
                <Label htmlFor="round-trip">Round Trip</Label>
              </div>
            </RadioGroup>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="from">From</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-railway-blue h-5 w-5" />
                  <Input 
                    id="from" 
                    placeholder="Enter city or station" 
                    className="pl-10" 
                    defaultValue="New Delhi"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-railway-red h-5 w-5" />
                  <Input 
                    id="to" 
                    placeholder="Enter city or station" 
                    className="pl-10" 
                    defaultValue="Mumbai Central"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="depart-date">Departure Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-50" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {journeyType === "round-trip" && (
                <div className="space-y-2">
                  <Label htmlFor="return-date">Return Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className="w-full justify-start text-left font-normal text-muted-foreground"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Select date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 z-50" align="start">
                      <Calendar
                        mode="single"
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="class">Class</Label>
                <Select defaultValue="sleeper">
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ac1">AC First Class (1A)</SelectItem>
                    <SelectItem value="ac2">AC 2 Tier (2A)</SelectItem>
                    <SelectItem value="ac3">AC 3 Tier (3A)</SelectItem>
                    <SelectItem value="sleeper">Sleeper (SL)</SelectItem>
                    <SelectItem value="general">General (2S)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="w-full bg-railway-blue hover:bg-railway-darkBlue text-white py-6 text-lg">
              <Search className="mr-2 h-5 w-5" /> Find Trains
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-8 max-w-3xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-railway-blue">1000+</span>
            <span className="text-sm text-gray-600">Trains Daily</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-railway-blue">7K+</span>
            <span className="text-sm text-gray-600">Stations</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-railway-blue">10M+</span>
            <span className="text-sm text-gray-600">Daily Passengers</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-railway-blue">4.6★</span>
            <span className="text-sm text-gray-600">User Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
