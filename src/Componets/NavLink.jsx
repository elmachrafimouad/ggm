const NavLink = ({ title, classProps }) => {
  const goToSection = (sectionID) => {
    const anchor = document.querySelector(`#${sectionID}`);
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <li
      className={`cursor-pointer text-sm  lg:text-lg font-light capitalize ${classProps} text-gray-300 md:hover:text-primary transition-colors delay-75`}
      onClick={() => goToSection(title.link)}
    >
      <link className="text-lg"></link>
      {title.title}
    </li>
  );
};

export default NavLink;
