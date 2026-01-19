import React from 'react';
import { Home, Users, MapPin, DollarSign, Award, Utensils } from 'lucide-react';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-800 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-green-50 max-w-2xl">
            Helping families and communities thrive by connecting people
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  What started as a small family restaurant has grown into a beloved community hub. Our journey began with a simple vision: to bring people together over delicious, home-cooked meals that remind them of family gatherings and special moments.
                </p>
                <p>
                  Over the years, we've stayed true to our roots while embracing innovation. We source ingredients from local farms, support sustainable practices, and create an atmosphere where everyone feels welcome. Our team has grown from a handful of passionate individuals to a dedicated family of culinary professionals.
                </p>
                <p>
                  Today, we continue to serve our community with the same love and dedication that started it all. Every dish tells a story, and every guest becomes part of our extended family.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%2334d399' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='white'%3ETeam Members%3C/text%3E%3C/svg%3E"
                  alt="Our team"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-600 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gradient-to-b from-green-900 to-green-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-green-100 text-lg max-w-3xl mx-auto">
              Our mission is to make great food accessible for everyone, bringing communities together through exceptional dining experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality</h3>
              <p className="text-green-100">
                We use only the finest ingredients and traditional cooking methods to ensure every dish meets our high standards
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-green-100">
                Building strong relationships with our customers and supporting local farmers and businesses in our area
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Service</h3>
              <p className="text-green-100">
                Providing warm hospitality and creating memorable experiences that keep our guests coming back
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Who We Help</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Home className="w-6 h-6 text-green-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Homeowners & Sellers</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We cater to all your event and party planning needs with customized menus and professional service.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Private dining experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Corporate event catering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Wedding and celebration menus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Custom menu planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Users className="w-6 h-6 text-green-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Workers</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Individuals and corporate teams looking for great food and a comfortable dining environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Business lunch specials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Group dining packages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Quick service options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Meeting room availability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 mb-4 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300 transform group-hover:scale-105">
                <MapPin className="w-12 h-12 text-green-700 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Local Heroes</h3>
              <p className="text-gray-600 text-sm">
                Proudly serving our community with locally sourced ingredients
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 mb-4 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300 transform group-hover:scale-105">
                <Award className="w-12 h-12 text-green-700 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Winning Company</h3>
              <p className="text-gray-600 text-sm">
                Award-winning cuisine recognized by food critics and customers alike
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 mb-4 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300 transform group-hover:scale-105">
                <DollarSign className="w-12 h-12 text-green-700 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Great Pricing</h3>
              <p className="text-gray-600 text-sm">
                Premium quality at fair prices that fit every budget
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 mb-4 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300 transform group-hover:scale-105">
                <Users className="w-12 h-12 text-green-700 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expertly Trained</h3>
              <p className="text-gray-600 text-sm">
                Our staff undergoes rigorous training to provide exceptional service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Great Food?
          </h2>
          <p className="text-green-50 text-lg mb-8 max-w-2xl mx-auto">
            Join our community today and discover why we're the preferred choice for dining
          </p>
          <button className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Book a Table
          </button>
        </div>
      </section>
    </div>
  );
}
export default page;