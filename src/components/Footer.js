import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      {location.pathname !== "/about" && <Link to="/about">About</Link>}
      <p>
        Coded by{" "}
        <a
          href="https://szalashaska.github.io/my-homepage/"
          target="_blank"
          rel="noreferrer"
        >
          Kamil Petryniak
        </a>
      </p>
    </footer>
  );
};

export default Footer;
