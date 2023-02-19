import Link from "next/link";

import { SvgLink } from "@/components/icon";

import styles from "./Button.module.scss";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={styles.button}>
        <span>{children}</span>
        <span className={styles.icon}>
          <SvgLink width={16} height={16} stroke="#fff" />
        </span>
      </a>
    </Link>
  );
};
