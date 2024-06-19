import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonPossible = {
  href: string;
  name: string;
};

export default function Button({ name, href }: ButtonPossible) {
  return (
    <Link className={styles.button} href={href}>
      {name}
    </Link>
  );
}
