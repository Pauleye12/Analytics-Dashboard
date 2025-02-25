import {
  AlarmClockCheck,
  HomeIcon,
  BookLock,
  Blocks,
  View,
} from "lucide-react";
import WhyDiffrentCard from "../components/WhyDiffrentCard";
import { motion } from "motion/react";

const data = [
  {
    id: 1,
    icons: <AlarmClockCheck className="text-blue-600" size={55} />,
    title: "Lightining Fast dashboard",
    body: "No more staring at loading screens. Splitbee gives you the UX you deserve.",
  },
  {
    id: 2,
    icons: <HomeIcon className="text-blue-600" size={55} />,
    title: "Secure Location",
    body: "Your data is stored in a remote location somewhere in Nigeria, Africa.",
  },
  {
    id: 3,
    icons: <Blocks className="text-blue-600" size={55} />,
    title: "Seamless Integration",
    body: "No more staring at loading screens. Splitbee gives you the UX you deserve.",
  },
  {
    id: 4,
    icons: <BookLock className="text-blue-600" size={55} />,
    title: "Security",
    body: "No more staring at loading screens. Splitbee gives you the UX you deserve.",
  },
  {
    id: 5,
    icons: <View className="text-blue-600" size={55} />,
    title: "Lightining Fast dashboard",
    body: "No more staring at loading screens. Splitbee gives you the UX you deserve.",
  },
];

// Animation Variants
const featureTextVariants = {
  initial: { opacity: 0, scale: 0, y: 30 },
  inView: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const whyDiffrentWrapperVariants = {
  initial: { opacity: 0 },
  inView: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.4 },
  },
};

const WhyDiffrent = () => {
  return (
    <div className="w-full px-4 py-14 flex flex-col mt-20 md:mt-36 gap-20 items-center justify-center ">
      <motion.h1
        variants={featureTextVariants}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true }}
        className="text-center w-full mb-16 text-gray-900 text-5xl font-bold "
      >
        Significant Advantages
      </motion.h1>
      <motion.div
        variants={whyDiffrentWrapperVariants}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true }}
        className="flex justify-center flex-wrap gap-y-24 gap-16 max-w-[1300px] w-full "
      >
        {data.map((d) => (
          <WhyDiffrentCard key={d.id} info={d} />
        ))}
      </motion.div>
    </div>
  );
};

export default WhyDiffrent;
