import AboutText from "./AboutText";
import AboutSection from "./AboutSection";
import Nav from "./Nav";

function App() {
  return (
    <main>
      <Nav />
      <AboutSection>
        <AboutText />
      </AboutSection>
    </main>
  );
}

export default App;
