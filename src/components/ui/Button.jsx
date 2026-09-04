function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-[#0A0A0A]";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-white dark:text-[#0A0A0A] dark:hover:bg-gray-200",

    secondary:
      "border border-gray-300 bg-white text-[#171717] hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-[#0A0A0A] dark:text-white dark:hover:border-gray-500 dark:hover:bg-[#111111]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;