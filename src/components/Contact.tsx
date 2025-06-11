import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Loader, X } from 'lucide-react';
// Add X for close icon

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    // threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Add a state for popup
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(
        "https://maltandmedia.onrender.com", // <-- your backend endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok && (result.status === "success" || result.result === "success")) {
        setSubmitted(true);
        setShowPopup(true); // Show popup on success
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setIsSubmitting(false);
        return;
      }

      throw new Error(result.message || "Sorry, there was an error submitting your message. Please try again later.");
    } catch (error) {
      console.error("Submission error:", error);
      setError(
        error instanceof Error
          ? error.message || "Sorry, there was an error submitting your message. Please try again later."
          : "Sorry, there was an error submitting your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Popup Thank You */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center relative">
            <button
              className="absolute top-3 right-3 text-primary-900 hover:text-secondary-500"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send size={32} className="text-primary-900" />
            </div>
            <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">Thank You!</h3>
            <p className="text-primary-700 mb-2">
              Your message has been received.<br />
              <span className="font-semibold text-secondary-500">Our team will contact you shortly.</span>
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-6 py-2 bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-medium rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path 
            fill="#EDE0D4" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 bg-primary-800 text-secondary-500 text-sm font-medium rounded-full mb-6">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-cream-500">
                Let's Craft Something<br />Extraordinary Together
              </h2>
              
              <p className="text-lg text-cream-300 mb-8 font-accent leading-relaxed">
                Ready to elevate your brand? Contact us to start a conversation about 
                how we can help you stand out in the digital landscape.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-800 rounded-lg">
                    <Mail size={24} className="text-secondary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-cream-500 mb-1">Email Us</h4>
                    <a href="mailto:hello@maltandmedia.com" className="text-cream-300 hover:text-secondary-500 transition-colors">
                      hello@maltandmedia.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-800 rounded-lg">
                    <Phone size={24} className="text-secondary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-cream-500 mb-1">Call Us</h4>
                    <a href="tel:+15551234567" className="text-cream-300 hover:text-secondary-500 transition-colors">
                      +91 81689 84395
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-800 rounded-lg">
                    <MapPin size={24} className="text-secondary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-cream-500 mb-1">Mohali</h4>
                    {/* <address className="text-cream-300 not-italic">
                      123 Bourbon Street, Suite 101<br />
                      Whiskey Hills, CA 90210
                    </address> */}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="bg-primary-800 rounded-2xl p-8 shadow-xl"
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} className="text-primary-900" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-cream-500 mb-4">Thank You!</h3>
                  <p className="text-cream-300 mb-6">
                    Your message has been received.<br />
                    <span className="font-semibold text-secondary-500">Our team will contact you shortly.</span>
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-medium rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-display font-semibold text-cream-500 mb-6">Send us a message</h3>
                  
                  {/* {error && (
                    <div className="bg-red-500 bg-opacity-20 border border-red-400 text-white px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )} */}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-cream-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-primary-700 border border-primary-600 focus:border-secondary-500 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-secondary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-cream-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-primary-700 border border-primary-600 focus:border-secondary-500 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-secondary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-cream-300 mb-2">Phone Number </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-primary-700 border border-primary-600 focus:border-secondary-500 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-secondary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-cream-300 mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-primary-700 border border-primary-600 focus:border-secondary-500 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-secondary-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="Content Creation">Content Creation</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Branding">Branding</option>
                        <option value="Website Design">Website Design</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-cream-300 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-700 border border-primary-600 focus:border-secondary-500 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-secondary-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-semibold rounded-lg transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={20} className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Get quote
                      </>
                    )}
                  </button>

                  <p className="text-xs text-cream-300 text-center mt-4">
                    Our Partners will Contact as Soon as possible.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
