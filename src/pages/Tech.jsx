import "react-vertical-timeline-component/style.min.css";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiMongoose, SiPostman } from "react-icons/si";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

import WebIcon from "../imgs/webIcon.svg";
import Server from "../imgs/server.svg";
import Others from "../imgs/others.svg";
import Chrome from "../imgs/chrome.png";

const Tech = () => {
  const techSections = [
    {
      iconSrc: WebIcon,
      name: "Frontend",
      technologies: [
        { icon: <FaHtml5 />, name: "Html", color: "text-orange-500" },
        { icon: <FaCss3 />, name: "CSS", color: "text-blue-500" },
        { icon: <BiLogoJavascript />, name: "JavaScript", color: "text-yellow-500" },
        { icon: <BiLogoReact />, name: "ReactJs", color: "text-blue-600" },
        { icon: <TbBrandNextjs />, name: "NEXT.js", color: "text-slate-900" },
        { icon: <BiLogoTailwindCss />, name: "tailwindcss", color: "text-cyan-500" },
      ],
    },
    {
      iconSrc: Server,
      name: "Backend",
      technologies: [
        { icon: <IoLogoNodejs />, name: "NodeJs", color: "text-green-900" },
        { icon: <SiExpress />, name: "ExpressJs", color: "text-green-900" },
        { icon: <BiLogoMongodb />, name: "MongoDB", color: "text-green-800" },
        { icon: <SiMongoose />, name: "Mongoose", color: "text-slate-900" },
      ],
    },
    {
      iconSrc: Others,
      name: "Tools",
      technologies: [
        { icon: <TbBrandVscode />, name: "vscode", color: "text-blue-600" },
        { icon: <SiPostman />, name: "postman", color: "text-orange-500" },
        { icon: <AiFillGithub />, name: "github", color: "text-slate-900" },
        { icon: <img src={Chrome} className="w-8 h-8" />, name: "chrome devloper tool", color: "" },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full h-screen max-[1100px]:h-[60rem] max-[900px]:h-[80rem] justify-center items-center gap-y-12 overflow-hidden" id="tech">
        <div className="flex flex-col">
          <p className="education text-3xl text-[#00CF5D] flex justify-center items-center">
            skills
          </p>
          <div className="flex justify-center items-center">
            <hr className="w-80 h-1 border-t border-gray-300 my-4"></hr>
          </div>
        </div>
        <div className="w-full flex max-[1100px]:flex-wrap gap-y-16 justify-center items-center gap-x-4">
          {techSections.map((section, index) => (
            <div key={index} className="flex justify-center items-center w-[20rem] h-[20rem]  sm:w-[25rem] bg-[#1D293A] shadow-sm shadow-[#202a37] rounded-sm relative">
              <img src={section.iconSrc} className="w-32 h-32 absolute -top-16" alt={section.name} />
              <div className="w-full h-[80%] flex flex-col justify-center items-center gap-y-2">
                <div className="w-full h-[20%] text-3xl text-center text-slate-200 font-semibold">{section.name}</div>
                <div className="w-full h-[90%] flex flex-col  items-start pl-12 gap-y-3">
                  {section.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex justify-center items-center gap-x-2">
                      <span className={`${tech.color} text-xl w-8 h-8  flex justify-center items-center`}>{tech.icon}</span>
                      <p className="w-full h-8 text-2xl text-slate-200 font-mono">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech;
