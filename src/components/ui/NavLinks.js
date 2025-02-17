const NavLinks = () => {
    const links = [
      { href: "#home", text: "Home", active: true },
      { href: "#about", text: "About" },
      { href: "#team", text: "Team" },
      { href: "#fixtures", text: "Schedule" },
      { href: "#press", text: "Press" },
      { href: "#sponsors", text: "Sponsors" },
      { href: "#contact", text: "Contact" }
    ];
  
    return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <a 
              className={`nav-link ${link.active ? 'active' : ''}`}
              aria-current={link.active ? "page" : undefined}
              href={link.href}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  export default NavLinks