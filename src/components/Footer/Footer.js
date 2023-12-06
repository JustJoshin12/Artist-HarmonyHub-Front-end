import logo from "../../images/websiteLogo.png";

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-transparent text-primary-content mt-12">
      <aside>
        <img src={logo} className="h-[70px] w-[70px]" />
        <div className="font-bold text-2xl mb-4">
          Artist HarmonyHub
          <p className="text-lg mt-4">
            "Discover, Connect, Groove: Artist HarmonyHub Where Your Favorite
            Tunes Find Their Perfect Beat!"
          </p>
        </div>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
    </footer>
  );
}

export default Footer;
