"use client";

import { useState } from "react";
import { Check, Shield, MapPin, DollarSign, Upload, X } from "lucide-react";
import Link from "next/link";

export default function BookYardWorkForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    stateCountry: "",
    urgency: "flexible",
    preferredDate: "",
    preferredTime: "anytime",
    serviceType: "plumbing",
    jobSize: "",
  });

  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [errors, setErrors] = useState({});

  const serviceTypes = [
    { value: "plumbing", label: "Plumbing", basePrice: 45 },
    { value: "electrical", label: "Electrical", basePrice: 60 },
    { value: "hvac", label: "HVAC", basePrice: 75 },
    { value: "carpentry", label: "Carpentry", basePrice: 50 },
    { value: "landscaping", label: "Landscaping", basePrice: 40 },
    { value: "painting", label: "Painting", basePrice: 55 },
  ];

  const jobSizes = [
    { value: "small", label: "Small", multiplier: 1 },
    { value: "medium", label: "Medium", multiplier: 1.5 },
    { value: "large", label: "Large", multiplier: 2.5 },
    { value: "extra-large", label: "Extra Large", multiplier: 4 },
  ];

  const calculateEstimate = () => {
    const service = serviceTypes.find((s) => s.value === formData.serviceType);
    const size = jobSizes.find((s) => s.value === formData.jobSize);

    if (!service) return 45;
    if (!size) return service.basePrice;

    return Math.round(service.basePrice * size.multiplier);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPhoto = {
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          url: reader.result,
          file,
        };
        setUploadedPhotos((prev) => [...prev, newPhoto]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (id) => {
    setUploadedPhotos((prev) => prev.filter((photo) => photo.id !== id));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.streetAddress.trim())
      newErrors.streetAddress = "Street address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    if (!formData.stateCountry.trim())
      newErrors.stateCountry = "State/Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = () => {
  //   if (validateForm()) {
  //     console.log("Form submitted:", formData);
  //     console.log("Uploaded photos:", uploadedPhotos);
  //     alert(
  //       `Job request submitted successfully!\nEstimated Cost: $${calculateEstimate()}\nService: ${formData.serviceType}\nUrgency: ${formData.urgency}`,
  //     );
  //   } else {
  //     alert("Please fill in all required fields");
  //   }
  // };

  const estimatedTotal = calculateEstimate();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Book Yard Work
          </h1>
          <p className="text-gray-600 mb-4">
            Tell us what you need — we'll handle the rest.
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>You start the conversion</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Fast local workers</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div>
      

              {/* Contact Details */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Job Location */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Job Location
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                        errors.streetAddress
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.streetAddress && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.streetAddress}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                          errors.city ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.city}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                          errors.zipCode ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.zipCode && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.zipCode}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Description *
                    </label>
                    <textarea
                      type="text"
                      name="stateCountry"
                      placeholder="Describe what needs to be done, yard size, specific"
                      value={formData.stateCountry}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                        errors.stateCountry
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.stateCountry && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.stateCountry}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Timing & Urgency */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Timing & Urgency
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value="today"
                          checked={formData.urgency === "today"}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">Today</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value="within24"
                          checked={formData.urgency === "within24"}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">
                          Within 24 hours
                        </span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value="flexible"
                          checked={formData.urgency === "flexible"}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">Flexible</span>
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      >
                        <option value="anytime">Any time</option>
                        <option value="morning">Morning (8am - 12pm)</option>
                        <option value="afternoon">
                          Afternoon (12pm - 5pm)
                        </option>
                        <option value="evening">Evening (5pm - 8pm)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upload Photos */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Upload Photos (Optional)
                </h2>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="cursor-pointer">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-gray-600">
                      Drag and drop photos here, or click to select
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Photos can support upload clarity
                    </p>
                  </label>
                </div>

                {uploadedPhotos.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {uploadedPhotos.map((photo) => (
                      <div key={photo.id} className="relative group">
                        <img
                          src={photo.url}
                          alt={photo.name}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => removePhoto(photo.id)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <p className="text-xs text-gray-600 mt-1 truncate">
                          {photo.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Price Estimate Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Price Estimate
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service Type:</span>
                  <span className="font-medium capitalize">
                    {formData.serviceType}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Job Size:</span>
                  <span className="font-medium capitalize">
                    {formData.jobSize
                      ? formData.jobSize.replace("-", " ")
                      : "Not selected"}
                  </span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Estimated Total:</span>
                    <span className="text-3xl font-bold text-gray-900">
                      ${estimatedTotal}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                  <p className="text-gray-600">
                    Final Price will be confirmed by the professional based on
                    the actual work required
                  </p>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-gray-700">Licensed professionals</p>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-gray-700">Satisfaction guarantee</p>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-gray-700">Same-day service available</p>
                </div>
              </div>
              <Link href="/book/success">
                <button
                  // onClick={handleSubmit}
                  className="w-full bg-gray-900 text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Submit Job Request
                </button>
              </Link>

              <p className="text-xs text-gray-500 text-center mt-3">
                We'll review your request and forward it to a professional.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-gray-700" />
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Fully Insured</h3>
            <p className="text-sm text-gray-600">
              Your property coverage is always protected
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-gray-700" />
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Local Workers</h3>
            <p className="text-sm text-gray-600">
              Trusted professionals in your area
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-gray-700" />
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">No Hidden Fees</h3>
            <p className="text-sm text-gray-600">
              What you see is what you pay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
