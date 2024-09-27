const ProfileAvatar = () => {
  return (
    <div className="relative size-[50%] sm:size-[35%] aspect-square shrink-0">
      <img
        src="src/assets/profile.jpg"
        className="rounded-full object-cover object-top relative z-30 w-full h-full dark:sepia border-[2px] border-black/20 dark:border-white/20"
      />
      <div className="bg-[#a5b4fc] dark:bg-[#312e81] w-[100%] h-[50%] rounded-b-full absolute rotate-180 bottom-0 -left-[50%] border-[2px] border-black/20 dark:border-white/20" />
      <div className="bg-[#fbbf24] dark:bg-[#451a03] w-[100%] h-[50%] rounded-b-full absolute rotate-180 bottom-0 -right-[50%] border-[2px] border-black/20 dark:border-white/20" />
    </div>
  );
};

export default ProfileAvatar;
