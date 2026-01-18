import { Check } from "lucide-react";
import { IoMdClose } from "react-icons/io";

const WhatsIncludedSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-800">
          What’s Included & What’s Not
        </h2>
        <p className="mt-2 text-gray-600">
          Clear expectations for every service
        </p>

        <div className="mt-8 flex justify-center space-x-8">
          <div className="bg-[#f0fdf4] border-2 border-[#bbf7d0]  p-6 rounded-lg shadow-lg w-132">
            <div className="flex items-center gap-4">
              <div className="bg-[#0A3019] w-12 flex items-center justify-center h-12 rounded-full">
                <Check color="#fff" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-green-600">
                What’s Included
              </h3>
            </div>
            <ul className="mt-4 space-y-2 text-left text-gray-600">
              <li className="flex items-center gap-x-2">
                <div className="bg-[#0A3019] w-4 flex items-center justify-center h-4 rounded-full">
                  <Check color="#fff" size={12} />
                </div>
                <p>Verified local workers</p>
              </li>
              <li className="flex items-center gap-x-2">
                <div className="bg-[#0A3019] w-4 flex items-center justify-center h-4 rounded-full">
                  <Check color="#fff" size={12} />
                </div>
                <p>Flexible scheduling options</p>
              </li>
              <li className="flex items-center gap-x-2">
                <div className="bg-[#0A3019] w-4 flex items-center justify-center h-4 rounded-full">
                  <Check color="#fff" size={12} />
                </div>
                <p>Pay after job completion</p>
              </li>
              <li className="flex items-center gap-x-2">
                <div className="bg-[#0A3019] w-4 flex items-center justify-center h-4 rounded-full">
                  <Check color="#fff" size={12} />
                </div>
                <p>Secure payment processing</p>
              </li>
              <li className="flex items-center gap-x-2">
                <div className="bg-[#0A3019] w-4 flex items-center justify-center h-4 rounded-full">
                  <Check color="#fff" size={12} />
                </div>
                <p>Customer support team</p>
              </li>

              <li className="flex items-center gap-x-2">
                <div className="bg-[#0A3019] w-4 flex items-center justify-center h-4 rounded-full">
                  <Check color="#fff" size={12} />
                </div>
                <p>Satisfaction guarantee</p>
              </li>
            </ul>
          </div>

          <div className="bg-[#fef2f2] border-2 border-[#fecaca] p-6 rounded-lg shadow-lg w-132">
            <div className="flex  items-center gap-x-4">
              <div className="bg-[#EF4444] flex items-center justify-center w-12 h-12 rounded-full">
                <IoMdClose color="#fff" />
              </div>

              <h3 className="text-xl font-semibold text-red-600">
                What’s Not Included
              </h3>
            </div>
            <ul className="mt-4 space-y-2 text-left text-gray-600">
              <li className="flex items-center gap-x-2">
                <div className="bg-[#EF4444] flex items-center justify-center w-4 h-4 rounded-full">
                  <IoMdClose color="#fff" size={12} />
                </div>
                <p>Long-term contracts required</p>
              </li>
              <li className="flex items-center gap-x-2">
                <div className="bg-[#EF4444] flex items-center justify-center w-4 h-4 rounded-full">
                  <IoMdClose color="#fff" size={12} />
                </div>
                <p>Hidden service charges</p>
              </li>
              <li className="flex items-center gap-x-2">
                <div className="bg-[#EF4444] flex items-center justify-center w-4 h-4 rounded-full">
                  <IoMdClose color="#fff" size={12} />
                </div>
                <p>Upfront payment requirements</p>
              </li>
              <li className="flex items-center gap-x-2">
                <div className="bg-[#EF4444] flex items-center justify-center w-4 h-4 rounded-full">
                  <IoMdClose color="#fff" size={12} />
                </div>
                <p>Cancellation penalties</p>
              </li>
              <li className="flex items-center gap-x-2">
                <div className="bg-[#EF4444] flex items-center justify-center w-4 h-4 rounded-full">
                  <IoMdClose color="#fff" size={12} />
                </div>
                <p>Minimum service periods</p>
              </li>
              <li className="flex items-center gap-x-2">
                <div className="bg-[#EF4444] flex items-center justify-center w-4 h-4 rounded-full">
                  <IoMdClose color="#fff" size={12} />
                </div>
                <p>Additional processing fees</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
