import { Link } from "react-router-dom"; // stop page from reloading after changing  route, use Link instead of a tag

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021 </p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
