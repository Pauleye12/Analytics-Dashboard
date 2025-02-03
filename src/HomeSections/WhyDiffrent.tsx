import {
  AlarmClockCheck,
  HomeIcon,
  BookLock,
  Blocks,
  View,
} from "lucide-react";
import WhyDiffrentCard from "../components/WhyDiffrentCard";

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
    id: 1,
    icons: <Blocks className="text-blue-600" size={55} />,
    title: "Seamless Integration",
    body: "No more staring at loading screens. Splitbee gives you the UX you deserve.",
  },
  {
    id: 1,
    icons: <BookLock className="text-blue-600" size={55} />,
    title: "Security",
    body: "No more staring at loading screens. Splitbee gives you the UX you deserve.",
  },
  {
    id: 1,
    icons: <View className="text-blue-600" size={55} />,
    title: "Lightining Fast dashboard",
    body: "No more staring at loading screens. Splitbee gives you the UX you deserve.",
  },
];

const WhyDiffrent = () => {
  return (
    <div className="w-full px-4 py-14 flex flex-col mt-20 md:mt-36 gap-20 items-center justify-center ">
      <h1 className="text-center w-full mb-16 text-gray-900 text-5xl font-bold ">
        Significant Advantages
      </h1>
      <div className="flex justify-center flex-wrap gap-y-24 gap-16 max-w-[1300px] w-full ">
        {data.map((d) => (
          <WhyDiffrentCard key={d.id} info={d} />
        ))}
      </div>
    </div>
  );
};

export default WhyDiffrent;
