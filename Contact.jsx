import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Mail, 
  MapPin, 
  Clock, 
  Phone,
  Send,
  User,
  MessageSquare,
  Building,
  Wrench,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const inquiryTypes = [
    { value: 'general', label: 'General Information' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'installation', label: 'Installation Support' },
    { value: 'dealer', label: 'Become a Dealer' },
    { value: 'emergency', label: 'Emergency Service' },
    { value: 'other', label: 'Other' }
  ]

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-yellow-400" />,
      title: "Address",
      details: [
        "127 Sanders Ferry Road",
        "Hendersonville, TN 37075"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-400" />,
      title: "Business Hours",
      details: [
        "Monday–Friday: 9:00AM–5:00PM",
        "Saturday & Sunday: 11:00AM–3:00PM"
      ]
    },
    {
      icon: <Wrench className="h-6 w-6 text-yellow-400" />,
      title: "Technical Support",
      details: [
        "20 years of Click2Enter experience",
        "Field diagnostics and troubleshooting",
        "Installation guidance available"
      ]
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Mail className="h-12 w-12 text-yellow-400" />
            <div className="h-12 w-1 bg-yellow-400"></div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                Contact Us
              </h1>
              <p className="text-xl text-yellow-400 font-semibold">
                We're Here to Help
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Get in touch with our experienced team for technical support, installation guidance, 
            or any questions about Click2Enter emergency access control systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 text-yellow-400 mr-3" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-yellow-400/30 text-white placeholder-gray-400 focus:border-yellow-400"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-yellow-400/30 text-white placeholder-gray-400 focus:border-yellow-400"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-yellow-400/30 text-white placeholder-gray-400 focus:border-yellow-400"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/10 border-yellow-400/30 text-white placeholder-gray-400 focus:border-yellow-400"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Company/Organization
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white/10 border-yellow-400/30 text-white placeholder-gray-400 focus:border-yellow-400"
                      placeholder="Enter your company or organization"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-yellow-400/30 text-white rounded-md px-3 py-2 focus:border-yellow-400 focus:outline-none"
                    >
                      <option value="" className="bg-blue-900 text-white">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-blue-900 text-white">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white/10 border-yellow-400/30 text-white placeholder-gray-400 focus:border-yellow-400 resize-none"
                      placeholder="Please describe your inquiry or provide details about your Click2Enter needs..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold py-3"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {info.icon}
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-200 text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* About Shrokman Technologies */}
            <Card className="bg-gradient-to-br from-yellow-400/10 to-transparent border-yellow-400/30">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Building className="h-6 w-6 text-yellow-400 mr-3" />
                  About Shrokman Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  Shrokman Technologies has been with Click2Enter for the last 20 years! 
                  We are here to offer you the best pain-free experience for all your 
                  Click2Enter needs with detailed technical support.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-200 text-sm">20+ years of Click2Enter experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-200 text-sm">Comprehensive technical support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-200 text-sm">Field service and diagnostics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-200 text-sm">Installation and troubleshooting</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Support */}
            <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-400/50">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
                  Emergency Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Need immediate assistance with a Click2Enter unit that's not working? 
                  We understand that emergency access systems are critical for public safety.
                </p>
                <p className="text-white font-semibold">
                  Contact us immediately for emergency diagnostic support and field assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started with Click2Enter?
              </h2>
              <p className="text-gray-200 mb-6 max-w-3xl mx-auto">
                Whether you're a first responder looking to understand how Click2Enter works, 
                a gate dealer needing installation support, or a property owner interested in 
                enhancing your emergency access, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900">
                  Download Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact

