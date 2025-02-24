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
const Features = () => {
  return (
    <div
      id="features"
      className="w-full flex justify-center items-center overflow-hidden"
    >
      <div className="flex max-w-[1300px] flex-col w-full px-2 lg:px-6 py-20 lg:gap-36 gap-28 items-baseline ">
        <h1 className="text-center w-full mb-6 text-gray-900 text-5xl font-bold ">
          What We Offer
        </h1>
        {featuresContent.map((f, index) => (
          <div
            key={index}
            className={`w-full px-2 py-4 flex-col flex gap-7 justify-between ${
              f.id % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } `}
          >
            <div className="px-4 py-3 w-full lg:w-[40%] flex flex-col gap-3 items-start">
              <h1 className="text-blue-600 uppercase ">{f.title}</h1>
              <h2 className="text-gray-900 font-bold text-3xl ">
                {f.subTitle}
              </h2>
              <p className="text-gray-500 text-xl "> {f.body} </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative max-w-[500px] rounded-lg w-full h-[250px] bg-slate-900  ">
                <img
                  className="absolute left-[70px] rounded-xl top-[60px] max-w-[500px] w-full "
                  src="/images/dashImg.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
