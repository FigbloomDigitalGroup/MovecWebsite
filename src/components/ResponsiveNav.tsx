import { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => setShowNav(true);
  const closeNav = () => setShowNav(false);

  return (
    <header role="banner">
      <Navbar openNav={openNav} />

      <MobileNav
        showNav={showNav}
        closeNav={closeNav}
      />
    </header>
  );
};

export default ResponsiveNav;