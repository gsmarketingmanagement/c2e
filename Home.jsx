import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Radio, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Siren,
  Lock,
  Unlock
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Radio className="h-8 w-8 text-yellow-400" />,
      title: "Uses Your Existing Radio",
      description: "No need for additional keys, codes, or remote controls. Your mobile or portable radio transceiver is the key."
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-400" />,
      title: "4-Second Activation",
      description: "Complete activation sequence takes less than four seconds, enabling rapid emergency response."
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-400" />,
      title: "Enhanced Security",
      description: "Dual verification system requires both carrier frequency and sub-audible private line code verification."
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-400" />,
      title: "Mutual Aid Compatible",
      description: "Supports multiple agencies and users, addressing true mutual aid capability for emergency services."
    }
  ]

  const benefits = [
    "Eliminates cumbersome keys and access codes",
    "Quick, safe, reliable, and stealthy access",
    "Enhances emergency response times",
    "Officer safety friendly",
    "Compatible with analog and digital radio systems",
    "Stores activation logs for security tracking"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Radio className="h-12 w-12 text-yellow-400" />
                  <Zap className="h-6 w-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <div className="h-12 w-1 bg-yellow-400"></div>
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                    Click2Enter
                  </h1>
                  <p className="text-xl text-yellow-400 font-semibold">
                    Your Radio is the Key
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Revolutionizing Emergency Access for Public Safety and Authorized Users
              </h2>
              
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Click2Enter eliminates cumbersome keys, access control codes, and remote control actuators. 
                Every emergency response vehicle and responder carries the key—their mobile or portable radio transceiver. 
                Just a simple 'click' of the radio transmitter button opens gates, parking arms, doors, and commercial roll-up doors.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold">
                  <Link to="/first-responders">
                    For First Responders <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900">
                  <Link to="/end-users">
                    For Property Owners
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/20 to-transparent rounded-3xl p-8 backdrop-blur-sm border border-yellow-400/30">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">It's as Easy as...</h3>
                  <div className="text-6xl font-bold text-yellow-400 mb-2">Click</div>
                  <div className="text-6xl font-bold text-yellow-400 mb-2">Click</div>
                  <div className="text-xl text-white">...and you're in!</div>
                </div>
                
                <div className="flex justify-center items-center space-x-4 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                      <Radio className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm text-white">Your Radio</span>
                  </div>
                  <ArrowRight className="h-6 w-6 text-yellow-400" />
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-2 animate-pulse">
                      <Siren className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm text-white">Click2Enter</span>
                  </div>
                  <ArrowRight className="h-6 w-6 text-yellow-400" />
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                      <Unlock className="h-6 w-6 text-blue-900" />
                    </div>
                    <span className="text-sm text-white">Access Granted</span>
                  </div>
                </div>
                
                <p className="text-center text-gray-200 text-sm">
                  Access Control Using Your Radio Transceiver<br />
                  For Public Safety & Authorized Users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Click2Enter is the Best Thing Money Can Buy
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Innovative, cutting-edge, reliable, unique, safe, fast, and easy to use. 
              Click2Enter is revolutionizing the emergency access control industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Key Benefits for Emergency Services
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-400/20 to-transparent rounded-2xl p-8 border border-yellow-400/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                How Important is Click2Enter?
              </h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Click2Enter can save lives faster by providing immediate access to emergency services. 
                When every second counts, having reliable, instant access to gated communities, 
                commercial properties, and secured facilities can mean the difference between life and death.
              </p>
              <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-4">
                <p className="text-white font-semibold text-center">
                  🚨 Emergency Response Time Matters 🚨<br />
                  <span className="text-yellow-400">Click2Enter saves precious seconds when lives are on the line</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Access Control?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of public safety agencies and property owners who trust Click2Enter 
            for reliable, secure, and rapid access control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900">
              <Link to="/faq">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

