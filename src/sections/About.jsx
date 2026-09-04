import Container from "../components/ui/Container";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "PHP", "Laravel"],
  },
  {
    name: "Mobile",
    skills: ["React Native", "Flutter","Expo"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase","SQLite"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["DigitalOcean", "Google Cloud", "Docker", "Postman"],
  },
  {
    name: "Design & Other",
    skills: ["Figma", "Canva"],
  },
];

function About() {
  return (
    <section
      id="about"
      className="border-t border-gray-200 py-24 dark:border-white/10 sm:py-28"
    >
      <Container>
        {/* Introduction */}
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-white">
              About Me
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl dark:text-white">
              Building practical software that solves real problems.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-400">
              <p>
                I'm Levi John Ledesma, a software developer from the
                Philippines with one year of professional experience in
                software development. I graduated with a Bachelor of Science
                in Information Technology, majoring in Software Technologies,
                from West Visayas State University in 2025.
              </p>

              <p>
                I primarily work with JavaScript technologies, building web
                and mobile applications with React, React Native, Node.js,
                and Express.js. I also work with technologies such as
                Laravel and Flutter when a project requires them.
              </p>

              <p>
                I'm a curious developer who enjoys exploring new technologies
                while continuously improving the skills I already use. I
                particularly enjoy building applications that solve everyday
                business problems, automating repetitive tasks, and turning
                manual processes into practical software solutions.
              </p>

              <p>
                Outside of work, I also enjoy building small games and
                websites for businesses and people around me.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24 border-t border-gray-200 pt-16 dark:border-white/10 sm:mt-28">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-white">
                Skills
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#171717] dark:text-white">
                Work Stack
              </h3>

              <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500 dark:text-gray-400">
                Technologies and tools I use to design, build, and maintain
                software.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <h4 className="text-sm font-semibold text-[#171717] dark:text-white">
                    {category.name}
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-[#111111] dark:text-gray-300 dark:hover:border-white/30 dark:hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;