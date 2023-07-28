import styles from "./Nav.module.css";

export default function Nav() {
  function handleEmailClick() {
    window.location.href = "mailto:codemoore@outlook.com";
  }

  function handlePdfClick() {
    window.open("path/to/pdf/document.pdf", "_blank");
  }

  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <a onClick={handleEmailClick}>Contact</a>
        </li>
        <li>
          <a onClick={handlePdfClick}>CV</a>
        </li>
        <li>
          <a href="https://github.com/msmfa" target="_blank" rel="noopener">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}
