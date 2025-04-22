
import { Mail, Info, Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Ready to accelerate your business growth? Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-business-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">contact@stellargrowth.com</p>
                  </div>
                </div>
                
                {/* Social Media Section */}
                <div className="flex items-start">
                  <div className="mr-4 flex flex-col space-y-2 mt-1 flex-shrink-0">
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <Instagram size={20} className="hover:text-business-100 transition-colors" />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <Facebook size={20} className="hover:text-business-100 transition-colors" />
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Social Media</p>
                    <p className="text-white/80">Connect with us on Instagram and Facebook</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Info className="mr-4 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Information</p>
                    <p className="text-white/80">For general inquiries and information</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500"
                    placeholder="Your Company Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500 resize-none"
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
