
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Train, AlignJustify, Search, Home, Calendar, HelpCircle, BellRing } from 'lucide-react';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Train className="h-8 w-8 text-railway-blue mr-2" strokeWidth={2} />
            <span className="text-xl font-bold text-railway-blue">IRide Express</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`font-medium transition-colors flex items-center gap-1 ${isScrolled ? 'text-gray-700 hover:text-railway-blue' : 'text-white hover:text-railway-yellow bg-black/30 px-3 py-1 rounded-md'}`}>
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/trains" className={`font-medium transition-colors flex items-center gap-1 ${isScrolled ? 'text-gray-700 hover:text-railway-blue' : 'text-white hover:text-railway-yellow bg-black/30 px-3 py-1 rounded-md'}`}>
            <Train size={18} />
            <span>Trains</span>
          </Link>
          <Link to="/bookings" className={`font-medium transition-colors flex items-center gap-1 ${isScrolled ? 'text-gray-700 hover:text-railway-blue' : 'text-white hover:text-railway-yellow bg-black/30 px-3 py-1 rounded-md'}`}>
            <Calendar size={18} />
            <span>My Bookings</span>
          </Link>
          <Link to="/help" className={`font-medium transition-colors flex items-center gap-1 ${isScrolled ? 'text-gray-700 hover:text-railway-blue' : 'text-white hover:text-railway-yellow bg-black/30 px-3 py-1 rounded-md'}`}>
            <HelpCircle size={18} />
            <span>Help</span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <BellRing className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-railway-red rounded-full"></span>
          </Button>
          <Button variant="outline" className="border-railway-blue text-railway-blue hover:bg-railway-lightBlue">
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Button className="bg-railway-blue hover:bg-railway-darkBlue text-white">
            Register
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <AlignJustify className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <Train className="h-6 w-6 text-railway-blue mr-2" />
                  <span className="font-bold text-railway-blue text-lg">IRide Express</span>
                </div>
              </div>
              <nav className="flex flex-col py-6 space-y-4">
                <Link to="/" className="flex items-center px-2 py-2 rounded-md hover:bg-railway-lightBlue text-gray-700">
                  <Home className="h-5 w-5 mr-3 text-railway-blue" />
                  <span>Home</span>
                </Link>
                <Link to="/trains" className="flex items-center px-2 py-2 rounded-md hover:bg-railway-lightBlue text-gray-700">
                  <Train className="h-5 w-5 mr-3 text-railway-blue" />
                  <span>Trains</span>
                </Link>
                <Link to="/bookings" className="flex items-center px-2 py-2 rounded-md hover:bg-railway-lightBlue text-gray-700">
                  <Calendar className="h-5 w-5 mr-3 text-railway-blue" />
                  <span>My Bookings</span>
                </Link>
                <Link to="/help" className="flex items-center px-2 py-2 rounded-md hover:bg-railway-lightBlue text-gray-700">
                  <HelpCircle className="h-5 w-5 mr-3 text-railway-blue" />
                  <span>Help</span>
                </Link>
              </nav>
              <div className="mt-auto border-t pt-4 flex flex-col space-y-3">
                <Button variant="outline" className="border-railway-blue text-railway-blue hover:bg-railway-lightBlue w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button className="bg-railway-blue hover:bg-railway-darkBlue text-white w-full">
                  Register
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
