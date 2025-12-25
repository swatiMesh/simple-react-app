import { Link } from "react-router-dom";
import { socialLinks } from "../json/data";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="Tours" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <nav
          className={
            props?.isOpen ? "nav-link links show-links" : "nav-link links"
          }
        >
          <ul className="nav-links" id="nav-links">
            <li>
              {" "}
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav-link" to="/tours">
                Tours
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="nav-icons">
          {socialLinks.map(({ href, Icon, icon }) => {
            return (
              <li>
                <a href={href} target="_blank" rel="noreferrer">
                  <i className={icon + ' nav-icon'} ></i>
                  {/* <Icon size={20} color="blue" /> */}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
