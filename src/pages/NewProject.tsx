import { useState } from "react";

const NewProject = () => {
  const [projectName, setProjectName] = useState("");
  const [step, setStep] = useState(1);
  const [emptyField, setEmptyField] = useState(false);
  const handleNameSubmit = () => {
    setEmptyField(false);
    if (projectName == "") {
      setEmptyField(true);
    } else {
      setEmptyField(false);
      const DBName = projectName.trim().toLowerCase();
      alert("your project name is " + DBName);
      setStep(2);
    }
  };
  return (
    <div className="w-full min-h-screen newProjectBG2 flex justify-center">
      <div className="max-w-7xl grid gap-7 grid-cols-6 w-full mx-auto pt-[80px] px-4 py-8">
        <div className=" hidden col-span-2 border-r border-gray-300 border-solid px-4 md:flex flex-col gap-14 pt-[80px]   ">
          <h1 className="text-blue-600 text-2xl font-medium  w-full">
            Create Your New Project
          </h1>

          <div className="flex flex-col gap-9">
            <div className="relative flex gap-3 items-center">
              <span
                className={`w-11 h-11 rounded-full text-center ${
                  step == 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-solid border-blue-600"
                }  flex justify-center items-center `}
              >
                1
              </span>{" "}
              <p className="text-gray-600 text-lg">Name Project</p>
              <span
                className={`absolute left-[21px] top-full w-0.5 h-9 ${
                  step == 1
                    ? "bg-blue-600"
                    : "bg-white border border-solid border-blue-600"
                } `}
              ></span>
            </div>
            <div className="relative flex gap-3 items-center">
              <span
                className={`w-11 h-11 rounded-full text-center ${
                  step == 2
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-solid border-blue-600 "
                }  flex justify-center items-center `}
              >
                2
              </span>{" "}
              <p className="text-gray-600 text-lg">Initialize Project</p>
              <span
                className={`absolute left-[21px] top-full w-0.5 h-9 ${
                  step == 2
                    ? "bg-blue-600"
                    : "bg-white border border-solid border-blue-600"
                } `}
              ></span>
            </div>
            <div className="relative flex gap-3 items-center">
              <span
                className={`w-11 h-11 rounded-full text-center ${
                  step == 3
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-solid border-blue-600"
                }  flex justify-center items-center `}
              >
                3
              </span>{" "}
              <p className="text-gray-600 text-lg">Proceed to dashboard</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:col-span-4 col-span-6 px-3 py-4">
          <div className="w-full h-full flex justify-center items-center">
            {step == 1 ? (
              <div className="flex max-w-[400px] w-full flex-col gap-8">
                <h1 className="text-blue-600 text-2xl font-medium">
                  Enter Project Name
                </h1>
                <div className="relative flex flex-col gap-2 ">
                  <input
                    className="px-3 py-2 text-gray-900 border border-solid font-medium border-gray-400 rounded-md outline-none focus-within:border-blue-600 transition-all duration-300 "
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="pauleyeApp"
                  />
                  {emptyField && (
                    <p className="text-red-600 font-medium text-sm animate-pulse ">
                      {" "}
                      * Kindly fill out your project name...
                    </p>
                  )}
                </div>

                <button
                  onClick={handleNameSubmit}
                  className="bg-blue-600 text-white mt-8 w-fit self-end rounded-lg px-7 py-[10px] "
                >
                  Proceed
                </button>
              </div>
            ) : step == 2 ? (
              <div className="w-full flex flex-col gap-4 ">
                <h1 className="text-blue-600 text-sm">Initialization</h1>
                <div className="flex flex-col gap-3">
                  <h1 className="text-blue-600 text ">
                    Javascript (Node / Generic)
                  </h1>
                  <p className="text-gray-600">
                    The Mofelytics Web SDK allows you to track user behavior on
                    your website using a simple script tag. This guide provides
                    instructions for installing and using the Web SDK in your
                    project.
                  </p>
                </div>
                <div>
                  <div>
                    <h2>Step 1: Install</h2>
                    <p>npm install mofelytics</p>
                  </div>
                  <div>
                    <h2>Step 2: Initialization</h2>
                    <p>npm install mofelytics</p>
                  </div>
                </div>
              </div>
            ) : step == 3 ? (
              <div></div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 py-4 px-3 flex justify-center items-center w-full left-0 bg-white ">
        <div className="flex items-center">
          <div className="relative flex items-center">
            <span
              className={`w-11 h-11 rounded-full text-center ${
                step == 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-solid border-blue-600"
              }  flex justify-center items-center `}
            >
              1
            </span>{" "}
            <span
              className={` h-0.5 w-9 ${
                step == 1
                  ? "bg-blue-600"
                  : "bg-white border border-solid border-blue-600"
              } `}
            ></span>
          </div>
          <div className="relative flex items-center">
            <span
              className={`w-11 h-11 rounded-full text-center ${
                step == 2
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-solid border-blue-600 "
              }  flex justify-center items-center `}
            >
              2
            </span>{" "}
            <span
              className={` h-0.5 w-9 ${
                step == 2
                  ? "bg-blue-600"
                  : "bg-white border border-solid border-blue-600"
              } `}
            ></span>
          </div>
          <div className="relative flex gap-3 items-center">
            <span
              className={`w-11 h-11 rounded-full text-center ${
                step == 3
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-solid border-blue-600"
              }  flex justify-center items-center `}
            >
              3
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
