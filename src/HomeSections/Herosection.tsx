// import React from "react";
import { BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

// Animation config
const heroVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: { duration: 0.1, ease: "easeOut", staggerChildren: 0.2 },
  },
};
const heroTextVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    delay: 0.8,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const heroButtonVariants = {
  initialLeft: { opacity: 0, x: -100 },
  initialRight: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: 0.5, ease: "easeOut" },
  },
};

const heroChartVariants = {
  initial: { opacity: 0, x: 500 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.8,
      ease: "easeOut",
      type: "spring",
      bounce: 0.3,
    },
  },
};
const Herosection = () => {
  return (
    <div className="lg:min-h-screen pt-6 lg:pt-0 h-full bg-gray-50">
      {/* Hero Section with Pattern Background */}
      <div className="relative bg-white lg:h-screen overflow-hidden">
        <div
          className="absolute inset-0 h-full opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={heroVariants}
              initial="initial"
              animate="animate"
              className="flex flex-col"
            >
              <motion.h1
                variants={heroTextVariants}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block">Analytics that</span>
                <span className="block text-blue-600">drive growth</span>
              </motion.h1>
              <motion.p
                variants={heroTextVariants}
                className="mt-6 text-xl text-gray-500 max-w-3xl"
              >
                Get deep insights into your website's performance with our
                comprehensive analytics dashboard. Make data-driven decisions to
                optimize your digital presence.
              </motion.p>
              <div className="mt-8 flex gap-4">
                <motion.div
                  variants={heroButtonVariants}
                  initial="initialLeft"
                  animate="animate"
                >
                  <Link
                    to={"/signIn"}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors animate-bounce "
                  >
                    Get Started
                  </Link>
                </motion.div>

                <motion.a
                  variants={heroButtonVariants}
                  initial="initialRight"
                  animate="animate"
                  href="https://github.com/scmofeoluwa/minalytics"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              variants={heroChartVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 mix-blend-multiply" />
                <div className="relative p-8">
                  <BarChart3 className="w-16 h-16 text-white mb-6" />
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-4 bg-white/20 rounded-full"
                        style={{
                          width: `${85 - i * 15}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
