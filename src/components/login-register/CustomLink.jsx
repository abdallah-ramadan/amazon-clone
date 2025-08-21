function CustomLink({ href = "#", children }) {
  return (
    <a
      href={href}
      className="tw-text-sky-600 tw-underline hover:tw-text-yellow-500"
    >
      {children}
    </a>
  );
}

export default CustomLink;