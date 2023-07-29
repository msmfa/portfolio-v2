import Button from "./Button";
import styles from "./ContactSection.module.css";
import Config from "./constants";

export default function ContactSection() {
  return (
    <section className={styles.container}>
      <Button
        label="Contact me"
        onClick={() => (window.location.href = Config.email)}
      />
    </section>
  );
}
