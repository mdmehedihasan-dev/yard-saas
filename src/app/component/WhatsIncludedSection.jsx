const WhatsIncludedSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-800">What’s Included & What’s Not</h2>
        <p className="mt-2 text-gray-600">Clear expectations for every service</p>

        <div className="mt-8 flex justify-center space-x-8">
          <div className="bg-green-50 p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold text-green-600">What’s Included</h3>
            <ul className="mt-4 space-y-2 text-left text-gray-600">
              <li>Verified local workers</li>
              <li>Flexible scheduling options</li>
              <li>Pay after job completion</li>
              <li>Secure payment processing</li>
              <li>Customer support team</li>
              <li>Satisfaction guarantee</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold text-red-600">What’s Not Included</h3>
            <ul className="mt-4 space-y-2 text-left text-gray-600">
              <li>Long-term contracts required</li>
              <li>Hidden service charges</li>
              <li>Upfront payment requirements</li>
              <li>Cancellation penalties</li>
              <li>Minimum service periods</li>
              <li>Additional processing fees</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
