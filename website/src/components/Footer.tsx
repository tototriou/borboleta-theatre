import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.designedBy}>
        Designed by{" "}
        <a
          href="https://mon-portfolio-sigma.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thomas Triouleyre
        </a>
      </div>
      <p className={styles.copyright}>&copy; 2024 Thomas Triouleyre. All rights reserved</p>
    </footer>
  );
}
