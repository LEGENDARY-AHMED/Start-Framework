const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-[#1abc9c] ">
        <div className="text-center text-white">
          <h1 className="font-bold uppercase mb-5 text-[calc(1.375rem+1.5vw)]">about component</h1>
          <div className="flex mb-5 justify-center items-center">
            <div className="w-[80px] h-[4px] bg-white"></div>
            <li className=" fa-solid fa-star mx-4"></li>

            <div className="w-[80px] h-[4px] bg-white"></div>
          </div>
          <div className="flex flex-col justify-between gap-12	px-12 md:flex-row ">
            <p className="max-w-xl	text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="max-w-xl	text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
