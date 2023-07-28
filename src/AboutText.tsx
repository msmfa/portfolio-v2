import Spacer from "./Spacer";

export default function AboutText() {
  return (
    <article>
      <p>
        I'm Michael. A Software Engineer from London.
        <Spacer size={2} />
        Currently a Lead Frontend developer at{" "}
        <a href="https://www.browserlondon.com/" target="blank">
          Browser
        </a>
        <Spacer />
        <p>
          Most of my commercial experience is in building the front ends of web
          and mobile applications in Typescript, React and React Native but I
          work across the whole stack when I need to.
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
        <a href="https://www.sober-app.co.uk/" target="blank">
          Sober App
        </a>{" "}
        (React Native + Express + Mongo)
      </p>
      <Spacer />

      <p>
        In my spare time I like{" "}
        <a href="https://www.instagram.com/michaelsydneymoore" target="blank">
          painting
        </a>{" "}
        and boxing (not at the same time).
      </p>
    </article>
  );
}
