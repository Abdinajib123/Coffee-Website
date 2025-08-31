import { Coffee, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <footer className="bg-coffee-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-coffee-400" />
              <span className="text-2xl font-bold">CasriCafe</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience the perfect blend of tradition and innovation in every cup. 
              We source the finest beans and craft exceptional coffee experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-coffee-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-coffee-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-coffee-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="text-gray-300 hover:text-coffee-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="text-gray-300 hover:text-coffee-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('menu')}
                  className="text-gray-300 hover:text-coffee-400 transition-colors"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-300 hover:text-coffee-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Coffee Catering</li>
              <li className="text-gray-300">Private Events</li>
              <li className="text-gray-300">Coffee Workshops</li>
              <li className="text-gray-300">Bean Subscription</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-coffee-400" />
                <span className="text-gray-300">123 Coffee Street, Casri City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-coffee-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-coffee-400" />
                <span className="text-gray-300">hello@casricafe.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 CasriCafe. All rights reserved. | Made with ☕ and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
