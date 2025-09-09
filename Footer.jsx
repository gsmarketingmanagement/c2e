import React from 'react'
import { Radio, Zap, MapPin, Clock, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Radio className="h-8 w-8 text-yellow-400" />
                <Zap className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Click2Enter</h3>
                <p className="text-sm text-yellow-400">Your Radio is the Key</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Revolutionizing emergency access control for public safety and authorized users. 
              Quick, safe, reliable, and stealthy access using your existing radio transceiver.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <div className="text-sm">
                  <p>127 Sanders Ferry Road</p>
                  <p>Hendersonville, TN 37075</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <div className="text-sm">
                  <p>Mon-Fri: 9:00AM–5:00PM</p>
                  <p>Sat-Sun: 11:00AM–3:00PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Support</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">
                Shrokman Technologies has been with Click2Enter for 20 years, 
                offering detailed technical support and a pain-free experience.
              </p>
              <p className="text-gray-300 mt-4">
                Need help with diagnostics or installation? We're always available to help.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-400/20 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 by Click2Enter All Rights Reserved. | Patented in the United States and Canada
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

