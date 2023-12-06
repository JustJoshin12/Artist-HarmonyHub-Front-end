import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import LoginModal from "../LoginModal/Login";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");


  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleEditModal = () => {
    setActiveModal("edit");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  }

  const handleRegisterModal = () => {
    setActiveModal("register");
  }

  return (
    <div className="bg-black p-10 text-white flex flex-col">
      <Header onEditModal={handleRegisterModal} />
      <Main />
      <Footer />
      {activeModal === "edit" && <EditProfileModal onClose={handleCloseModal} />}
      {activeModal === "login" && <LoginModal onClose={handleCloseModal}/>}
      {activeModal === "register" && <RegisterModal onClose={handleCloseModal}/>}
    </div>
  );
}

export default App;
