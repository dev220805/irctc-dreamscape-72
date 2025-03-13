
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Train } from 'lucide-react';

const routes = [
  {
    from: 'Delhi',
    to: 'Mumbai',
    trainName: 'Rajdhani Express',
    duration: '16h 25m',
    price: '₹1,235',
    image: 'https://images.unsplash.com/photo-1621951753015-740c699ab970?q=80&w=3024&auto=format&fit=crop',
  },
  {
    from: 'Bangalore',
    to: 'Chennai',
    trainName: 'Shatabdi Express',
    duration: '5h 10m',
    price: '₹750',
    image: 'https://images.unsplash.com/photo-1589962130973-b6b26c61287d?q=80&w=2940&auto=format&fit=crop',
  },
  {
    from: 'Kolkata',
    to: 'Delhi',
    trainName: 'Duronto Express',
    duration: '17h 40m',
    price: '₹1,450',
    image: 'https://images.unsplash.com/photo-1468404201840-a8ef3c278a0a?q=80&w=2835&auto=format&fit=crop',
  },
  {
    from: 'Mumbai',
    to: 'Goa',
    trainName: 'Jan Shatabdi',
    duration: '8h 50m',
    price: '₹845',
    image: 'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?q=80&w=3028&auto=format&fit=crop',
  },
];

const PopularRoutes = () => {
  return (
    <section className="py-16 bg-railway-gray">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Popular Routes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the most popular train journeys across India with competitive fares and convenient schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-40 overflow-hidden relative">
                <img
                  src={route.image}
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 w-full p-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{route.from}</span>
                    <ArrowRight className="h-4 w-4 mx-1" />
                    <span className="font-semibold">{route.to}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <Train className="h-4 w-4 text-railway-blue mr-2" />
                  <h3 className="font-medium text-sm">{route.trainName}</h3>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-gray-600">Duration: {route.duration}</span>
                  <span className="font-semibold text-railway-blue">{route.price}</span>
                </div>
                <Button variant="outline" className="w-full border-railway-blue text-railway-blue hover:bg-railway-lightBlue">
                  Check Availability
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-railway-blue text-railway-blue hover:bg-railway-lightBlue">
            View All Routes <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
