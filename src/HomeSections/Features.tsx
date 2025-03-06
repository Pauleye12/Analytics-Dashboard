import { motion } from "motion/react";

const featuresContent = [
  {
    id: 1,
    title: "Track Data",
    subTitle: "Real time data tracking",
    body: "Monitor key metrics as they happen, ensuring you make informed decisions quickly.",
    image: "",
  },
  {
    id: 2,
    title: "Track Data",
    subTitle: "Real time data tracking",
    body: "Monitor key metrics as they happen, ensuring you make informed decisions quickly.",
    image: "",
  },
  {
    id: 3,
    title: "Track Data",
    subTitle: "Real time data tracking",
    body: "Monitor key metrics as they happen, ensuring you make informed decisions quickly.",
    image: "",
  },
  {
    id: 4,
    title: "Track Data",
    subTitle: "Real time data tracking",
    body: "Monitor key metrics as they happen, ensuring you make informed decisions quickly.",
    image: "",
  },
];

// Animation Variants
// const featureTextVariants = {
//   initial: { opacity: 0, scale: 0, y: 30 },
//   inView: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

const featureImageVariants = {
  initial: { opacity: 0, scale: 0.7 },
  inView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const featureTextCardVariants = {
  initial: { opacity: 0, x: -100 },
  inView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Features = () => {
  return (
    <div
      id="features"
      className="w-full flex justify-center items-center overflow-hidden"
    >
      <div className="flex max-w-[1300px] flex-col w-full px-2 lg:px-6 py-20 lg:gap-36 gap-28 items-baseline ">
        <h1
          // variants={featureTextVariants}
          // initial="initial"
          // whileInView="inView"
          // viewport={{ once: true }}
          className="text-center w-full mb-6 text-gray-900 text-5xl font-bold "
        >
          What We Offer
        </h1>
        {featuresContent.map((f, index) => (
          <div
            key={index}
            className={`w-full px-2 py-4 flex-col flex gap-7 justify-between ${
              f.id % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } `}
          >
            <motion.div
              variants={featureTextCardVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true }}
              className="px-4 py-3 w-full lg:w-[40%] flex flex-col gap-3 items-start"
            >
              <h1 className="text-blue-600 uppercase ">{f.title}</h1>
              <h2 className="text-gray-900 font-bold text-3xl ">
                {f.subTitle}
              </h2>
              <p className="text-gray-500 text-xl "> {f.body} </p>
            </motion.div>
            <div className="lg:w-1/2">
              <motion.div
                variants={featureImageVariants}
                initial="initial"
                whileInView="inView"
                viewport={{ once: true }}
                className="relative max-w-[500px] rounded-lg w-full h-[250px] bg-slate-900  "
              >
                <img
                  className="absolute left-[70px] rounded-xl top-[60px] max-w-[500px] w-full "
                  src="/images/dashImg.png"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
