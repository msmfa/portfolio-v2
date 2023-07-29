import styles from "./Text.module.css";

type Props = {
  children: React.ReactNode;
  type?: "normal" | "large";
};

export default function Text({ children, type = "normal" }: Props) {
  return <p className={styles[type]}>{children}</p>;
}
