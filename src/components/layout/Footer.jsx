import Container from "../ui/Container";
import Logo from "../common/Logo";

function Footer() {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-white/10">
      <Container>
        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">

          <Logo />

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

        </div>

        <div className="border-t border-gray-200 py-5 dark:border-white/10">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Levi Ledesma. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;