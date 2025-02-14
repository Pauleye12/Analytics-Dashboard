import { GitFork, MoreHorizontal, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectPreviewProps {
  det: {
    img: string;
    title: string;
    url: string;
    gitUrl: string;
    commitMSG: string;
    date: string;
    branch: string;
  };
}

const ProjectPreviewCard = ({ det }: ProjectPreviewProps) => {
  return (
    <Link
      to={"dashboard"}
      className="w-full max-w-md bg-white rounded-xl border hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] border-gray-200 shadow-sm p-4"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center text-white font-bold">
              V
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <h2 className="text-gray-900 text-lg font-semibold hover:text-blue-400 capitalize  cursor-pointer">
                {det.title}
              </h2>
            </div>
            <p className="text-sm text-gray-400 mt-1">{det.url}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-300">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex cursor-pointer  items-center bg-blue-100 px-5 py-1 rounded-full ">
          <GitFork className="text-gray-500" size={16} />
          <span className="ml-1 text-sm text-gray-800 font-medium ">
            {det.gitUrl}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center text-sm text-gray-900">
        <span>{det.commitMSG}</span>
      </div>

      <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
        <span>{det.date}</span>
        <span>on</span>
        <div className="flex items-center gap-1">
          <GitBranch size={14} />
          <span className="text-black font-medium ">{det.branch}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPreviewCard;
