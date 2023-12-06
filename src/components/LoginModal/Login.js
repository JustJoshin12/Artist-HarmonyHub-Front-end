import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function LoginModal({ onClose, isOpen }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username: userName,
      password: password,
    });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setUserName("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      title="Login"
      buttonText="sign in"
    >
      <label className="my-3">
        <p className="mb-4 text-xl font-[Poppins] font-bold tracking-wider">
          UserName
        </p>
        <input
          type="text"
          name="username"
          required
          placeholder="username"
          value={userName}
          onChange={handleUserNameChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
      </label>
      <label className="my-3">
        <p className="mb-4 text-xl font-[Poppins] font-bold tracking-wider">Password</p>
        <input
         type="password"
         name="password"
         required
         placeholder="password"
         value={password}
         onChange={handlePasswordChange}
         className="input bg-transparent border-violet-800 border-2 w-full"
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
