
import React from 'react';
import { Shield, Clock, CreditCard, Smartphone, Globe, BookOpen } from 'lucide-react';

const features = [
  {
    title: 'Secure Payments',
    description: 'Multiple secure payment options including UPI, cards, and net banking.',
    icon: Shield,
    color: 'text-railway-blue',
    bgColor: 'bg-railway-lightBlue'
  },
  {
    title: 'Instant Bookings',
    description: 'Book your train tickets in seconds with our fast booking system.',
    icon: Clock,
    color: 'text-railway-red',
    bgColor: 'bg-red-100'
  },
  {
    title: 'Zero Payment Fees',
    description: 'No hidden charges or payment gateway fees on any transactions.',
    icon: CreditCard,
    color: 'text-railway-green',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Mobile Tickets',
    description: 'Get your tickets directly on your phone, no need for printouts.',
    icon: Smartphone,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'PNR Status',
    description: 'Check your train PNR status in real-time with live updates.',
    icon: Globe,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Travel Insurance',
    description: 'Optional travel insurance for complete peace of mind.',
    icon: BookOpen,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose IRide Express</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make train travel easier with these helpful features designed for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
