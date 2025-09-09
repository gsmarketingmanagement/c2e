import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  AlertTriangle,
  Shield,
  Radio,
  Clock,
  Database,
  Users,
  Settings,
  Lock
} from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState([0]) // First item open by default

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqData = [
    {
      question: "What is Click2Enter?",
      answer: "Click2Enter is a revolutionary radio-controlled access system that allows public safety and authorized users to open gates, doors, and other security mechanisms using their existing radio transceivers. It eliminates the need for keys, access codes, or remote controls for emergency access.",
      icon: <Radio className="h-5 w-5 text-yellow-400" />,
      category: "General"
    },
    {
      question: "Why shouldn't I open the CSV data file?",
      answer: "Opening the CSV data file can corrupt its format and structure, making it unusable for programming the Click2Enter unit. CSV files contain critical frequency and configuration data in a specific format. When opened in spreadsheet applications or text editors, the file format can be altered, resulting in non-functional installations and costly service calls. Always use the read-only PDF files (BLUE buttons) to view frequency information instead.",
      icon: <AlertTriangle className="h-5 w-5 text-red-400" />,
      category: "Critical Warning",
      highlight: true
    },
    {
      question: "How does Click2Enter work?",
      answer: "Click2Enter uses modified scanner/radio technology combined with control systems. When an authorized user transmits a short pulse from their programmed radio on a designated frequency, the Click2Enter unit recognizes the signal through dual verification (carrier frequency + sub-audible private line code) and activates the access control device. The entire process takes less than 4 seconds.",
      icon: <Settings className="h-5 w-5 text-yellow-400" />,
      category: "Technical"
    },
    {
      question: "Is Click2Enter secure?",
      answer: "Yes, Click2Enter uses enhanced security with dual verification requirements: (1) verification of the RCC assigned carrier frequency and (2) verification of the agency assigned sub-audible communications (private line code). This means two separate verifications are needed for activation. The system also logs all activations with time/day/agency information for security tracking.",
      icon: <Shield className="h-5 w-5 text-yellow-400" />,
      category: "Security"
    },
    {
      question: "What types of radios are compatible with Click2Enter?",
      answer: "Click2Enter is compatible with analog and digital radio transmitters using private line sub-audible transmissions, carrier-only operation for digital systems, talk-around carriers of trunk line systems, on-trunk mode for trunked radio systems (single pulse mode), all public safety radio bands, and both high power mobile transmitters and lower power handheld portable transmitters.",
      icon: <Radio className="h-5 w-5 text-yellow-400" />,
      category: "Compatibility"
    },
    {
      question: "How fast does Click2Enter work?",
      answer: "The entire activation sequence takes less than 4 seconds from button press to gate/door opening. This rapid response time is critical for emergency situations where every second counts. The operator can be on foot, bicycle, horseback, or in a moving vehicle when activating the system.",
      icon: <Clock className="h-5 w-5 text-yellow-400" />,
      category: "Performance"
    },
    {
      question: "Can multiple agencies use the same Click2Enter unit?",
      answer: "Yes, Click2Enter supports true mutual aid capability. The system has a 100 channel capacity and can be programmed with multiple agency frequencies, allowing any public safety agency or authorized user access as long as their frequencies are programmed into the device's frequency bank. This addresses mutual aid problems that exist with other emergency access control products.",
      icon: <Users className="h-5 w-5 text-yellow-400" />,
      category: "Multi-Agency"
    },
    {
      question: "What is the operating range of Click2Enter?",
      answer: "Click2Enter has a variable activation range that can be programmed based on installation requirements. Users must be within 50 feet and in visual contact with the Click2Enter unit's LED indicators. The range can be adjusted during programming to suit specific site needs and security requirements.",
      icon: <Settings className="h-5 w-5 text-yellow-400" />,
      category: "Technical"
    },
    {
      question: "Is it legal for public safety agencies to use Click2Enter?",
      answer: "Yes, Click2Enter operates within legal parameters. Public safety agencies are issued restricted radio frequencies by the FCC for their use only. While possession of transmitting devices for non-authorized personnel is illegal, the public's right to receive emergency agency communications is not restricted, making it legal to possess emergency response scanning devices. Click2Enter combines this legal scanner technology with control mechanisms.",
      icon: <Lock className="h-5 w-5 text-yellow-400" />,
      category: "Legal"
    },
    {
      question: "How is Click2Enter programmed?",
      answer: "Click2Enter is programmed using free software available from the company website (Support/Downloads). The unit is field programmable using a laptop or net-book computer with terminal emulation software, connected via USB standard to mini jack. Each unit has proprietary programming software built in, and users can set a PIN for security of programmed frequencies.",
      icon: <Database className="h-5 w-5 text-yellow-400" />,
      category: "Programming"
    },
    {
      question: "What are the power requirements for Click2Enter?",
      answer: "Click2Enter uses regulated 12V to 24V DC @ 500mA power supplies. The unit is enclosed in a NEMA type 4 box with security screws and includes lightning surge current protection. Retrofit kits are available for operation below 0°F, and the unit features a reflective logo for night identification.",
      icon: <Settings className="h-5 w-5 text-yellow-400" />,
      category: "Installation"
    },
    {
      question: "Why is Click2Enter important for saving lives?",
      answer: "Click2Enter can save lives by eliminating critical delays in emergency response. In medical emergencies, brain damage begins after 4-6 minutes without oxygen. In fires, conditions become deadly within minutes. By providing immediate access without waiting for keys or codes, Click2Enter can save 1-5 minutes of response time, which can be the difference between life and death in emergency situations.",
      icon: <AlertTriangle className="h-5 w-5 text-red-400" />,
      category: "Life Safety",
      highlight: true
    }
  ]

  const categories = [...new Set(faqData.map(item => item.category))]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <HelpCircle className="h-12 w-12 text-yellow-400" />
            <div className="h-12 w-1 bg-yellow-400"></div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-yellow-400 font-semibold">
                Most Relevant Questions First
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about Click2Enter emergency access control systems.
          </p>
        </div>

        {/* Critical Warning Callout */}
        <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-400/50 mb-12">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-8 w-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg mb-2">
                  ⚠️ CRITICAL: CSV Data File Warning
                </h3>
                <p className="text-gray-200">
                  <strong>Do NOT open CSV data files!</strong> Opening these files can permanently corrupt them, 
                  making your Click2Enter unit non-functional. Always use the read-only PDF files to view 
                  frequency information. This is the most important thing to remember when working with Click2Enter.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-300 ${
                item.highlight 
                  ? 'bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-400/30' 
                  : 'bg-white/10 backdrop-blur-sm border-yellow-400/30'
              } ${openItems.includes(index) ? 'ring-2 ring-yellow-400/50' : ''}`}
            >
              <CardHeader 
                className="cursor-pointer hover:bg-white/5 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <CardTitle className="text-white text-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span>{item.question}</span>
                    {item.highlight && (
                      <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full border border-red-400/30">
                        CRITICAL
                      </span>
                    )}
                  </div>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-yellow-400" />
                  )}
                </CardTitle>
              </CardHeader>
              
              {openItems.includes(index) && (
                <CardContent className="pt-0">
                  <div className="border-t border-yellow-400/20 pt-4">
                    <p className="text-gray-200 leading-relaxed">{item.answer}</p>
                    <div className="mt-3">
                      <span className="inline-block bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded-full border border-yellow-400/30">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-200 mb-6">
                Our technical support team has 20 years of experience with Click2Enter systems 
                and is always available to help with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold">
                  Contact Support
                </Button>
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900">
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Expand All / Collapse All */}
        <div className="mt-8 text-center">
          <div className="space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10"
              onClick={() => setOpenItems(faqData.map((_, index) => index))}
            >
              Expand All
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10"
              onClick={() => setOpenItems([])}
            >
              Collapse All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ

