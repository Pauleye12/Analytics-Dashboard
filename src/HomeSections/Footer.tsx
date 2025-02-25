import { Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "motion/react";

const footerWrapperVariants = {
  initial: { opacity: 0 },
  inView: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: "easeOut",
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const footerVariants = {
  initial: { opacity: 0, y: 30 },
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};

const footerChildVariants = {
  initial: { opacity: 0, y: 30 },
  inView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut", when: "beforeChildren" },
  },
};

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 px-5 mt-10 pb-5 pt-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={footerWrapperVariants}
          initial="initial"
          whileInView="inView"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={footerVariants}
            initial="initial"
            whileInView="inView"
            // viewport={{ once: true }}
          >
            <motion.h3
              variants={footerChildVariants}
              className="text-lg font-semibold text-gray-900 mb-4"
            >
              Analytics Dashboard
            </motion.h3>
            <motion.p variants={footerChildVariants} className="text-gray-600">
              Comprehensive analytics solution for tracking and analyzing your
              website's performance.
            </motion.p>
          </motion.div>
          <motion.div
            variants={footerVariants}
            initial="initial"
            whileInView="inView"
          >
            <motion.h3
              variants={footerVariants}
              className="text-lg font-semibold text-gray-900 mb-4"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              variants={footerVariants}
              initial="initial"
              whileInView="inView"
              className="space-y-2"
            >
              <motion.li variants={footerChildVariants}>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Documentation
                </a>
              </motion.li>
              <motion.li variants={footerChildVariants}>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  API Reference
                </a>
              </motion.li>
              <motion.li variants={footerChildVariants}>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Support
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div
            variants={footerVariants}
            initial="initial"
            whileInView="inView"
          >
            <motion.h3
              variants={footerVariants}
              className="text-lg font-semibold text-gray-900 mb-4"
            >
              Connect
            </motion.h3>
            <motion.div
              variants={footerVariants}
              initial="initial"
              whileInView="inView"
              className="flex space-x-4"
            >
              <motion.a
                variants={footerChildVariants}
                initial="initial"
                whileInView="inView"
                href="#"
                className="text-gray-600 hover:text-blue-600"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                variants={footerChildVariants}
                initial="initial"
                whileInView="inView"
                href="#"
                className="text-gray-600 hover:text-blue-600"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                variants={footerChildVariants}
                initial="initial"
                whileInView="inView"
                href="#"
                className="text-gray-600 hover:text-blue-600"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Analytics Dashboard. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
