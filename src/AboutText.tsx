import Link from "./Link";
import Spacer from "./Spacer";
import Text from "./Text";
import styles from "./AboutText.module.css";

export default function AboutText() {
  return (
    <article className={styles.container}>
      <Text>Hi there,</Text>
      <Spacer size={0.25} />
      <Text type="large">I'm Michael.</Text>
      <Spacer size={0.5} />
      <Text type="large">A Software Engineer And Oil Painter from London.</Text>
      <Spacer size={3} />
      <Text>
        Currently a Senior Software Engineer at{" "}
        <Link label="TradingView" url="https://www.tradingview.com/" />
      </Text>
      <Spacer />
      <Text>
        I have 6+ years of commercial experience building web and mobile applications with TypeScript, React and React Native.
      </Text>
      <Spacer />
      <Text>
        <Link label="My background in art and design" url="https://www.instagram.com/michaelsydneymoore/" />
        {" "}means I can also lead on visual direction, prototyping, UX and product thinking, taking ideas from rough concepts through to polished, production-ready interfaces. I’m strongest where frontend engineering, design and product ownership meet.
      </Text>
      <Spacer />
      <Text>
        Outside of work, I build and launch my own products end to end, from market validation and product design through to development and go-to-market. These include interview preparation tools for engineers, a dating app for people who do not drink, and{" "}
        <Link label="Plastic Brains" url="https://www.plastic-brains.com/" />, my latest project, which uses neuroplasticity and learning-based research to support better therapy outcomes.      </Text>
    </article>
  );
}
