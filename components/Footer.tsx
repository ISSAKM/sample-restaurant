import React from 'react';
import { ChefHat, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-chef-black text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <ChefHat className="text-chef-gold w-8 h-8" />
              <span className="text-2xl font-serif font-bold">Savor<span className="text-chef-gold">&</span>Stories</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Celebrating the art of cooking through storytelling. Every dish has a history, every ingredient a purpose.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-chef-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-chef-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-chef-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-chef-gold font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-chef-gold shrink-0" />
                <span>123 Culinary Ave,<br />Flavor District, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-chef-gold shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-chef-gold shrink-0" />
                <span>reservations@savorstories.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-chef-gold font-bold uppercase tracking-widest text-sm mb-6">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span>5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span>5:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>4:00 PM - 9:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-chef-gold font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for seasonal updates and exclusive chef's table invites.</p>
            <div className="flex flex-col gap-2">
                <input type="email" placeholder="Your email address" className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-sm focus:border-chef-gold outline-none text-sm" />
                <button className="bg-chef-gold text-chef-black font-bold uppercase tracking-wider text-xs px-4 py-2 rounded-sm hover:bg-yellow-600 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Savor & Stories. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;