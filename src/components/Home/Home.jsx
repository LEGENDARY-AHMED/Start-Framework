import { Helmet } from "react-helmet";
import img from "./../../assets/avataaars.svg";
const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
      <div className="flex flex-col justify-center mt-[92px] min-h-[calc(-112px+100vh)] items-center bg-[#1abc9c] ">
        <div className="w-[250px] mb-12">
          <img  src={img} alt="..." />
        </div>
        <div className="text-center text-white"> 
          <h1 className="font-bold uppercase mb-5 text-[calc(1.375rem+1.5vw)]">start Framework</h1>
          <div className="flex mb-5 justify-center items-center">
            <div className="w-[80px] h-[4px] bg-white"></div>
            <li className=" fa-solid fa-star mx-4"></li>

            <div className="w-[80px] h-[4px] bg-white"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
};

export default Home;
