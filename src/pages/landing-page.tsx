import ProfileAvatar from "../components/profile-avatar";

const LandingPage = () => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="w-[90%] lg:w-[60%] flex flex-col gap-10 ">
        <article className="flex flex-col lg:flex-row justify-between items-center gap-[50px] lg:gap-[150px] text-center lg:text-left">
          <div className="flex flex-col gap-5 max-w-[350px]">
            <h3 className="text-2xl">Front-end developer</h3>
            <h1 className="text-5xl tracking-wider">Mikheili Chapidze</h1>
            <p className="text-lg border-l-[2px] border-black/20 dark:border-white/20 pl-5 ml-10 text-left">
              I'm a front-end developer based in Georgia and enjoying developing
              perfect ui for users. i love travelling, racing & music.
            </p>
          </div>
          <ProfileAvatar />
        </article>
        <article className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-20 text-black/60 dark:text-white/60 text-center">
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
        </article>
      </div>
    </section>
  );
};

export default LandingPage;
