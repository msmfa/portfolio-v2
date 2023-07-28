import Link from "./Link";
import Spacer from "./Spacer";

export default function AboutText() {
  return (
    <article>
      <p>
        <p>Hi there,</p>
        <Spacer size={0.25} />
        <p style={{ fontSize: 40 }}>I'm Michael.</p>
        <Spacer size={0.5} />
        <p style={{ fontSize: 20 }}>A Software Engineer from London.</p>
        <Spacer size={4} />
        Currently a Lead Frontend developer at{" "}
        <Link label="Browser" url="https://www.browserlondon.com/" />
        <Spacer />
        <p>
          Most of my 4+ years commercial experience is in building the front
          ends of web and mobile applications. My main tools are Typescript,
          React and React Native.
        </p>
        <Spacer />
        <p>
          Outside of work I like playing with Rust, Preact and whatever the
          latest front end flavour is!
        </p>
      </p>
      <Spacer size={2} />
      <p>
        If I'm not at work I'm probably working on{" "}
        <Link label="Sober App" url="https://www.sober-app.co.uk/" /> (React
        Native + Express + Mongo),{" "}
        <Link
          label="Painting"
          url="https://www.instagram.com/michaelsydneymoore/"
        />{" "}
        or Boxing (not at the same time).
      </p>
    </article>
  );
}
