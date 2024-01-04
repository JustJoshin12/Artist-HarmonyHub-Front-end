function ModalWithForm({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) {
  return (
    <div
      className={`fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-10 modal_type_${name} px-2 md:px-0`}
    >
      <div className="relative bg-slate-800 shadow shadow-black max-w-[496px] w-full rounded-2xl p-[28px] border-black border-4">
        <button
          type="button"
          onClick={onClose}
          className="btn btn-md btn-circle btn-ghost absolute right-2 top-2 text-black text-2xl font-mono"
        >
          X
        </button>
        <h3 className="text-black font-bold m-0 text-4xl ">{title}</h3>
        <form onSubmit={onSubmit} className="mt-5 flex flex-col">
          {children}
          <button
            type="submit"
            className="btn  text-black font-bold font-seff text-xl mt-5 md:mt-8 w-[60%] mx-auto rounded-full border-violet-900 border-2 bg-violet-800/40 hover:bg-violet-900"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
