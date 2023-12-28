import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function LoginModal({ onClose, isOpen, handleLogin }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    handleLogin({
      email: values.email,
      password: values.password,
    });
  };

  useEffect(() => {
    if (isOpen) {
      resetForm()
    }
  }, [isOpen,resetForm]);

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
          minLength="6"
          maxLength="30"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
          required
          placeholder="email"
          value={values.email || ""}
          onChange={handleChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
        {errors.name && <div className="m-1 text-error">{errors.name}</div>}
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
          value={values.password || ""}
          onChange={handleChange}
          autoComplete="current-password"
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
        {errors.name && <div className="m-1 text-error">{errors.name}</div>}
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
