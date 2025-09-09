import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Home, 
  Shield, 
  Clock, 
  Heart,
  CheckCircle,
  AlertTriangle,
  Users,
  Lock,
  Unlock,
  Siren,
  DollarSign,
  Star,
  ArrowRight
} from 'lucide-react'

const EndUsers = () => {
  const benefits = [
    {
      title: "Saves Lives Faster",
      description: "Enables emergency services to gain immediate access, reducing critical response times when every second counts.",
      icon: <Heart className="h-8 w-8 text-red-400" />,
      highlight: true
    },
    {
      title: "Enhanced Property Security",
      description: "Maintains secure access control while ensuring emergency services can respond quickly when needed.",
      icon: <Shield className="h-8 w-8 text-yellow-400" />
    },
    {
      title: "Reduced Property Damage",
      description: "Eliminates the need for emergency services to force entry, preventing costly damage to gates and doors.",
      icon: <Home className="h-8 w-8 text-yellow-400" />
    },
    {
      title: "Peace of Mind",
      description: "Know that emergency services have reliable, secure access to your property when lives are on the line.",
      icon: <CheckCircle className="h-8 w-8 text-yellow-400" />
    }
  ]

  const whyImportant = [
    {
      scenario: "Medical Emergency",
      description: "Paramedics can reach patients faster without waiting for gate codes or keys",
      time: "Saves 2-5 minutes",
      impact: "Critical for cardiac arrest, stroke, and trauma cases"
    },
    {
      scenario: "Fire Emergency", 
      description: "Fire trucks gain immediate access to fight fires and perform rescues",
      time: "Saves 1-3 minutes",
      impact: "Prevents fire spread and saves lives and property"
    },
    {
      scenario: "Police Response",
      description: "Officers can respond to security threats and emergencies without delay",
      time: "Saves 1-4 minutes", 
      impact: "Critical for active threats and emergency situations"
    }
  ]

  const features = [
    "Swift and reliable radio-controlled access",
    "Seamless integration with existing security systems",
    "Automatic notifications when emergency services activate",
    "No impact on normal security operations",
    "Compatible with all types of gates and doors",
    "Weather-resistant and reliable operation",
    "Secure dual-verification system",
    "Supports multiple emergency agencies"
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Home className="h-12 w-12 text-yellow-400" />
            <div className="h-12 w-1 bg-yellow-400"></div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                For Property Owners
              </h1>
              <p className="text-xl text-yellow-400 font-semibold">
                Enhanced Security and Peace of Mind
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Click2Enter provides your property with the ultimate emergency access solution, 
            ensuring first responders can reach you quickly while maintaining your security.
          </p>
        </div>

        {/* What Click2Enter Does */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-yellow-400/10 to-transparent border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-white text-2xl text-center">
                What Click2Enter Does for Your Property
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-4">
                    Revolutionary Emergency Access
                  </h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    Click2Enter allows public safety and authorized users swift, radio-controlled access 
                    to your property. It eliminates the need for keys, codes, or remote controls for 
                    emergency access, while maintaining your property's security for normal operations.
                  </p>
                  
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/10 rounded-2xl p-8 border border-yellow-400/30">
                    <div className="flex justify-center items-center space-x-4 mb-6">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-2">
                          <Siren className="h-8 w-8 text-white" />
                        </div>
                        <span className="text-sm text-white">Emergency</span>
                      </div>
                      <ArrowRight className="h-8 w-8 text-yellow-400" />
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2 animate-pulse">
                          <Lock className="h-8 w-8 text-white" />
                        </div>
                        <span className="text-sm text-white">Click2Enter</span>
                      </div>
                      <ArrowRight className="h-8 w-8 text-yellow-400" />
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2">
                          <Unlock className="h-8 w-8 text-white" />
                        </div>
                        <span className="text-sm text-white">Instant Access</span>
                      </div>
                    </div>
                    <p className="text-white font-semibold">
                      Radio → Click2Enter → Immediate Access
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why It's Important */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Click2Enter Can Save Lives
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {whyImportant.map((scenario, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{scenario.scenario}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-sm mb-4">{scenario.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-400 font-semibold text-sm">Time Saved:</span>
                      <span className="text-white text-sm">{scenario.time}</span>
                    </div>
                    <div className="p-3 bg-red-500/20 rounded-lg border border-red-400/30">
                      <p className="text-white text-xs">{scenario.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-400/50">
            <CardContent className="p-8 text-center">
              <Heart className="h-16 w-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Every Second Counts in an Emergency
              </h3>
              <p className="text-gray-200 text-lg mb-6 max-w-3xl mx-auto">
                In cardiac arrest, brain damage begins after just 4-6 minutes without oxygen. 
                In fires, smoke and heat can become deadly within minutes. Click2Enter eliminates 
                precious time wasted on gaining access, potentially saving lives.
              </p>
              <div className="bg-white/10 rounded-lg p-4 inline-block">
                <p className="text-yellow-400 font-bold text-xl">
                  🚨 Click2Enter: When Every Second Matters 🚨
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Benefits for Property Owners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`backdrop-blur-sm hover:bg-white/20 transition-all duration-300 ${
                  benefit.highlight 
                    ? 'bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-400/50' 
                    : 'bg-white/10 border-yellow-400/30'
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center">
                    {benefit.icon}
                    <span className="ml-3">{benefit.title}</span>
                    {benefit.highlight && <Star className="h-5 w-5 text-yellow-400 ml-2" />}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Best Investment */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-yellow-400/10 to-transparent border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-white text-2xl text-center flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-yellow-400 mr-3" />
                The Best Thing Money Can Buy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-4">
                    Unparalleled Value for Emergency Access
                  </h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    Click2Enter provides unmatched security and efficiency for emergency access. 
                    When you consider the potential cost of delayed emergency response—property damage, 
                    medical complications, or worse—Click2Enter is truly the best investment you can make.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-yellow-400" />
                      <span className="text-white font-semibold">Innovative and cutting-edge technology</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-yellow-400" />
                      <span className="text-white font-semibold">Reliable and unique access solution</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-yellow-400" />
                      <span className="text-white font-semibold">Safe, fast, and easy to use</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-yellow-400" />
                      <span className="text-white font-semibold">Revolutionizing emergency access control</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/10 rounded-2xl p-8 border border-yellow-400/30">
                    <Star className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                    <h4 className="text-white text-xl font-bold mb-4">
                      Industry Leading Solution
                    </h4>
                    <p className="text-gray-200 mb-6">
                      Click2Enter sets a new standard for emergency access control that will 
                      benefit your property for many years to come.
                    </p>
                    <div className="bg-yellow-400/20 rounded-lg p-4 border border-yellow-400/50">
                      <p className="text-yellow-400 font-bold">
                        "The peace of mind knowing emergency services can reach us quickly is priceless."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section>
          <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/50">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Enhance Your Property's Emergency Access?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Join thousands of property owners who have chosen Click2Enter for reliable, 
                secure emergency access. Protect your investment and potentially save lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold">
                  Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900">
                  Learn More About Installation
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default EndUsers

