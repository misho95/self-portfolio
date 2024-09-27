const LandingPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[60%] flex flex-col gap-10 ">
        <div className="flex justify-between items-center gap-[150px]">
          <div className="flex flex-col gap-5 max-w-[350px]">
            <h3 className="text-2xl">Front-end developer</h3>
            <h1 className="text-5xl tracking-wider">Mikheili Chapidze</h1>
            <p className="text-lg border-l-[2px] border-black/20 dark:border-white/20 pl-5 ml-10">
              I'm a front-end developer based in Georgia and enjoying developing
              perfect ui for users. i love travelling, racing & music.
            </p>
          </div>
          <div className="relative">
            <img
              src="src/assets/profile.jpg"
              className="rounded-full size-80 object-cover object-bottom relative z-30"
            />
            <div className="bg-[#a5b4fc] dark:bg-[#312e81] w-80 h-40 rounded-b-full absolute rotate-180 bottom-0 -left-40" />
            <div className="bg-[#fbbf24] dark:bg-[#451a03] w-80 h-40 rounded-b-full absolute rotate-180 bottom-0 -right-40" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-20 text-black/60 dark:text-white/60">
          <div>
            <span>Born in</span>
            <h4 className="font-semibold text-black dark:text-white">
              Georgia
            </h4>
          </div>
          <div>
            <span>Experiences</span>
            <h4 className="font-semibold text-black dark:text-white">
              2+ Years
            </h4>
          </div>
          <div>
            <span>Date of Birth</span>
            <h4 className="font-semibold text-black dark:text-white">
              20May 1995
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
