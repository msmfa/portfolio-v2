import Link from "./Link";
import Spacer from "./Spacer";
import Config from "./constants";
import Text from "./Text";
import styles from "./AboutText.module.css";

export default function AboutText() {
  return (
    <article className={styles.container}>
      <Text>Hi there,</Text>
      <Spacer size={0.25} />
      <Text type="large">I'm Michael.</Text>
      <Spacer size={0.5} />
      <Text type="large">A Software Engineer from London.</Text>
      <Spacer size={3} />
      <Text>
        Currently a Lead Frontend developer at{" "}
        <Link label="Browser" url="https://www.browserlondon.com/" />
      </Text>
      <Spacer />
      <Text>
        Most of my 4+ years commercial experience is in building the front ends
        of web and mobile applications. But I also enjoy working across the
        whole stack. My main tools are Typescript, React and React Native and
        Next.
      </Text>
      <Spacer />
      <Text>
        Outside of work I like playing with Rust, Preact and whatever the latest
        front end flavour is!
      </Text>
      <Spacer />
      <Text>
        If I'm not at work I'm probably working on{" "}
        <Link label="Sober App" url="https://www.sober-app.co.uk/" /> (React
        Native + Express + Mongo),{" "}
        <Link label="Painting" url={Config.instagram} /> or Boxing (not at the
        same time).
      </Text>
    </article>
  );
}
