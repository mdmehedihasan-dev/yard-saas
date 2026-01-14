import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* --- Hero Section --- */}
      <section className="bg-emerald-50/50 px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-emerald-950">
              Fast, Reliable <span className="text-emerald-800">Yard Work</span>{" "}
              — When You Need It
            </h1>
            <p className="text-emerald-700 text-lg mb-8 max-w-md">
              Get trusted local workers for mowing, raking, trimming & more.
              Professional service at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
               <Link href="/coustomer/home"> 
              <button className="bg-emerald-900 text-white px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-emerald-800 transition-colors">
                {/* <Calendar size={18} /> */}
                Book Yard Work
              </button>
              </Link>
                <Link href="/worker/home"> 
              <button className="bg-white border border-emerald-900 text-emerald-900 px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors">
                {/* <UserPlus size={18} /> */}
                Become a Worker
              </button>
              </Link>
            </div>
          <div>
            

          </div>
            <div className="flex flex-wrap gap-6 text-sm font-medium text-emerald-800">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-200 text-emerald-800 p-1 rounded-full">
                  ✓
                </span>
                Same Day Service
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-200 text-emerald-800 p-1 rounded-full">
                  ✓
                </span>
                Insured Workers
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                {/* <Star size={16} fill="currentColor" /> */}
                5-Star Rated
              </div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
              alt="Professional lawn mowing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-emerald-950">
            Why Choose Our Yard Work Service?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Simple, reliable, and professional yard care that fits your schedule
            and budget.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              //   icon={<Clock className="text-white" size={24} />}
              title="Same Day Service"
              description="Book today, get service today. Perfect for urgent yard work needs."
            />
            <FeatureCard
              //   icon={<ShieldCheck className="text-white" size={24} />}
              title="Trusted Workers"
              description="Background-checked, insured professionals you can trust in your yard."
            />
            <FeatureCard
              //   icon={<DollarSign className="text-white" size={24} />}
              title="Fair Pricing"
              description="Transparent, upfront pricing with no hidden fees or surprises."
            />
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section className="py-20 px-6 bg-emerald-50/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-emerald-950">
            Our Yard Work Services
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional yard care services to keep your property looking its
            best.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              //   icon={<Scissors className="text-white" size={20} />}
              title="Lawn Mowing"
              description="Professional grass cutting and edging."
            />
            <ServiceCard
              //   icon={<Leaf className="text-white" size={20} />}
              title="Leaf Raking"
              description="Seasonal cleanup and debris removal."
            />
            <ServiceCard
              //   icon={<Trees className="text-white" size={20} />}
              title="Bush Trimming"
              description="Hedge and shrub maintenance."
            />
            <ServiceCard
              //   icon={<Sparkles className="text-white" size={20} />}
              title="Yard Cleanup"
              description="General tidying and maintenance."
            />
          </div>
        </div>
      </section>

      {/* --- Footer CTA Section --- */}
      <footer className="bg-emerald-950 py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Your Yard Work Done?
          </h2>
          <p className="text-emerald-200/80 mb-10 text-lg">
            Join thousands of satisfied customers who trust us with their yard
            care needs.
          </p>
          <button className="bg-white text-emerald-950 px-10 py-4 rounded-md font-bold text-lg hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 mx-auto">
            {/* <Calendar size={20} /> */}
            Book Your Service Now
          </button>
        </div>
      </footer>
    </div>
  );
};

export default page;

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-emerald-50/50 p-10 rounded-xl flex flex-col items-center border border-emerald-100/50">
    <div className="bg-emerald-900 p-4 rounded-full mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-emerald-950">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
    <div className="bg-emerald-900 p-3 rounded-md mb-4">{icon}</div>
    <h3 className="font-bold text-emerald-950 mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

