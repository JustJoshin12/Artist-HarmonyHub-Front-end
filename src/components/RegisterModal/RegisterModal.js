import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function RegisterModal({ onClose, isOpen, handleRegistration}) {

  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    handleRegistration({
      name: values.name,
      userName: values.username,
      password: values.password,
      email: values.email,
      avatar: values.avatar,
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
      title="Register"
      buttonText="sign up"
    >
      <label className="my-1 md:my-3">
        <p className="mb-1 md:mb-4 md:text-xl font-[Poppins] font-bold tracking-wider">
          Name
        </p>
        <input
          type="text"
          name="name"
          minLength="4"
          maxLength="30"
          required
          placeholder="Name"
          value={values.name || ""}
          onChange={handleChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
        {errors.name && <div className="m-1 text-error">{errors.name}</div>}
      </label>
      <label className="my-1 md:my-3">
        <p className="mb-1 md:mb-4 md:text-xl font-[Poppins] font-bold tracking-wider">
          User Name
        </p>
        <input
          type="text"
          name="username"
          minLength="4"
          maxLength="30"
          required
          placeholder="UserName"
          autoComplete="username"
          value={values.username}
          onChange={handleChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
        {errors.username && <div className="m-1 text-error">{errors.username}</div>}
      </label>
      <label className="my-1 md:my-3">
        <p className="mb-1 md:mb-4 md:text-xl font-[Poppins] font-bold tracking-wider">
          Password
        </p>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          required
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
        {errors.password && <div className="m-1 text-error">{errors.password}</div>}
      </label>
      <label className="my-1 md:my-3">
        <p className="mb-1 md:mb-4 md:text-xl font-[Poppins] font-bold tracking-wider">
          Email
        </p>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
        {errors.email && <div className="m-1 text-error">{errors.email}</div>}
      </label>
      <label className="my-1 md:my-3">
        <p className="mb-1 md:mb-4 md:text-xl font-[Poppins] font-bold tracking-wider">
          Avatar
        </p>
        <input
          type="url"
          name="avatar"
          required
          placeholder="URL"
          value={values.avatar || ""}
          onChange={handleChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
        {errors.avatar && <div className="m-1 text-error">{errors.avatar}</div>}
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
