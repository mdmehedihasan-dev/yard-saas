import { Plug } from "lucide-react";
import { FaArrowRight, FaPlus, FaUser } from "react-icons/fa";

const PlatformFeeSection = () => {
  return (
    <section className="bg-[#f0fdf4] py-12">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-800">
          How Platform Fees Work
        </h2>
        <p className="mt-2 text-gray-600">
          Complete transparency. No surprises.
        </p>
        <div className="mt-8 flex   justify-center gap-8">
          <div className="bg-white  shadow-lg rounded-lg p-8 w-240">
            <div className=" justify-center flex">
              <div className="flex flex-col w-96 items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-500 text-white flex items-center justify-center text-xl">
                  <FaUser />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-xl font-semibold">Worker Receives</span>
                  <p className="text-4xl font-bold ">88%</p>
                  <p className="text-sm text-gray-600">
                    Of your payment goes directly to the worker
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-96 items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-500 text-white flex items-center justify-center text-xl">
                  <FaUser />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-xl font-semibold">Worker Receives</span>
                  <p className="text-4xl font-bold ">88%</p>
                  <p className="text-sm text-gray-600">
                    Of your payment goes directly to the worker
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[#f9fafb] w-220 mx-auto rounded-2xl border-2 border-[#e5e7eb]">
              <h2 className="text-2xl font-semibold py-6">Example Breakdown</h2>

              <div className="flex  mx-auto  justify-center items-center gap-x-20 pb-8">
                <div>
                  <p className="text-[#4B5563] text-base">Job Price</p>
                  <p className="text-3xl font-bold">$100</p>
                </div>
                <div>
                  <FaArrowRight size={24} />
                </div>

                <div>
                  <p className="text-[#4B5563] text-base">Worker Gets</p>
                  <p className="text-3xl font-bold">$88</p>
                </div>

                <div>
                  <FaPlus color="#9CA3AF" />
                </div>

                <div>
                  <p className="text-[#4B5563] text-base">Platform Fee</p>
                  <p className="text-3xl font-bold">$12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeeSection;
