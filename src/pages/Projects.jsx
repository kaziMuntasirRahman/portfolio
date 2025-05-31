import { AiFillGithub } from "react-icons/ai";
// import tech_hunt from "../imgs/tech-hunt-home.png";
// import get_it_done from "../imgs/get-it-done.png"
// import craftopia from "../imgs/craftopia.png"
import tech_hunt_full from "../imgs/tech-hunt0.web.app.jpeg";
import get_it_done_full from "../imgs/get-it-done0.netlify.app.jpeg";
import luxe_Haven_full from "../imgs/luxe-haven-official.web.app.jpeg";

const projectsData = [
  {
    name: "Tech Hunt",
    imageSrc: tech_hunt_full,
    liveLink: "https://tech-hunt0.web.app/",
    githubLink: "https://github.com/kaziMuntasirRahman/tech-hunt-client",
    description: "A discovery hub for exploring the latest tech tools, apps, games, and innovations",
    technologies: ["ReactJs", "Stripe", "ExpressJs", "MongoDB"],
  },
  {
    name: "Get It Done",
    imageSrc: get_it_done_full,
    liveLink: "https://get-it-done0.netlify.app/",
    githubLink: "https://github.com/kaziMuntasirRahman/get-it-done",
    description:
      "A service-sharing website that connects users with professionals for home maintenance tasks like plumbing, electrical work, and repairs.",
    technologies: ["ReactJs", "TailwindCSS", "ExpressJs", "MongoDB"],
  },
  {
  name: "Luxe Haven",
  imageSrc: luxe_Haven_full,
  liveLink: "https://luxe-haven-official.web.app/",
  githubLink: "https://github.com/kaziMuntasirRahman/luxe-haven-client",
  description:
    "A luxury real estate website where users can browse, view details, and inquire about premium residential properties.",
  technologies: ["ReactJs", "Firebase", "ExpressJs", "MongoDB"],
},
  // {
  //   name: "Craftopia",
  //   imageSrc: craftopia,
  //   liveLink: "https://craftopia-client.web.app/",
  //   githubLink: "https://github.com/kaziMuntasirRahman/craftopia-client",
  //   description:
  //     "A platform where users can explore, buy, and sell handmade crafts and artistic products.",
  //   technologies: ["ReactJs", "Firebase", "ExpressJs", "MongoDB"],
  // },
];

const Projects = () => {
  return (
    <>
      <div
        className="flex flex-col w-full  h-full justify-center items-center gap-y-4 overflow-hidden "
        id="project"
      >
        <div className="flex flex-col max-[1100px]:flex-wrap max-[700px]:flex-col w-full overflow-hidden">
          <p className="education text-[#00CF5D]  text-3xl flex justify-center items-center">
            projects
          </p>
          <div className="flex justify-center items-center">
            <hr className="w-80 h-1 border-t border-gray-300 my-4"></hr>
          </div>
        </div>
        <div className="w-full flex flex-wrap max-[1100px]:gap-y-12 justify-center items-center  gap-x-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="sm:w-[25rem] sm:h-[30rem] w-[20rem] h-[25rem]  flex flex-col rounded-lg bg-[#182c35d9] shadow-lg shadow-slate-900"
            >
              <div className="projectImage w-full h-full relative">
                <img
                  className="w-full h-[230px] rounded-t-lg object-cover object-top transition-all duration-[2s] ease-linear hover:object-bottom"
                  src={project.imageSrc}
                  alt={project.name}
                />
              </div>
                <div className="imagebottomSlide w-full h-0 hover:h-full leading-6 text-violet-50 flex justify-center items-center text-center tracking-tight absolute left-0 right-0 bottom-0 z-10 bg-slate-600 opacity-80 transition-all duration-500 ease rounded-t-lg overflow-hidden">
                  <div className="w-full h-full p-6 border flex justify-center items-center border-gray-200 rounded-lg shadow-md">
                    <p className="text-gray-50 leading-7">
                      {project.description}
                    </p>
                  </div>
                </div>
              <div className="p-6 w-full h-full flex flex-col justify-center items-center gap-y-1">
                <h5 className="mb-2 text-xl font-medium leading-tight text-white">
                  {project.name}
                </h5>
                <div className="w-24 h-8 bg-blue-600 rounded-md text-[1rem] text-white flex justify-center items-center text-center font-medium">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    see live
                  </a>
                </div>
                <a
                  className="w-full h-10 flex justify-center items-center gap-x-1  gap-y-4"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 text-white flex items-center">
                    <AiFillGithub className="w-8 h-8" />
                  </div>
                  <div className="text-xl text-white font-medium">
                    project github link
                  </div>
                </a>
                <div className="flex flex-col justify-center items-center gap-y-1">
                  <div className="flex justify-center items-center flex-wrap gap-x-3 gap-y-3">
                    {project.technologies.map((tech, techIndex) => (
                      <button
                        key={techIndex}
                        className="w-24 h-8 bounce-in bg-white text-slate-800 font-semibold rounded-lg"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
