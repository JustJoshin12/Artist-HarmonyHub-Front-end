import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function LoginModal({ onClose, isOpen, handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({
      email: email,
      password: password,
    });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
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
          Email
        </p>
        <input
          type="text"
          name="email"
          required
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
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
          required
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="current-password"
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
