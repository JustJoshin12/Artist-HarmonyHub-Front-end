import "./UserInfo.css";

function UserInfoIcon() {
  return (
    <div className="user-info">
      <div className="user-info__container">
        <h2 className="user-info__user-name">ThatBoiJosh</h2>
        <p className="user-info__real-name">Joshua Smith</p>
      </div>
      <img
        className="user-info__avatar"
        src="https://pbs.twimg.com/profile_images/1555582345733873664/vkDRRt56_400x400.jpg"
        alt="avatar logo"
      />
    </div>
  );
}

export default UserInfoIcon;
