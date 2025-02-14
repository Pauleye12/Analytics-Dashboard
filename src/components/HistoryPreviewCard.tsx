import { MoreHorizontal, Hash } from "lucide-react";

// interface PreviewItemProps {
//   title: string;
//   number: string;
//   hash: string;
//   isActive?: boolean;
// }

// const PreviewItem: React.FC<PreviewItemProps> = ({
//   title,
//   number,
//   hash,
//   isActive = false,
// }) => (

// );

function HistoryPreviewCard({
  title,
  number,
  hash,
}: {
  title: string;
  number: string;
  hash: string;
}) {
  // const previews = [
  //   {
  //     title: "fix images not clickable",
  //     number: "2",
  //     hash: "9q5hcz2wx",
  //     isActive: true,
  //   },
  //   // {
  //   //   title: "fix slider added gradient",
  //   //   number: "1",
  //   //   hash: "7ak3y8rbr",
  //   // },
  // ];

  return (
    <div
      className={`w-full max-w-md bg-white  border-b  border-gray-200 p-3 hover:bg-slate-50 transition-all duration-300 `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-900 font-medium text-sm px-2 py-0.5 rounded bg-blue-100">
            Preview
          </span>
          <div className="flex items-center gap-0.5 text-gray-400">
            <Hash size={16} className="text-gray-500" />
            <span className="text-sm text-gray-900 ">{number}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            <span className="text-gray-500 text-sm font-mono">{hash}</span>
          </div>
        </div>

        <button className="text-gray-400 hover:text-gray-300">
          <MoreHorizontal size={18} />
        </button>
      </div>
      <div className="mt-1">
        <span className="text-gray-900 text-sm">{title}</span>
      </div>
    </div>
  );
}

export default HistoryPreviewCard;
