import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' }
];

const FooterSection = ({ title, children }) => (
  <div>
    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h4>
    {children}
  </div>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 
                 transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-bg-primary transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">SampurnBin</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Revolutionizing waste management through smart technology and community engagement.
            </p>
          </div>
          
          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/tracker">Waste Tracker</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </FooterSection>
          
          {/* Resources */}
          <FooterSection title="Resources">
            <ul className="space-y-2">
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/support">Support</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </ul>
          </FooterSection>
          
          {/* Social Links */}
          <FooterSection title="Connect With Us">
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 
                           dark:hover:text-green-500 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </FooterSection>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} SampurnBin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;