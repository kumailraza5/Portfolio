import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ];

  return (
    <footer className="bg-gray-800 py-8" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400" data-testid="copyright">
              &copy; 2024 Kumail Raza. All rights reserved.
            </p>
          </motion.div>
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {footerLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
