
function UserInfoIcon() {
  return (
    <div className="flex items-center pt-6 justify-start md:justify-end md:pt-4">
      <div className="flex flex-col items-end pr-5">
        <h2 className="text-white font-bold text-2xl font-['Oswald'] md:text-lg lg:text-2xl xl:text-4xl">ThatBoiJosh</h2>
        <p className="text-white font-semibold text-base font-mono  lg:text-[16px] xl:text-xl">Joshua Smith</p>
      </div>
      <img
        className="rounded-full w-14 ring-1 ring-purple-800 ring-offset-8 ring-offset-black md:w-16 lg:w-20 xl:w-24"
        src="https://pbs.twimg.com/profile_images/1555582345733873664/vkDRRt56_400x400.jpg"
        alt="avatar logo"
      />
    </div>
  );
}

export default UserInfoIcon;
