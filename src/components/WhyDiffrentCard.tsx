import { motion } from "motion/react";

const whyDiffrentCardVariants = {
  initial: { opacity: 0, scale: 0, y: 30 },
  inView: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      type: "spring",
      bounce: 0.4,
    },
  },
};

const WhyDiffrentCard = ({
  info,
}: {
  info: { id: number; icons: JSX.Element; title: string; body: string };
}) => {
  return (
    <motion.div
      variants={whyDiffrentCardVariants}
      viewport={{ once: true }}
      className="flex w-[300px] flex-col gap-3 items-center p-2  "
    >
      <div>{info.icons}</div>
      <h1 className="text-gray-900 font-semibold text-2xl ">{info.title}</h1>
      <p className="text-gray-500">{info.body}</p>
    </motion.div>
  );
};

export default WhyDiffrentCard;
