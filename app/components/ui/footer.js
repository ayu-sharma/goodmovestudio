import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'

// Footer data arrays
const footerLinks = [
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Contact Us", href: "#" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "YouTube", href: "#", icon: Youtube }
];

const Footer = () => {
  return (
    <footer className="text-white py-8 mt-auto">
      <div className="w-full mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <Image src="/images/logo.png" alt="Good Move Studio" width={180} height={50} />

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 text-sm">
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition-colors text-xl"
                  title={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
