import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <p>
        Simple task tracking app. Add your task and track them, delete when they
        are done. Make task more visible by setting important label when
        creating task or double click on existing one.
      </p>
      <br />
      <Link to="/">
        <FaArrowLeft />
        {"  "}Go back
      </Link>
    </div>
  );
};

export default About;
