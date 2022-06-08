import { Link } from "react-router-dom"; // stop page from reloading after changing  rout, use Link instead of a tag

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default About;
