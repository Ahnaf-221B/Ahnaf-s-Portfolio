import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Mostafa Ahnaf Hossain
            </h3>
            <p className="text-gray-400 mb-6">
              A MERN Developer passionate about creating innovative web solutions.
            </p>
            <div className="flex space-x-5">
              <motion.a
                whileHover={{ y: -3 }}
                target="_blank"
                href="https://github.com/Ahnaf-221B"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                target="_blank"
                href="https://www.linkedin.com/in/mostafa-ahnaf-hossain/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:mostafaahnafhossain@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href={`#${link}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <a 
                  href="mailto:mostafaahnafhossain@gmail.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  mostafaahnafhossain@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <a 
                  href="tel:+8801979656855" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +880-1979656855
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400">Chittagong, Bangladesh</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Mostafa Ahnaf Hossain. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
}