import { useState } from 'react';

function Contact() {
  // Form state object w/ all input fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: '',
  });

  // Handle input changes - updates state
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div
      id="contact"
      className="min-h-[600px] bg-gradient-to-br from-gray-50 via-white to-gray-100 py-6 px-4"
    >
      {/* Main container w/ responsive max width */}
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Get In{' '}
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base">
            Ready to start your project? Let's discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-6">
            <h2 className="text-base md:text-lg font-bold text-gray-900 mb-4">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Company & Project Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    Project Type
                  </label>
                  <input
                    type="text"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
                    placeholder="e.g. Web Development, Mobile App"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                  Budget Range
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
                  placeholder="e.g. $5,000 - $10,000"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold py-3 px-4 text-sm md:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  Send Message
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {/* Email Contact */}
            <div className="bg-black rounded-xl p-4 md:p-6 text-white">
              <h3 className="text-base md:text-lg font-bold mb-4">Let's Connect</h3>
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-xs md:text-sm">Email us at</p>
                  <p className="text-white font-semibold text-sm md:text-base break-all">
                    freelancercodex1@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <h4 className="text-sm md:text-base font-bold text-gray-900 mb-3">Response Time</h4>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Email Response</span>
                  <span className="text-gray-900 font-semibold">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Consultation</span>
                  <span className="text-gray-900 font-semibold">Same day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Proposal</span>
                  <span className="text-gray-900 font-semibold">2-3 days</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <h4 className="text-sm md:text-base font-bold text-gray-900 mb-3">Follow Us</h4>
              <div className="flex space-x-3 justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/freelancercodex_/"
                  className="group w-10 h-10 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  title="Instagram"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C8.396 0 7.989.013 6.041.048 2.204.095.673 1.626.673 5.463c0 .9.013 1.196.048 2.322.095 3.837 1.626 5.368 5.463 5.368.9 0 1.196-.013 2.322-.048 3.837-.095 5.368-1.626 5.368-5.463 0-.9-.013-1.196-.048-2.322C13.731 1.626 12.2.095 8.363.095c-.9 0-1.196.013-2.322.048zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  title="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:Freelancercodex1@gmail.com"
                  className="group w-10 h-10 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  title="Email"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
