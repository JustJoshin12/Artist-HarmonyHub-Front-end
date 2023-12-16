import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function EditProfileModal({ onClose, isOpen, handleUpdate }) {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate({
      name: name,
      avatar: avatar,
      userName: userName,
    });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setAvatar("");
      setUserName("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      title="Edit Profile"
      buttonText="Save"
    >
      <label className="my-3">
        <p className="mb-4 text-xl font-[Poppins] font-bold tracking-wider">
          Name
        </p>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
      </label>
      <label className="my-3">
        <p className="mb-4 text-xl font-[Poppins] font-bold tracking-wider">
          UserName
        </p>
        <input
          type="text"
          name="username"
          required
          placeholder="Username"
          value={userName}
          onChange={handleUserNameChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
      </label>
      <label className="my-3">
        <p className="mb-4 text-xl font-[Poppins] font-bold tracking-wider">
          Avatar
        </p>
        <input
          type="url"
          name="avatar"
          required
          placeholder="URL"
          value={avatar}
          onChange={handleAvatarChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
