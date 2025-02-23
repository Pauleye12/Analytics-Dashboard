// import { useState } from "react";
// import { Files } from "lucide-react";

// const Settings = () => {
//   const [projectName, setProjectName] = useState("Project Mofe");
//   const [isCopied, setIsCopied] = useState(false);

//   const copyTrackingId = () => {
//     navigator.clipboard.writeText("12345678910").then(() => {
//       setIsCopied(true);
//       setTimeout(() => setIsCopied(false), 2000);
//     });
//   };
//   return (
//     <div className="w-full flex  ">
//       <div className="flex pt-10 flex-col gap-16">
//         <div className="flex flex-col w-full gap-3">
//           <h1 className="text-2xl w-full font-semibold text-gray-900 mb-[20px]  ">
//             Change Project Name
//           </h1>
//           <p>You can make changes to you project name.</p>
//           <input
//             className="px-3 py-2 text-gray-900 border max-w-[400px] w-full border-solid font-medium border-gray-400 rounded-md outline-none focus-within:border-blue-600 transition-all duration-300 "
//             onChange={(e) => setProjectName(e.target.value)}
//             value={projectName}
//             type="text"
//           />
//           <button className="bg-blue-600 text-white w-fit font-medium  rounded-lg px-7 py-[7px] ">
//             Save
//           </button>
//         </div>

//         <div className="flex flex-col w-full gap-3">
//           <h1 className="text-2xl mb-[20px] font-semibold text-gray-900  ">
//             Tracking ID
//           </h1>
//           <p>Copy your tracking ID below</p>
//           <div
//             className="text-gray-900 py-1 px-4 rounded-full font-medium text-sm  bg-blue-100 w-fit cursor-pointer "
//             onClick={copyTrackingId}
//           >
//             <p className="flex gap-1 items-center">
//               Tracking ID: <span>12345678910</span>{" "}
//               <Files size={16} className="text-blue-600 ml-0.5 " />
//             </p>
//           </div>
//           {isCopied && (
//             <p className="text-green-500 mt-3 text-sm font-medium">
//               Tracking ID Copied to clipboard!
//             </p>
//           )}
//         </div>

//         <div className="flex flex-col w-full gap-3">
//           <h1 className="text-2xl font-semibold text-gray-900 mb-[20px] ">
//             Delete Project
//           </h1>
//           <p>Deleting your project is a destructive action </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;

import React, { useState } from "react";
import { Copy, AlertCircle, Settings2, Key, Trash2 } from "lucide-react";

interface ProjectSettings {
  name: string;
  trackingId: string;
}

function Settings() {
  const [project, setProject] = useState<ProjectSettings>({
    name: "My Analytics Project",
    trackingId: "ANL-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [copied, setCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({ ...project, name: e.target.value });
  };

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const copyTrackingId = async () => {
    await navigator.clipboard.writeText(project.trackingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDelete = () => {
    if (deleteConfirmation === project.name) {
      // Handle project deletion here
      setIsDeleted(true);
      setTimeout(() => setIsDeleted(false), 2000);
      setIsDeleteModalOpen(false);
      setDeleteConfirmation("");
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl px-3 py-6">
        <div className="mb-8 flex items-center space-x-3">
          <div className="bg-blue-500 p-2 rounded-lg">
            <Settings2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Project Settings
            </h1>
            <p className="mt-1 text-gray-600">
              Manage your project configuration and settings
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="py-8 px-5 border-b border-gray-100">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Settings2 className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                General Settings
              </h2>
            </div>

            <div className="space-y-8 flex flex-col w-full gap-6 ">
              {/* Project Name */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <label
                  htmlFor="projectName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Name
                </label>
                <div className="flex items-center w-full gap-5 flex-wrap md:flex-nowrap">
                  <input
                    type="text"
                    id="projectName"
                    value={project.name}
                    onChange={handleNameChange}
                    className="w-full px-4 py-3 border border-gray-200 outline-none rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter project name"
                  />
                  <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white w-fit hover:translate-y-[4px] transition-all duration-300 font-medium  rounded-lg px-7 py-[10px] "
                  >
                    Save{" "}
                  </button>
                </div>
                {isSaved && (
                  <p className="text-green-500 mt-3 text-sm font-medium">
                    Project name updated successfully
                  </p>
                )}
              </div>

              {/* Tracking ID */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center space-x-2 mb-2">
                  <Key className="w-4 h-4 text-gray-500" />
                  <label className="block text-sm font-medium text-gray-700">
                    Tracking ID
                  </label>
                </div>
                <div className="flex gap-3 flex-wrap  ">
                  <code className="flex-1 px-4 py-3 bg-white rounded-lg min-w-[200px] w-full font-mono text-sm border border-gray-200">
                    {project.trackingId}
                  </code>
                  <button
                    onClick={copyTrackingId}
                    className="px-4 py-3 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
                {copied && (
                  <div className="flex items-center space-x-2 mt-2 text-green-600 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                    <span>Copied to clipboard</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="p-8 bg-gray-50">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-red-100 p-2 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-red-600">
                Danger Zone
              </h2>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-xl p-6">
              <div className="flex flex-wrap gap-3 items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Trash2 className="w-5 h-5 text-red-600" />
                    <h3 className="text-lg font-medium text-gray-900">
                      Delete Project
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    Once deleted, you will lose all data associated with this
                    project. This action cannot be undone.
                  </p>
                </div>
                <button
                  onClick={() => setIsDeleteModalOpen(true)}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Delete Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl">
              <div className="flex items-center space-x-3 text-red-600 mb-4">
                <div className="bg-red-100 p-2 rounded-lg">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Delete Project</h3>
              </div>

              <p className="text-gray-600 mb-6">
                This action cannot be undone. Please type{" "}
                <strong className="text-gray-900">{project.name}</strong> to
                confirm.
              </p>

              <input
                type="text"
                value={deleteConfirmation}
                onChange={(e) => setDeleteConfirmation(e.target.value)}
                onPaste={(e) => e.preventDefault()}
                placeholder="Enter project name"
                className="w-full px-4 py-3 border border-gray-200 outline-none rounded-lg mb-6 focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
              />

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setIsDeleteModalOpen(false);
                    setDeleteConfirmation("");
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={deleteConfirmation !== project.name}
                  className={`px-4 py-2 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 ${
                    deleteConfirmation === project.name
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-red-200 cursor-not-allowed"
                  }`}
                >
                  Delete Project
                </button>
              </div>
            </div>
          </div>
        )}

        {isDeleted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl">
              <div className="flex items-center space-x-3 text-red-600 mb-4">
                <div className="bg-red-100 p-2 rounded-lg">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold"> Project Deleted</h3>
              </div>

              <p className="text-gray-600 mb-6">
                Your project
                <strong className="text-gray-900"> {project.name}</strong> has
                been deleted.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;
