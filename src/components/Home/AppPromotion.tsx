
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, CreditCard, Bell, Map } from 'lucide-react';

const AppPromotion = () => {
  return (
    <section className="py-16 bg-railway-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Download the IRide Express App
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Get a better experience and more features on our mobile app. Book tickets, check PNR status, and receive real-time updates on your journey.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-4">
                  <Bell className="h-6 w-6 text-railway-yellow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Real-time Notifications</h3>
                  <p className="text-white/70">Get instant updates about your booking, platform changes, and delays.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-4">
                  <CreditCard className="h-6 w-6 text-railway-yellow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Quick Refunds</h3>
                  <p className="text-white/70">Faster refund processing for cancelled or rescheduled journeys.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-4">
                  <Map className="h-6 w-6 text-railway-yellow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Live Train Tracking</h3>
                  <p className="text-white/70">Track your train's location in real-time with our live map feature.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-railway-blue hover:bg-white/90 gap-2">
                <Download className="h-5 w-5" />
                Download for iOS
              </Button>
              <Button className="bg-white text-railway-blue hover:bg-white/90 gap-2">
                <Download className="h-5 w-5" />
                Download for Android
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-railway-yellow opacity-30 blur-lg rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2946&auto=format&fit=crop" 
                alt="IRide Express Mobile App" 
                className="relative z-10 max-w-full h-auto rounded-2xl shadow-lg"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
