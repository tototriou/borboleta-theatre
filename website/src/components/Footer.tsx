import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.designedBy}>
        Designed by{" "}
        <a
          href="https://www.linkedin.com/in/thomas-triouleyre-9827521b8/?originalSubdomain=fr"
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
