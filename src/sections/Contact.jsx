import { useState } from "react";

import Container from "../components/ui/Container";

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "levi.19johnledesma@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-gray-200 py-24 dark:border-white/10 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">

          {/* Section Label */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-white">
              Contact
            </p>
          </div>

          {/* Contact Content */}
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl dark:text-white">
              Let's work together.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
              Have a project, idea, or opportunity you'd like to discuss?
              Feel free to reach out through email, LinkedIn, or GitHub.
            </p>

            {/* Contact Links */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              {/* Email */}
              <button
                type="button"
                onClick={copyEmail}
                className="group flex flex-col items-start gap-5 rounded-lg border border-gray-200 bg-white p-6 text-left transition-colors duration-200 hover:border-blue-400 dark:border-white/10 dark:bg-[#111111] dark:hover:border-white/30"
              >
                <div className="flex w-full items-center justify-between">

                  {/* Mail SVG */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600 dark:text-white"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {copied ? (
                    /* Check SVG */
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-600 dark:text-white"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    /* Copy SVG */
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-white"
                      aria-hidden="true"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="11"
                        height="11"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M15 9V6C15 4.89543 14.1046 4 13 4H6C4.89543 4 4 4.89543 4 6V13C4 14.1046 4.89543 15 6 15H9"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </div>

                <div>
                  <h3 className="font-semibold text-[#171717] dark:text-white">
                    Email
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {copied ? "Email copied!" : "Copy email address"}
                  </p>
                </div>
              </button>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/levi-john-ledesma-252a29259/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start gap-5 rounded-lg border border-gray-200 bg-white p-6 transition-colors duration-200 hover:border-blue-400 dark:border-white/10 dark:bg-[#111111] dark:hover:border-white/30"
              >
                <div className="flex w-full items-center justify-between">

                  {/* LinkedIn SVG */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600 dark:text-white"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45H16.9V14.9C16.9 13.58 16.87 11.88 15.05 11.88C13.2 11.88 12.92 13.32 12.92 14.79V20.45H9.37V9H12.77V10.56H12.82C13.29 9.66 14.45 8.71 16.18 8.71C19.78 8.71 20.45 11.08 20.45 14.17V20.45ZM5.36 7.43C4.22 7.43 3.3 6.51 3.3 5.37C3.3 4.23 4.22 3.31 5.36 3.31C6.5 3.31 7.42 4.23 7.42 5.37C7.42 6.51 6.5 7.43 5.36 7.43ZM7.14 20.45H3.58V9H7.14V20.45ZM22.22 0H1.77C0.79 0 0 0.77 0 1.72V22.28C0 23.23 0.79 24 1.77 24H22.22C23.2 24 24 23.23 24 22.28V1.72C24 0.77 23.2 0 22.22 0Z" />
                  </svg>

                  <span className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-white">
                    ↗
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-[#171717] dark:text-white">
                    LinkedIn
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Connect professionally
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Levileb"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start gap-5 rounded-lg border border-gray-200 bg-white p-6 transition-colors duration-200 hover:border-blue-400 dark:border-white/10 dark:bg-[#111111] dark:hover:border-white/30"
              >
                <div className="flex w-full items-center justify-between">

                  {/* GitHub SVG */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#171717] dark:text-white"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12C0 17.3 3.44 21.8 8.21 23.39C8.81 23.5 9.03 23.13 9.03 22.81C9.03 22.52 9.02 21.76 9.01 20.75C5.67 21.48 4.97 19.14 4.97 19.14C4.42 17.75 3.63 17.38 3.63 17.38C2.55 16.64 3.72 16.65 3.72 16.65C4.92 16.74 5.55 17.88 5.55 17.88C6.62 19.71 8.36 19.17 9.05 18.87C9.16 18.09 9.47 17.55 9.81 17.25C7.14 16.95 4.34 15.92 4.34 11.27C4.34 9.94 4.81 8.85 5.58 8C5.46 7.7 5.06 6.46 5.69 4.78C5.69 4.78 6.7 4.46 9 6.02C9.96 5.75 10.98 5.62 12 5.62C13.02 5.62 14.04 5.75 15 6.02C17.3 4.46 18.31 4.78 18.31 4.78C18.94 6.46 18.54 7.7 18.42 8C19.19 8.85 19.66 9.94 19.66 11.27C19.66 15.93 16.86 16.94 14.18 17.24C14.61 17.61 15.01 18.34 15.01 19.45C15.01 21.04 15 22.33 15 22.81C15 23.13 15.22 23.5 15.83 23.39C20.58 21.8 24 17.3 24 12C24 5.37 18.63 0 12 0Z" />
                  </svg>

                  <span className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-white">
                    ↗
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-[#171717] dark:text-white">
                    GitHub
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    View my work
                  </p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;

