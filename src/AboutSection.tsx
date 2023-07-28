import React from "react";
import styles from "./AboutSection.module.css";

type Props = {
  children: React.ReactNode;
};

export default function AboutSection({ children }: Props) {
  return <section className={styles.container}>{children}</section>;
}
