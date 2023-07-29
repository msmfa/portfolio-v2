import styles from "./Nav.module.css";
import Config from "./constants";

export default function Nav() {
  function handleEmailClick() {
    window.location.href = Config.email;
  }

  function handlePdfClick() {
    window.open(Config.pdf, "_blank");
  }

  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <a onClick={handlePdfClick}>CV</a>
        </li>
        <li>
          <a onClick={handleEmailClick}>Contact</a>
        </li>
        <li>
          <a href={Config.github} target="_blank" rel="noopener">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}
