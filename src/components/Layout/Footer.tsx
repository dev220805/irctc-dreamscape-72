
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Train, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Train className="h-8 w-8 text-railway-yellow mr-2" />
              <span className="text-xl font-bold">IRide Express</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for hassle-free train ticket bookings across India. Experience seamless travel planning with IRide Express.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-railway-blue p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-railway-blue p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-railway-blue p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-railway-blue p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-400 hover:text-white transition-colors">Refund Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Travel Info</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/train-routes" className="text-gray-400 hover:text-white transition-colors">Train Routes</Link>
              </li>
              <li>
                <Link to="/timetable" className="text-gray-400 hover:text-white transition-colors">Train Timetable</Link>
              </li>
              <li>
                <Link to="/pnr" className="text-gray-400 hover:text-white transition-colors">PNR Status</Link>
              </li>
              <li>
                <Link to="/seat-availability" className="text-gray-400 hover:text-white transition-colors">Seat Availability</Link>
              </li>
              <li>
                <Link to="/train-status" className="text-gray-400 hover:text-white transition-colors">Train Running Status</Link>
              </li>
              <li>
                <Link to="/cancel-ticket" className="text-gray-400 hover:text-white transition-colors">Cancel Ticket</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-railway-yellow mr-3 mt-1" />
                <span className="text-gray-400">123 Railway Plaza, Station Road, New Delhi, 110001, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-railway-yellow mr-3" />
                <span className="text-gray-400">+91 123-456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-railway-yellow mr-3" />
                <span className="text-gray-400">support@irideexpress.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Subscribe to Newsletter</h4>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="ml-2 bg-railway-blue hover:bg-railway-darkBlue">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} IRide Express. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
