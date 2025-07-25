import styles from "./Footer.module.scss";

/**
 * Footer component that renders the application's footer section.
 * Displays a text indicating the director or creator.
 *
 * @returns {JSX.Element} The rendered footer element.
 */
export default function Footer() {
  return (
    <footer>
      <p className={styles.textfooter}>dierected by esora</p>
    </footer>
  );

  
}
