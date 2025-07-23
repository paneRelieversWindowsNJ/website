import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  propertyType: string;
  serviceType: string;
  frequency: string;
  floors: string;
  estimatedWindows: string;
  additionalServices: string[];
  preferredDate: string;
  message: string;
}

const WindowWashingContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    serviceType: '',
    frequency: '',
    floors: '',
    estimatedWindows: '',
    additionalServices: [],
    preferredDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      additionalServices: checked 
        ? [...prev.additionalServices, name]
        : prev.additionalServices.filter(service => service !== name)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to your custom API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          additionalServices: formData.additionalServices.join(', ')
        })
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          propertyType: '',
          serviceType: '',
          frequency: '',
          floors: '',
          estimatedWindows: '',
          additionalServices: [],
          preferredDate: '',
          message: ''
        });
      } else {
        console.error('Form submission failed:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Your Free Quote</h2>
        <p className="text-gray-600">Professional window cleaning services - we'll get back to you within 24 hours!</p>
      </div>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <h3 className="font-semibold">Thank you for your quote request!</h3>
          <p>We'll contact you within 24 hours to schedule your free estimate.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <h3 className="font-semibold">Oops! Something went wrong.</h3>
          <p>Please try again or call us directly at (555) 123-4567</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Information */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(555) 123-4567"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Service Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="123 Main St, City, State, ZIP"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Property Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                Property Type *
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select property type</option>
                <option value="residential-house">Residential House</option>
                <option value="residential-condo">Condo/Apartment</option>
                <option value="commercial-office">Commercial Office</option>
                <option value="commercial-retail">Retail Store</option>
                <option value="commercial-restaurant">Restaurant</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="floors" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Floors
              </label>
              <select
                id="floors"
                name="floors"
                value={formData.floors}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select floors</option>
                <option value="1">1 Floor</option>
                <option value="2">2 Floors</option>
                <option value="3">3 Floors</option>
                <option value="4+">4+ Floors</option>
              </select>
            </div>

            <div>
              <label htmlFor="estimatedWindows" className="block text-sm font-medium text-gray-700 mb-1">
                Estimated Windows
              </label>
              <select
                id="estimatedWindows"
                name="estimatedWindows"
                value={formData.estimatedWindows}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select range</option>
                <option value="1-10">1-10 windows</option>
                <option value="11-20">11-20 windows</option>
                <option value="21-30">21-30 windows</option>
                <option value="31-50">31-50 windows</option>
                <option value="50+">50+ windows</option>
              </select>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select service</option>
                <option value="interior-exterior">Interior & Exterior</option>
                <option value="exterior-only">Exterior Only</option>
                <option value="interior-only">Interior Only</option>
              </select>
            </div>

            <div>
              <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                Cleaning Frequency
              </label>
              <select
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select frequency</option>
                <option value="one-time">One-time cleaning</option>
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="bi-annually">Bi-annually</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Services
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                'Screen cleaning',
                'Sill cleaning',
                'Frame cleaning',
                'Pressure washing',
                'Gutter cleaning',
                'Solar panel cleaning'
              ].map((service) => (
                <label key={service} className="flex items-center">
                  <input
                    type="checkbox"
                    name={service}
                    checked={formData.additionalServices.includes(service)}
                    onChange={handleCheckboxChange}
                    className="mr-2 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Scheduling */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Scheduling</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date for Estimate
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about any special requirements, access issues, or questions you have..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg transition-colors"
        >
          {isSubmitting ? 'Sending Request...' : 'Get My Free Quote'}
        </button>

        <p className="text-sm text-gray-500 text-center">
          We respect your privacy. Your information will never be shared with third parties.
        </p>
      </form>
    </div>
  );
};

export default WindowWashingContactForm;