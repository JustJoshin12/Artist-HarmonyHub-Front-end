import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function RegisterModal({ onClose, isOpen, handleRegistration}) {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: name,
      userName: userName,
      password: password,
      email: email,
      avatar: avatar,
    })
    handleRegistration({
      name: name,
      userName: userName,
      password: password,
      email: email,
      avatar: avatar,
    });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setUserName("");
      setPassword("");
      setEmail("");
      setAvatar("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      title="Register"
      buttonText="sign up"
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
          User Name
        </p>
        <input
          type="text"
          name="username"
          required
          placeholder="UserName"
          autoComplete="username"
          value={userName}
          onChange={handleUserNameChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
      </label>
      <label className="my-3">
        <p className="mb-4 text-xl font-[Poppins] font-bold tracking-wider">
          Password
        </p>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          required
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
      </label>
      <label className="my-3">
        <p className="mb-4 text-xl font-[Poppins] font-bold tracking-wider">
          Email
        </p>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
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

export default RegisterModal;
