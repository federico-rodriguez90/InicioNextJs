import React, { FC } from "react";
import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar: FC = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((item, index) => (
        <ActiveLink key={index} text={item.text} href={item.href} />
      ))}
    </nav>
  );
};
{
  /* <ActiveLink text="Home" href="/" />
<ActiveLink text="About" href="/about" />
<ActiveLink text="Contact" href="/contact" />
<ActiveLink text="Pricing" href="/pricing" /> */
}
