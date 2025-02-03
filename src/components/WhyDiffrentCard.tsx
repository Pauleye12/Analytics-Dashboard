const WhyDiffrentCard = ({
  info,
}: {
  info: { id: number; icons: JSX.Element; title: string; body: string };
}) => {
  return (
    <div className="flex w-[300px] flex-col gap-3 items-center p-2  ">
      <div>{info.icons}</div>
      <h1 className="text-gray-900 font-semibold text-2xl ">{info.title}</h1>
      <p className="text-gray-500">{info.body}</p>
    </div>
  );
};

export default WhyDiffrentCard;
