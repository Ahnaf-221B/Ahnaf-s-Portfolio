import { useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSent(false);
    setError(false);

    emailjs
      .sendForm(
        "service_vgjraje",
        "template_e2cxdvr",
        form.current,
        "wFfTiserbG4fE8X1m"
      )
      .then(
        () => {
          setIsSent(true);
          setIsLoading(false);
          form.current.reset();
        },
        () => {
          setError(true);
          setIsLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects.
            Drop a message and I'll get back to you shortly!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <ContactInfo
              icon={<FaEnvelope className="text-white" size={20} />}
              title="Email"
              value="mostafaahnafhossain@gmail.com"
              link="mailto:mostafaahnafhossain@gmail.com"
            />

            <ContactInfo
              icon={<FaPhoneAlt className="text-white" size={20} />}
              title="Phone/WhatsApp"
              value="+880-1979656855"
              link="https://wa.me/8801979656855"
            />

            <ContactInfo
              icon={<FaMapMarkerAlt className="text-white" size={20} />}
              title="Location"
              value="Chittagong, Bangladesh"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                label="Name"
                name="name"
                type="text"
                placeholder="Your Name"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
              />
            </div>

            <Input
              label="Subject"
              name="subject"
              type="text"
              placeholder="Project Discussion"
            />

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 ${
                isLoading ? "opacity-80 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  <FaPaperPlane size={16} />
                  Send Message
                </>
              )}
            </button>

            {/* Message Feedback */}
            {isSent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 dark:text-green-400 font-medium text-center mt-2"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 dark:text-red-400 font-medium text-center mt-2"
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

// Reusable Input component
const Input = ({ label, name, type, placeholder }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      required
      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
      placeholder={placeholder}
    />
  </div>
);

// Reusable ContactInfo component
const ContactInfo = ({ icon, title, value, link }) => {
  const content = (
    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{value}</p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:scale-[1.02] transition-transform">
      {content}
    </a>
  ) : (
    content
  );
};

export default Contact;