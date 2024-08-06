import { useState } from "react";
import port1 from "./../../assets/poert1.png";
import port2 from "./../../assets/port2.png";
import port3 from "./../../assets/port3.png";
import { Helmet } from "react-helmet";

const Protfolio = () => {
  const [img, setImg] = useState([
    {
      id: 1,
      src: port1,
      alt: "Portfolio 1",
    },
    {
      id: 2,
      src: port2,
      alt: "Portfolio 2",
    },
    {
      id: 3,
      src: port3,
      alt: "Portfolio 3",
    },
    {
      id: 4,
      src: port1,
      alt: "Portfolio 1",
    },
    {
      id: 5,
      src: port2,
      alt: "Portfolio 2",
    },
    {
      id: 6,
      src: port3,
      alt: "Portfolio 3",
    },
  ]);
  const [src, setSrc] = useState(null);
  function openModuol(src) {
    setSrc(src);
    document.querySelector(".moduol").style.display = "flex";
  }
  function closeModuol(e) {
    if (e.target.classList.contains('moduol')) {
      document.querySelector('.moduol').style.display = 'none';
      setSrc(null);
    }
  }
  return (
    <>
      <Helmet>
      <title>Protfolio</title>
    </Helmet>
          <div className=" mt-[92px] min-h-[calc(-112px+100vh);]">
          <div className=" pt-10">
        <div className="text-center text-[#2c3e50]">
          <h1 className="font-bold uppercase mb-5 text-[calc(1.375rem+1.5vw)]">
            portfolio component
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[80px] h-[4px] bg-[#2c3e50]"></div>
          <li className=" fa-solid fa-star mx-4 text-[#2c3e50]"></li>
          <div className="w-[80px] h-[4px] bg-[#2c3e50]"></div>
        </div>
      </div>
      <div className="container mx-auto my-12 w-[90%] grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">
        {img.map((item) => (
          <div key={item.id} className="rounded-md relative">
            <img src={item.src} alt={item.alt} className="rounded-md" />
            <span
              onClick={() => openModuol(item.src)}
              className="flex justify-center items-center text-white absolute start-0 end-0 top-0 bottom-0 bg-green-400 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out cursor-pointer"
            >
              <i className="fa-solid fa-plus fa-10x flex "></i>
            </span>
          </div>
        ))}
        <div  onClick={closeModuol} className=" moduol hidden bg-[#4b5563]/70 z-50 fixed top-0 bottom-0 end-0 start-0 justify-center items-center ">
          <img src={src} className=" w-[600px]" alt="..." />
        </div>
      </div>
      </div>
    </>
  );
};

export default Protfolio;
