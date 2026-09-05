import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] items-center"
    >
      <Container>
        <div className="max-w-4xl">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Software Developer
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#171717] sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            Hi, I'm Levi.
            <span className="block">
             I build softwares to simplify operations.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg dark:text-gray-400">
            I develop high-impact web and mobile applications built on clean, 
            reliable, and maintainable software design principles.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">
              View Projects
            </Button>

            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;