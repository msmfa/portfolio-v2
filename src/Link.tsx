import styles from "./Link.module.css";

type Props = {
  url: string;
  label: string;
};

export default function Link({ url, label }: Props) {
  return (
    <a href={url} target="_blank" rel="noopener" className={styles.link}>
      {label}
    </a>
  );
}
