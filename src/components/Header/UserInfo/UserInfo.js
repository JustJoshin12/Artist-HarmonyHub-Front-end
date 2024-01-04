function UserInfoIcon({data}) {
  return (
    <div className="flex items-center pt-6 justify-end md:pt-4">
      <div className="flex flex-col items-end pr-5">
        <h2 className="text-white font-bold text-2xl font-['Oswald'] md:text-lg lg:text-2xl xl:text-4xl">
          {data.userName}
        </h2>
        <p className="text-white font-semibold text-base font-mono  lg:text-[16px] xl:text-xl">
          {data.name}
        </p>
      </div>
      <img
        className="rounded-full w-20 h-auto ring-1 sm:w-24 ring-purple-800 ring-offset-8 ring-offset-black object-center lg:w-28"
        src={data.avatar}
        alt="avatar logo"
      />
    </div>
  );
}

export default UserInfoIcon;
