import React from "react";
import { Home, Users, MapPin, DollarSign, Award, Utensils } from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 70.71%)",
        }}
        className=" h-96 "
      >
        <div className=" container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#202326] mb-4">
            About Us
          </h1>
          <p className="text-xl text-[#374151] max-w-2xl">
            Helping homeowners get reliable yard work while helping young people
            earn fast money.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  What started as a small family restaurant has grown into a
                  beloved community hub. Our journey began with a simple vision:
                  to bring people together over delicious, home-cooked meals
                  that remind them of family gatherings and special moments.
                </p>
                <p>
                  Over the years, we've stayed true to our roots while embracing
                  innovation. We source ingredients from local farms, support
                  sustainable practices, and create an atmosphere where everyone
                  feels welcome. Our team has grown from a handful of passionate
                  individuals to a dedicated family of culinary professionals.
                </p>
                <p>
                  Today, we continue to serve our community with the same love
                  and dedication that started it all. Every dish tells a story,
                  and every guest becomes part of our extended family.
                </p>
              </div>
            </div>
            <div className="rounded-lg w-lg h-128 overflow-hidden shadow-2xl">
              <img
                src="./img.png"
                alt="Our team"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-[#0A3019]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-green-100 text-lg max-w-3xl mx-auto">
              Our mission is to make great food accessible for everyone,
              bringing communities together through exceptional dining
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#224430] bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center  mb-6">
                <svg
                  width="54"
                  height="48"
                  viewBox="0 0 54 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.9812 23.9531C53.9812 25.6406 52.575 26.9625 50.9812 26.9625H47.9812L48.0469 41.9812C48.0656 45.3094 45.375 48.0094 42.0469 48.0094H12.0094C8.7 48.0094 6.00937 45.3188 6.00937 42.0094V26.9625H3C1.3125 26.9625 0 25.65 0 23.9531C0 23.1094 0.28125 22.3594 0.9375 21.7031L24.975 0.75C25.6312 0.09375 26.3812 0 27.0375 0C27.6937 0 28.4437 0.1875 29.0062 0.65625L52.95 21.7031C53.7 22.3594 54.075 23.1094 53.9812 23.9531ZM33 21C33 19.4087 32.3679 17.8826 31.2426 16.7574C30.1174 15.6321 28.5913 15 27 15C25.4087 15 23.8826 15.6321 22.7574 16.7574C21.6321 17.8826 21 19.4087 21 21C21 22.5913 21.6321 24.1174 22.7574 25.2426C23.8826 26.3679 25.4087 27 27 27C28.5913 27 30.1174 26.3679 31.2426 25.2426C32.3679 24.1174 33 22.5913 33 21ZM24 30C19.8563 30 16.5 33.3563 16.5 37.5C16.5 38.325 17.175 39 18 39H36C36.825 39 37.5 38.325 37.5 37.5C37.5 33.3563 34.1437 30 30 30H24Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality</h3>
              <p className="text-green-100">
                We use only the finest ingredients and traditional cooking
                methods to ensure every dish meets our high standards
              </p>
            </div>

            <div className="bg-[#224430] bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="  flex items-center justify-center  mb-6">
                <svg
                  width="54"
                  height="48"
                  viewBox="0 0 54 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_47_5370)">
                    <path
                      d="M29.25 2.25V3.23438C29.85 3.34687 30.4313 3.4875 30.9563 3.62813C32.1562 3.94688 32.8688 5.18437 32.55 6.38437C32.2313 7.58437 30.9937 8.29688 29.7937 7.97812C28.7719 7.70625 27.8156 7.51875 26.9625 7.50937C26.2781 7.5 25.5844 7.66875 25.1438 7.92188C24.9469 8.04375 24.8531 8.14688 24.8156 8.20312C24.7875 8.25 24.75 8.31563 24.75 8.46563C24.75 8.49375 24.75 8.5125 24.75 8.52188C24.7687 8.54063 24.8344 8.63437 25.0594 8.76562C25.6031 9.09375 26.4094 9.34688 27.6281 9.7125L27.7125 9.74063C28.7531 10.05 30.1406 10.4719 31.2656 11.175C32.55 11.9812 33.7125 13.3219 33.7406 15.3844C33.7687 17.4938 32.6719 19.0312 31.2375 19.9313C30.6094 20.3156 29.9344 20.5875 29.2406 20.7562V21.75C29.2406 22.9969 28.2375 24 26.9906 24C25.7437 24 24.7406 22.9969 24.7406 21.75V20.6813C23.85 20.4656 23.0344 20.1844 22.3406 19.95C22.1438 19.8844 21.9563 19.8188 21.7781 19.7625C20.5969 19.3687 19.9594 18.0938 20.3531 16.9125C20.7469 15.7312 22.0219 15.0938 23.2031 15.4875C23.4469 15.5719 23.6719 15.6469 23.8875 15.7219C25.1625 16.1531 26.0813 16.4625 27.0656 16.5C27.8156 16.5281 28.4812 16.35 28.8656 16.1156C29.0437 16.0031 29.1281 15.9094 29.1656 15.8438C29.2031 15.7875 29.25 15.675 29.2406 15.4594V15.4406C29.2406 15.3469 29.2406 15.2438 28.8656 15.0094C28.3312 14.6719 27.525 14.4094 26.325 14.0438L26.1469 13.9875C25.1344 13.6875 23.8031 13.2844 22.7344 12.6375C21.4688 11.8781 20.25 10.575 20.2406 8.50312C20.2312 6.35625 21.45 4.88438 22.8375 4.05937C23.4375 3.70312 24.0844 3.45937 24.7312 3.29062V2.25C24.7312 1.00312 25.7344 0 26.9812 0C28.2281 0 29.2312 1.00312 29.2312 2.25H29.25ZM53.2688 31.5281C54.4969 33.1969 54.1406 35.5406 52.4719 36.7688L40.6031 45.5156C38.4094 47.1281 35.7656 48 33.0375 48H18H3C1.34062 48 0 46.6594 0 45V39C0 37.3406 1.34062 36 3 36H6.45L10.6594 32.625C12.7875 30.9188 15.4312 30 18.1594 30H25.5H27H33C34.6594 30 36 31.3406 36 33C36 34.6594 34.6594 36 33 36H27H25.5C24.675 36 24 36.675 24 37.5C24 38.325 24.675 39 25.5 39H36.8063L48.0281 30.7312C49.6969 29.5031 52.0406 29.8594 53.2688 31.5281ZM18.15 36H18.0656C18.0938 36 18.1219 36 18.15 36Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_47_5370">
                      <path d="M0 0H54V48H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-green-100">
                Building strong relationships with our customers and supporting
                local farmers and businesses in our area
              </p>
            </div>

            <div className="bg-[#224430] bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center  mb-6">
                <svg
                  width="54"
                  height="48"
                  viewBox="0 0 54 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_47_5382)">
                    <path
                      d="M13.875 7.18125C13.875 3.21562 17.0906 0 21.0563 0C22.9594 0 24.7875 0.759375 26.1281 2.1L27 2.97188L27.8719 2.1C29.2125 0.759375 31.0406 0 32.9437 0C36.9094 0 40.125 3.21562 40.125 7.18125C40.125 9.08437 39.3656 10.9125 38.025 12.2531L28.3219 21.9469C27.5906 22.6781 26.4 22.6781 25.6687 21.9469L15.975 12.2531C14.6344 10.9125 13.875 9.08437 13.875 7.18125ZM53.2688 31.5281C54.4969 33.1969 54.1406 35.5406 52.4719 36.7688L40.6031 45.5156C38.4094 47.1281 35.7656 48 33.0375 48H18H3C1.34062 48 0 46.6594 0 45V39C0 37.3406 1.34062 36 3 36H6.45L10.6594 32.625C12.7875 30.9188 15.4312 30 18.1594 30H25.5H27H33C34.6594 30 36 31.3406 36 33C36 34.6594 34.6594 36 33 36H27H25.5C24.675 36 24 36.675 24 37.5C24 38.325 24.675 39 25.5 39H36.8063L48.0281 30.7312C49.6969 29.5031 52.0406 29.8594 53.2688 31.5281ZM18.15 36H18.0656C18.0938 36 18.1219 36 18.15 36Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_47_5382">
                      <path d="M0 0H54V48H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Service</h3>
              <p className="text-green-100">
                Providing warm hospitality and creating memorable experiences
                that keep our guests coming back
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Who We Help
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-[#e7ebe8] rounded-full p-3 mr-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 41 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_47_5399)">
                      <path
                        d="M40.4859 17.9648C40.4859 19.2305 39.4312 20.2219 38.2359 20.2219H35.9859L36.0352 31.4859C36.0352 31.6758 36.0211 31.8656 36 32.0555V33.1875C36 34.7414 34.7414 36 33.1875 36H32.0625C31.9852 36 31.9078 36 31.8305 35.993C31.732 36 31.6336 36 31.5352 36H29.25H27.5625C26.0086 36 24.75 34.7414 24.75 33.1875V31.5V27C24.75 25.7555 23.7445 24.75 22.5 24.75H18C16.7555 24.75 15.75 25.7555 15.75 27V31.5V33.1875C15.75 34.7414 14.4914 36 12.9375 36H11.25H9.00703C8.90156 36 8.79609 35.993 8.69063 35.9859C8.60625 35.993 8.52188 36 8.4375 36H7.3125C5.75859 36 4.5 34.7414 4.5 33.1875V25.3125C4.5 25.2492 4.5 25.1789 4.50703 25.1156V20.2219H2.25C0.984375 20.2219 0 19.2375 0 17.9648C0 17.332 0.210938 16.7695 0.703125 16.2773L18.7312 0.5625C19.2234 0.0703125 19.7859 0 20.2781 0C20.7703 0 21.3328 0.140625 21.7547 0.492188L39.7125 16.2773C40.275 16.7695 40.5562 17.332 40.4859 17.9648Z"
                        fill="#0A3019"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_47_5399">
                        <path d="M0 0H40.5V36H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Homeowners & Sellers
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                We cater to all your event and party planning needs with
                customized menus and professional service.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Private dining experiences
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Corporate event catering
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Wedding and celebration menus
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Custom menu planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-[#e7ebe8] rounded-full p-3 mr-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 32 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M31.5 40H0V0H31.5V40Z" stroke="#E5E7EB" />
                    <g clip-path="url(#clip0_47_5435)">
                      <path
                        d="M15.75 19.5C13.3631 19.5 11.0739 18.5518 9.38604 16.864C7.69821 15.1761 6.75 12.8869 6.75 10.5C6.75 8.11305 7.69821 5.82387 9.38604 4.13604C11.0739 2.44821 13.3631 1.5 15.75 1.5C18.1369 1.5 20.4261 2.44821 22.114 4.13604C23.8018 5.82387 24.75 8.11305 24.75 10.5C24.75 12.8869 23.8018 15.1761 22.114 16.864C20.4261 18.5518 18.1369 19.5 15.75 19.5ZM14.7023 26.7563L13.3945 24.5766C12.9445 23.8242 13.4859 22.875 14.3578 22.875H15.75H17.1352C18.007 22.875 18.5484 23.8313 18.0984 24.5766L16.7906 26.7563L19.1391 35.468L21.6703 25.1391C21.8109 24.5695 22.3594 24.1969 22.9289 24.3445C27.8578 25.582 31.5 30.0398 31.5 35.3414C31.5 36.5367 30.5297 37.5 29.3414 37.5H20.0742C19.9266 37.5 19.793 37.4719 19.6664 37.4227L19.6875 37.5H11.8125L11.8336 37.4227C11.707 37.4719 11.5664 37.5 11.4258 37.5H2.15859C0.970313 37.5 0 36.5297 0 35.3414C0 30.0328 3.64922 25.575 8.57109 24.3445C9.14062 24.2039 9.68906 24.5766 9.82969 25.1391L12.3609 35.468L14.7094 26.7563H14.7023Z"
                        fill="#0A3019"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_47_5435">
                        <path d="M0 1.5H31.5V37.5H0V1.5Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Workers</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Individuals and corporate teams looking for great food and a
                comfortable dining environment.
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
                  <span className="text-gray-700">
                    Meeting room availability
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 mb-4 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300 transform group-hover:scale-105">
                <MapPin className="w-12 h-12 text-green-700 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Local Heroes
              </h3>
              <p className="text-gray-600 text-sm">
                Proudly serving our community with locally sourced ingredients
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 mb-4 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300 transform group-hover:scale-105">
                <Award className="w-12 h-12 text-green-700 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Winning Company
              </h3>
              <p className="text-gray-600 text-sm">
                Award-winning cuisine recognized by food critics and customers
                alike
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 mb-4 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300 transform group-hover:scale-105">
                <DollarSign className="w-12 h-12 text-green-700 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Great Pricing
              </h3>
              <p className="text-gray-600 text-sm">
                Premium quality at fair prices that fit every budget
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 mb-4 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300 transform group-hover:scale-105">
                <Users className="w-12 h-12 text-green-700 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Expertly Trained
              </h3>
              <p className="text-gray-600 text-sm">
                Our staff undergoes rigorous training to provide exceptional
                service
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
            Join our community today and discover why we're the preferred choice
            for dining
          </p>
          <button className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Book a Table
          </button>
        </div>
      </section>
    </div>
  );
};
export default page;
