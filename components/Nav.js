import { FaShoppingCart } from "react-icons/fa";

import styles from "../styles/Nav.module.css";

import { useCart } from "../hooks/use-cart.js";
import Link from "next/link";

const Nav = () => {
  const { subtotal, checkout } = useCart();
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.navTitle}>Space Jelly Shop</a>
      </Link>
      <p className={styles.navCart}>
        <Link href="/cart">
          <a>
            <FaShoppingCart /> ${subtotal.toFixed(2)}
          </a>
        </Link>
      </p>
    </nav>
  );
};

export default Nav;
