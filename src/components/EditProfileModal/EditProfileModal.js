import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function EditProfileModal({ onClose, isOpen, handleUpdate }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    handleUpdate({
      name: values.name,
      avatar: values.avatar,
      userName: values.username,
    });
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

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

      <label className="my-3">
        <p className="mb-4 text-xl font-[Poppins] font-bold tracking-wider">
          UserName
        </p>
        <input
          type="text"
          name="username"
          minLength="4"
          maxLength="30"
          required
          placeholder="Username"
          value={values.username || ""}
          onChange={handleChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
        {errors.username && <div className="m-1 text-error">{errors.username}</div>}
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
          value={values.avatar || ""}
          onChange={handleChange}
          className="input bg-transparent border-violet-800 border-2 w-full"
        />
        {errors.avatar && <div className="m-1 text-error">{errors.avatar}</div>}
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
