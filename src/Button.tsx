import styles from "./Button.module.css";
import Text from "./Text";

type Props = {
  label: string;
  onClick: () => void;
};

export default function Button({ label, onClick }: Props) {
  return (
    <button onClick={onClick} className={styles.button}>
      <Text>{label}</Text>
    </button>
  );
}
