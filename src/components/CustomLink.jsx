function CustomLink({ href = "#", children }) {
  return (
    <a
      href={href}
      className="text-sky-600 underline hover:text-yellow-500"
    >
      {children}
    </a>
  );
}

export default CustomLink;
