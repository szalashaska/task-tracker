import PropTypes from "prop-types";
import { useLocation } from "react-router-dom"; // Helps keep track of the route we are on, here we will disable the "add/remove" button

import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   console.log("click");
  // };
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          onClick={onAdd}
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
        />
      )}
    </header>
  );
};
// Default props, if nothing is passed
Header.defaultProps = {
  title: "Task Tracker",
};

// Checks if passed value is string, adds required check, do not forget about default pops
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// Change styl inline
//* <h1 style={headingStyle}>{title}</h1>
// const headingStyle = { color: "red", background: "black" };

export default Header;
