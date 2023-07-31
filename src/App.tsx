import AboutText from "./AboutText";
import AboutSection from "./AboutSection";
import Nav from "./Nav";

function App() {
  return (
    <main style={{ height: "100%" }}>
      <Nav />
      <AboutSection>
        <AboutText />
      </AboutSection>
    </main>
  );
}

export default App;
