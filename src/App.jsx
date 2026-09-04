import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import useTheme from "./hooks/useTheme";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-[#0A0A0A] dark:text-white">
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
  );
}

export default App;