import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <dic className={styles.top__container}>
      <div></div>
      <ul className={styles.top__list}>
        <li className={styles.li}>
          <img
            src="https://www.seekpng.com/png/full/323-3232715_morocco-flag-png-angel-tube-station.png"
            alt="morocco flag"
          />
          <span>Morocco / usd</span>
        </li>
        <li className={styles.li}>
          <MdSecurity />
          <span>Buyer Protection</span>
        </li>
        <li className={styles.li}>
          <span>Customer Service</span>
        </li>
        <li className={styles.li}>
          <span>Help</span>
        </li>
        <li className={styles.li}>
          <BsSuitHeart />
          <Link href="/profile/wishlist">wishlist</Link>
        </li>
        <li
          className={styles.li}
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          {loggedIn ? (
            <li className={styles.li}>
              <div className={styles.flex}>
                <img
                  src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
                  alt=""
                />
                <span>Mirzokhid</span>
                <RiArrowDropDownFill />
              </div>
            </li>
          ) : (
            <li className={styles.li}>
              <div className={styles.flex}>
                <RiAccountPinCircleLine />
                <span>Account</span>
                <RiArrowDropDownFill />
              </div>
            </li>
          )}
          {visible && <UserMenu loggedIn={loggedIn} />}
        </li>
      </ul>
    </dic>
  );
}
