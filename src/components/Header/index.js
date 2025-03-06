import React from "react";
import styles from "../../styles/header.module.css";
import Image from "next/image";
import logoImage from "../../../public/logo.webp";

export default function Header() {
  return (
    <>
      <header className={styles.header__logo}>
        <Image
          src={logoImage}
          alt="kfc-logo"
          width={100}
          height="auto"
          placeholder="blur"
        />
        {/* <nav className="navbar">
          <ul>
            <li>Delivery</li>
            <li>Pickup</li>
          </ul>
        </nav> */}
      </header>
    </>
  );
}
