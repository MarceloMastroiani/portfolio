import ButtonComponent from "../ui/ButtonComponent/ButtonComponent";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav className="nav-component">
      <a href="#">
        <ButtonComponent prop="About me" />
        {/* <span className="glassMorphism">About</span> */}
      </a>

      <a href="#">
        <ButtonComponent prop="Projects" />
      </a>

      <a href="#">
        <ButtonComponent prop="Skills" />
      </a>

      <a href="#">
        <ButtonComponent prop="Contact" />
      </a>
    </nav>
  );
}
