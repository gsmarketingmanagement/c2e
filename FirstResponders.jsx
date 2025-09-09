import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Radio, 
  Zap, 
  Clock, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Users,
  Siren,
  ArrowRight
} from 'lucide-react'

const FirstResponders = () => {
  const operationSteps = [
    {
      step: "1",
      title: "Select Activation Channel",
      description: "Select one of the listed activation channels on your radio.",
      icon: <Radio className="h-6 w-6 text-yellow-400" />
    },
    {
      step: "2", 
      title: "Position Within Range",
      description: "Position yourself within 50 feet and in visual contact with the Click2Enter lights.",
      icon: <Zap className="h-6 w-6 text-yellow-400" />
    },
    {
      step: "3",
      title: "Execute Single Click Process",
      description: "DEPRESS and KEEP HOLDING your microphone button until the RED LED turns OFF, then IMMEDIATELY RELEASE.",
      icon: <Clock className="h-6 w-6 text-yellow-400" />
    },
    {
      step: "4",
      title: "Access Granted",
      description: "The RED LED blinks rapidly and the gate or door opens.",
      icon: <CheckCircle className="h-6 w-6 text-yellow-400" />
    }
  ]

  const ledIndicators = [
    {
      color: "GREEN",
      meaning: "Click2Enter is powered on and ready",
      bgColor: "bg-green-500"
    },
    {
      color: "RED",
      meaning: "Programmed frequency is processing",
      bgColor: "bg-red-500"
    }
  ]

  const radioCompatibility = [
    "Analog radio transmitters with private line sub-audible transmissions",
    "Digital radio transmitters with private line codes",
    "Carrier-only operation for digital radio systems",
    "Talk-around carriers (car to car) of trunk line radio systems",
    "On-trunk mode for trunked radio systems (single pulse mode)",
    "All public safety radio bands",
    "High power mobile transmitters",
    "Lower power handheld portable transmitters"
  ]

  const safetyFeatures = [
    {
      title: "Mutual Aid Compatible",
      description: "Supports multiple agencies and frequencies for true mutual aid capability",
      icon: <Users className="h-5 w-5 text-yellow-400" />
    },
    {
      title: "Activation Logging",
      description: "Stores time/day/agency memory recall for security and accountability",
      icon: <Shield className="h-5 w-5 text-yellow-400" />
    },
    {
      title: "Enhanced Security",
      description: "Dual verification: carrier frequency + sub-audible private line code",
      icon: <AlertTriangle className="h-5 w-5 text-yellow-400" />
    },
    {
      title: "Officer Safety",
      description: "Operates from vehicle or on foot, bicycle, or horseback",
      icon: <Siren className="h-5 w-5 text-yellow-400" />
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Siren className="h-12 w-12 text-yellow-400" />
            <div className="h-12 w-1 bg-yellow-400"></div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                For First Responders
              </h1>
              <p className="text-xl text-yellow-400 font-semibold">
                Rapid Access When Every Second Counts
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Click2Enter provides public safety agencies with quick, safe, reliable, and stealthy access 
            to gates, bollards, doors, and security control mechanisms using your existing radio equipment.
          </p>
        </div>

        {/* How to Operate */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            How to Open a Door or Gate Using Your Public Safety Radio
          </h2>
          
          <div className="bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl p-8 border border-yellow-400/30 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Single "Click and Hold" Pulse Operation for All Emergency Personnel
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {operationSteps.map((step, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:bg-white/20 transition-all duration-300">
                  <CardHeader className="text-center pb-3">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex justify-center mb-3">
                      {step.icon}
                    </div>
                    <p className="text-gray-200 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* LED Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
              <CardHeader>
                <CardTitle className="text-white text-xl">LED Status Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ledIndicators.map((led, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${led.bgColor} animate-pulse`}></div>
                      <div>
                        <span className="text-white font-semibold">{led.color} LED:</span>
                        <span className="text-gray-200 ml-2">{led.meaning}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
              <CardHeader>
                <CardTitle className="text-white text-xl">Activation Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    &lt; 4 seconds
                  </div>
                  <p className="text-gray-200">
                    Complete activation sequence from button press to gate opening
                  </p>
                  <div className="mt-4 p-4 bg-green-500/20 rounded-lg border border-green-400/50">
                    <p className="text-white text-sm">
                      ✅ Works from moving vehicles, on foot, bicycle, or horseback
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Radio Compatibility */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Radio System Compatibility
          </h2>
          
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center">
                <Radio className="h-6 w-6 text-yellow-400 mr-3" />
                Compatible Radio Systems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {radioCompatibility.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-500/20 rounded-lg border border-blue-400/50">
                <p className="text-white text-sm">
                  <strong>Note:</strong> Click2Enter uses technology inherent in most radio broadcast equipment, 
                  adapted to work as a control mechanism with enhanced security features.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Safety Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Safety & Security Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-center">
                    {feature.icon}
                    <span className="ml-3">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Notice */}
        <section>
          <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-400/50">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
                Important Legal Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <p>
                  <strong>FCC Regulations:</strong> Public safety agencies are issued restricted radio frequencies 
                  by the FCC for their use only. Possession of transmitting devices for non-authorized personnel 
                  is tightly controlled and transmitting on these frequencies is against Federal and State law.
                </p>
                <p>
                  <strong>Legal Compliance:</strong> The public's right to receive emergency agency communications 
                  is not restricted, making it legal to possess emergency response scanning devices. Click2Enter 
                  operates within these legal parameters.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default FirstResponders

