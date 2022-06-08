import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaShoppingCart } from "react-icons/fa";

import { useCart } from "../hooks/use-cart.js";

import products from "../products.json";

export default function Home() {
  const { addToCart, subtotal, quantity, checkout } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Stickers Store | Next.js </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Stickers Store</h1>

        <p className={styles.description}>The best sticker swag on the web!</p>

        <ul className={styles.cart}>
          <li>
            <strong>Items:</strong> {quantity}
          </li>
          <li>
            <strong>Total:</strong> RM{subtotal}.00
          </li>
          <li>
            <button className={`${styles.button} ${styles.cartButton}`} onClick={checkout}>
              <FaShoppingCart />
              Check Out
            </button>
          </li>
        </ul>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, image, description, price } = product;
            return (
              <li key={id} className={styles.card}>
                <Link href={`/products/${id}`}>
                  <a>
                    <Image width={250} height={250} src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>RM {price}.00</p>
                    <p>{description}</p>
                    <p>
                      <button
                        className={styles.button}
                        onClick={(e) => {
                          e.preventDefault;
                          addToCart({ id });
                        }}
                      >
                        Buy
                      </button>
                    </p>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>Made with ❤️ by Kamal Redzwan </p>
      </footer>
    </div>
  );
}
