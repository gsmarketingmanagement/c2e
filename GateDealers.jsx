import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Wrench, 
  Settings, 
  AlertTriangle,
  CheckCircle,
  Download,
  FileText,
  Shield,
  Zap,
  Thermometer,
  Lock,
  MapPin,
  Database
} from 'lucide-react'

const GateDealers = () => {
  const installationSpecs = [
    {
      title: "Power Requirements",
      specs: [
        "Regulated 12V to 24V DC @ 500mA power supplies",
        "Lightning surge current protection kit available",
        "Retrofit kits available for operation below 0°F"
      ],
      icon: <Zap className="h-6 w-6 text-yellow-400" />
    },
    {
      title: "Physical Installation",
      specs: [
        "Unit enclosed in NEMA type 4 box with security screws",
        "Must be positioned for visible logo and Red/Green lights",
        "Reflective logo for night identification",
        "Within 50 feet operational range for users"
      ],
      icon: <Shield className="h-6 w-6 text-yellow-400" />
    },
    {
      title: "Connectivity",
      specs: [
        "Relay or dry contact ready",
        "Extra set of relay contacts for multiple devices",
        "Independent relay control for roll-up doors",
        "USB standard to mini jack for programming"
      ],
      icon: <Settings className="h-6 w-6 text-yellow-400" />
    }
  ]

  const programmingFeatures = [
    "100 channel capacity (primary operational bank)",
    "Variable activation range via programming",
    "User-selected PIN for security of programmed frequencies",
    "Field programmable using laptop or net-book computer",
    "Auto detect and load of private line codes",
    "CTCSS, PL/DPL private line (PL) programming capability",
    "Enhanced user-programmable latch open feature",
    "Latch back and hold feature for extra safety"
  ]

  const csvWarningPoints = [
    "CSV data files contain critical frequency and configuration data",
    "Opening CSV files can corrupt the file format and structure",
    "Corrupted files cannot be properly uploaded to Click2Enter units",
    "This can result in non-functional installations and service calls",
    "Always use the read-only PDF files (BLUE buttons) to view frequency information",
    "Only use CSV files directly for programming - never open them manually"
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Wrench className="h-12 w-12 text-yellow-400" />
            <div className="h-12 w-1 bg-yellow-400"></div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                For Gate Dealers & Installers
              </h1>
              <p className="text-xl text-yellow-400 font-semibold">
                Streamlined Installation and Support
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Professional installation guidance, programming instructions, and technical support 
            for Click2Enter-I.V4 emergency access control systems.
          </p>
        </div>

        {/* Critical CSV Warning */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-400/50">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <AlertTriangle className="h-8 w-8 text-red-400 mr-3" />
                CRITICAL: Do NOT Open CSV Data Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-500/30 border border-red-400/50 rounded-lg p-4">
                  <p className="text-white font-bold text-lg mb-2">
                    ⚠️ WARNING: Opening CSV data files can permanently corrupt them!
                  </p>
                  <p className="text-gray-200">
                    CSV data files contain critical programming information for Click2Enter units. 
                    Opening these files in spreadsheet applications or text editors can alter the 
                    file format, making them unusable for programming.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Database className="h-5 w-5 text-red-400 mr-2" />
                      Why This Matters:
                    </h4>
                    <ul className="space-y-2">
                      {csvWarningPoints.map((point, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-200 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                      Proper File Handling:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-red-500/20 rounded-lg border border-red-400/30">
                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                        <span className="text-white text-sm">RED buttons = CSV data files (DO NOT OPEN)</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-blue-500/20 rounded-lg border border-blue-400/30">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="text-white text-sm">BLUE buttons = PDF files (safe to view)</span>
                      </div>
                      <p className="text-gray-200 text-sm mt-3">
                        Use BLUE PDF files to review frequency information before programming.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Installation Specifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Installation Specifications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {installationSpecs.map((spec, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-center">
                    {spec.icon}
                    <span className="ml-3">{spec.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {spec.specs.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Programming & Configuration */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Programming & Configuration
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Settings className="h-6 w-6 text-yellow-400 mr-3" />
                  Programming Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {programmingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Download className="h-6 w-6 text-yellow-400 mr-3" />
                  Software & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-400/50">
                    <h4 className="text-white font-semibold mb-2">Free Programming Software</h4>
                    <p className="text-gray-200 text-sm mb-3">
                      Available from company website (Support/Downloads section)
                    </p>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download Software
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Programming Methods:</h4>
                    <ul className="space-y-1 text-gray-200 text-sm">
                      <li>• Proprietary programming software built into each unit</li>
                      <li>• Field programmable via laptop/net-book computer</li>
                      <li>• Terminal emulation software compatible</li>
                      <li>• USB standard to mini jack connection</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Location Registration */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-yellow-400/10 to-transparent border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <MapPin className="h-8 w-8 text-yellow-400 mr-3" />
                Installation Registration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-4">
                    Register Your Click2Enter Installations
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Whether you're installing a new Click2Enter unit or have an existing one in the field, 
                    we need to know its location for our records and to provide better field support.
                  </p>
                  <ul className="space-y-2 text-gray-200 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span>Improved technical support response</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span>Better field service coordination</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span>Installation tracking and maintenance records</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/10 rounded-lg p-6 border border-yellow-400/30">
                    <FileText className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">Registration Form</h4>
                    <p className="text-gray-200 text-sm mb-4">
                      Fill out our installation form for better support and service.
                    </p>
                    <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold">
                      <FileText className="h-4 w-4 mr-2" />
                      Register Installation
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Support */}
        <section>
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Wrench className="h-8 w-8 text-yellow-400 mr-3" />
                Technical Support & Troubleshooting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-4">
                    Shrokman Technologies Support
                  </h3>
                  <p className="text-gray-200 mb-4">
                    With 20 years of experience with Click2Enter systems, we provide detailed 
                    technical support and troubleshooting for installations in the field.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Support Services:</h4>
                    <ul className="space-y-1 text-gray-200 text-sm">
                      <li>• Field diagnostics and troubleshooting</li>
                      <li>• Loop detector integration support</li>
                      <li>• Security device compatibility assistance</li>
                      <li>• Installation guidance and best practices</li>
                      <li>• Programming and configuration support</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white text-lg font-semibold mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-400/30">
                      <p className="text-white text-sm">
                        <strong>Address:</strong><br />
                        127 Sanders Ferry Road<br />
                        Hendersonville, TN 37075
                      </p>
                    </div>
                    <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-400/30">
                      <p className="text-white text-sm">
                        <strong>Hours:</strong><br />
                        Monday–Friday: 9:00AM–5:00PM<br />
                        Saturday & Sunday: 11:00AM–3:00PM
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm mt-4">
                    We're always available to help with Click2Enter issues and diagnostics.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default GateDealers

