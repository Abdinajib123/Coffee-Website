import { useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Coffee className="h-8 w-8 text-coffee-600" />
            <span className="text-2xl font-bold text-coffee-800">CasriCafe</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "text-gray-700 hover:text-coffee-600 font-medium transition-colors duration-200",
                  activeSection === item.id && "text-coffee-600"
                )}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('menu')}
              className="btn-primary"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-coffee-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coffee-600 hover:bg-gray-50",
                    activeSection === item.id && "text-coffee-600 bg-coffee-50"
                  )}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('menu')}
                className="w-full mt-4 btn-primary"
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
