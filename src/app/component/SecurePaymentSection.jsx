const SecurePaymentSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-800">Secure Payment Options</h2>
        <p className="mt-2 text-gray-600">Multiple ways to pay, all processed securely after job completion</p>

        <div className="mt-8 flex justify-center gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8 w-80">
            <h3 className="text-xl font-semibold text-gray-800">Payment Methods</h3>
            <div className="mt-4 flex justify-between space-x-4">
              <img src="/images/visa.svg" alt="Visa" className="w-12 h-12" />
              <img src="/images/mastercard.svg" alt="MasterCard" className="w-12 h-12" />
              <img src="/images/american-express.svg" alt="American Express" className="w-12 h-12" />
              <img src="/images/apple-pay.svg" alt="Apple Pay" className="w-12 h-12" />
              <img src="/images/paypal.svg" alt="PayPal" className="w-12 h-12" />
            </div>
            <p className="mt-4 text-sm text-gray-600">All payments are processed securely through trusted providers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurePaymentSection;
