
function UserInfoIcon() {
  return (
    <div className="flex items-center justify-end">
      <div className="flex flex-col items-end pr-5">
        <h2 className="text-white font-bold text-3xl font-['Oswald']">ThatBoiJosh</h2>
        <p className="text-white font-semibold text-base font-mono">Joshua Smith</p>
      </div>
      <img
        className="rounded-full w-24 ring-1 ring-purple-800 ring-offset-8 ring-offset-black"
        src="https://pbs.twimg.com/profile_images/1555582345733873664/vkDRRt56_400x400.jpg"
        alt="avatar logo"
      />
    </div>
  );
}

export default UserInfoIcon;
