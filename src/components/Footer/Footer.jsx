const Footer = () => {
  return (
    <>
 <footer className="bg-[#2c3e50] text-white">
  <div className="grid mx-auto container lg:w-[90%] text-center grid-cols-1 gap-8 px-4 py-6 lg:py-24 md:grid-cols-3">
    <div>
      <h2 className="mb-2 text-[calc(1.3rem+.6vw)] font-semibold">LOCATION</h2>
      <p  className="mb-1">2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>
    <div>
      <h2 className="mb-2 text-[calc(1.3rem+.6vw)] font-semibold ">
        AROUND THE WEB
      </h2>
      <ul>
      <i className="fa-brands fa-facebook mx-1 icon"></i>
      <i className="fa-brands fa-twitter  mx-1 icon"></i>
      <i className="fa-brands fa-linkedin mx-1 icon"></i>
      <i className="fa-solid fa-globe mx-1 icon"></i>
      </ul>
    </div>
    <div>
      <h2 className="mb-2 text-[calc(1.3rem+.6vw)] font-semibold">
        ABOUT FREELANCER
      </h2>
      <p>
        Freelance is a free to use, licensed Bootstrap theme created by
        Route
      </p>
    </div>
  </div>
  <div className="px-4 py-6 flex justify-center bg-[#1a252f]">
    <p>Copyright © Your Website 2021</p>
  </div>
</footer>

    </>
  );
}

export default Footer