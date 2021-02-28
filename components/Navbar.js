import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import useWindowDimensions from "./WindowDimensions";

export default function Navbar(props) {
  const { width } = useWindowDimensions();

  return (
    <div style={{ position: "absolute", width: "100%" }}>
      {width > 930 ? <NavbarDesktop /> : <NavbarMobile />}
    </div>
  );
}
