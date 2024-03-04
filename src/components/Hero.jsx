import { styles } from "../styles";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.querySelector(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className={`relative  h-screen mx-auto overflow-hidden  `}>
      <div
        className={`absolute inset-0 top-[1vh] xl:ml-[5rem] z-[15] max-w-auto mx-auto flex flex-col w-full  items-center justify-center ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className=" max-w-7xl mx-auto w-full  text-center   sm:text-center   ">
          <h1 className={`${styles.heroHeadText} text-white cursor-pointer `}>
            <br />
            FHS
            <span className="text-[#ffc800] font-Andan font-thin">
              Coding Club
            </span>
          </h1>

          <div className="mt-4 flex justify-center   sm:pr-[10rem] py-14">
            <button
              className="bg-tertiary py-4 px-10 rounded-xl text-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-black border-2 border-transparent hover:border-white-100 transition ease-in-out delay-100 duration-300 hover:scale-90"
              onClick={() => scrollToSection("#contact")}
            >
              Interested?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
