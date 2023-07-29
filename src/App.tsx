import AboutText from "./AboutText";
import AboutSection from "./AboutSection";
import Nav from "./Nav";
import ContactSection from "./ContactSection";
import Spacer from "./Spacer";

function App() {
  return (
    <main>
      <Nav />
      <AboutSection>
        <AboutText />
        <Spacer size={6} />
        <ContactSection />
      </AboutSection>
    </main>
  );
}

export default App;
