import { useState } from "react";
import { Files } from "lucide-react";

const Settings = () => {
  const [projectName, setProjectName] = useState("Project Mofe");
  const [isCopied, setIsCopied] = useState(false);

  const copyTrackingId = () => {
    navigator.clipboard.writeText("12345678910").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };
  return (
    <div className="w-full flex  ">
      <div className="flex pt-10 flex-col gap-10">
        <div className="flex flex-col w-full gap-3">
          <h1 className="text-2xl font-semibold text-gray-900 mb-[20px]  ">
            Change Project Name
          </h1>
          <p>You can make changes to you project name.</p>
          <input
            className="px-3 py-2 text-gray-900 border max-w-[400px] w-full border-solid font-medium border-gray-400 rounded-md outline-none focus-within:border-blue-600 transition-all duration-300 "
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
            type="text"
          />
          <button className="bg-blue-600 text-white w-fit font-medium  rounded-lg px-7 py-[7px] ">
            Save
          </button>
        </div>

        <div className="flex flex-col w-full gap-3">
          <h1 className="text-2xl mb-[20px] font-semibold text-gray-900  ">
            Tracking ID
          </h1>
          <p>Copy your tracking ID below</p>
          <div
            className="text-gray-900 py-1 px-4 rounded-full font-medium text-sm  bg-blue-100 w-fit cursor-pointer "
            onClick={copyTrackingId}
          >
            <p className="flex gap-1 items-center">
              Tracking ID: <span>12345678910</span>{" "}
              <Files size={16} className="text-blue-600 ml-0.5 " />
            </p>
          </div>
          {isCopied && (
            <p className="text-green-500 mt-3 text-sm font-medium">
              Tracking ID Copied to clipboard!
            </p>
          )}
        </div>

        <div className="flex flex-col w-full gap-3">
          <h1 className="text-2xl font-semibold text-gray-900 mb-[20px] ">
            Delete Project
          </h1>
          <p>Deleting your project is a destructive action </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
