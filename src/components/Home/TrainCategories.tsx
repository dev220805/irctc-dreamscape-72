
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, Clock, Coffee, WifiOff, Wifi, Award } from 'lucide-react';

const trainCategories = {
  premium: [
    {
      name: 'Vande Bharat Express',
      speed: '160 km/h',
      features: ['Premium Comfort', 'Fastest', 'WiFi', 'Catering'],
      description: 'India\'s premium semi-high speed train with modern amenities and reduced travel time.',
      icon: Zap,
    },
    {
      name: 'Rajdhani Express',
      speed: '130 km/h',
      features: ['Overnight', 'Meals Included', 'AC Only'],
      description: 'Connects major cities to Delhi with speed and comfort, offering excellent dining options.',
      icon: Award,
    },
    {
      name: 'Shatabdi Express',
      speed: '120 km/h',
      features: ['Day Journey', 'Meals Included', 'Reserved Seating'],
      description: 'Premium intercity day travel train with breakfast and dinner options.',
      icon: Coffee,
    },
  ],
  superfast: [
    {
      name: 'Jan Shatabdi Express',
      speed: '110 km/h',
      features: ['Affordable', 'Fast', 'Non-AC Option'],
      description: 'Economical alternative to Shatabdi with both AC and non-AC coaches.',
      icon: Clock,
    },
    {
      name: 'Duronto Express',
      speed: '120 km/h',
      features: ['Non-stop', 'Overnight', 'Meals Included'],
      description: 'Non-stop service connecting metro cities with minimal technical stops.',
      icon: Zap,
    },
    {
      name: 'Sampark Kranti',
      speed: '110 km/h',
      features: ['Long Distance', 'AC & Non-AC'],
      description: 'Connects states to the national capital with good speed and comfort.',
      icon: Wifi,
    },
  ],
  express: [
    {
      name: 'Garib Rath Express',
      speed: '90 km/h',
      features: ['Budget AC', 'Long Distance', 'Economical'],
      description: 'Air-conditioned travel for budget conscious travelers on long routes.',
      icon: WifiOff,
    },
    {
      name: 'Humsafar Express',
      speed: '90 km/h',
      features: ['3-tier AC', 'Modern', 'Fully AC'],
      description: 'Fully 3-tier AC sleeper train with modern facilities for long journeys.',
      icon: Coffee,
    },
    {
      name: 'Intercity Express',
      speed: '85 km/h',
      features: ['Day Journey', 'Daily Service', 'Commuter Friendly'],
      description: 'Daily service train connecting nearby cities, ideal for day trips.',
      icon: Clock,
    },
  ],
};

const TrainCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Train Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from a variety of train types to suit your travel needs, from premium high-speed trains to economical options.
          </p>
        </div>

        <Tabs defaultValue="premium" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="premium">Premium</TabsTrigger>
              <TabsTrigger value="superfast">Superfast</TabsTrigger>
              <TabsTrigger value="express">Express</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(trainCategories).map(([category, trains]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trains.map((train, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{train.name}</h3>
                          <p className="text-gray-500 text-sm">Max Speed: {train.speed}</p>
                        </div>
                        <div className="bg-railway-lightBlue p-2 rounded-full">
                          <train.icon className="h-5 w-5 text-railway-blue" />
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm">{train.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {train.features.map((feature, i) => (
                          <Badge key={i} variant="outline" className="bg-gray-50">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TrainCategories;
