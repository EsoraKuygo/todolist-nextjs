import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonPossible = {
  href: string;
  name: string;
  // onClick?: () => void; // Uncomment if you want to handle click events

};

export default function Button({ name, href }: ButtonPossible) {
  return (
    <Link className={styles.button} href={href}>
      {/* <button className={styles.button} onClick={onClick}> */}
      {name}
    </Link>
  );
}
