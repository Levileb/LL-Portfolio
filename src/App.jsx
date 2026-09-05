import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import useTheme from "./hooks/useTheme";

import KineticGrid from "./components/ui/KineticGrid";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <KineticGrid theme={theme}>
      <div className="min-h-screen text-[#171717] transition-colors duration-300 dark:text-white">

        <Header
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>

        <Footer />

      </div>
    </KineticGrid>
  );
}

export default App;