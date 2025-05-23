import MyImage from "../imgs/montasir_rahman.png";
const About = () => {
  return (
    <div
      className="edu w-full h-screen max-[545px]:h-[50rem]  flex flex-col justify-center items-center  "
      id="about"
    >
      <p className="education text-3xl text-[#00CF5D] flex justify-center items-center">
        About
      </p>
      <div className="flex justify-center items-center">
        <hr className="w-80 h-1  border-t border-gray-300 my-4"></hr>
      </div>
      <div className="flex justify-center items-center p-10">
        <img
          src={MyImage}
          alt="My Picture"
          className="h-[250px] rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-6">
        <h1 className="text-4xl text-white font-bold max-[545px]:text-2xl">
          Montasir Rahman
        </h1>
        <p className="text-[#00CF5D] text-4xl text-center max-[545px]:text-2xl">
          Web Developer
        </p>
        <p className="w-[80%] text-xl line-clamp-7 leading-8 text-center  text-white ">
          Hello! I am a passionate software engineer with expertise in web
          development. I love building applications that solve real-world
          problems.
        </p>
      </div>
    </div>
  );
};

export default About;
