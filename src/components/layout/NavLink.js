import React from "react";
import PropTypes from "prop-types";
import { NavLink as Link } from "react-router-dom";

const NavLink = props => {
  const { url, title, otherDomain, closeSidebar } = props;

  if (otherDomain) {
    return (
      <a href={url} className="nav-item nav-link  mb-10px">
        {title}
      </a>
    );
  }

  return (
    <Link
      className="nav-item nav-link  mb-10px"
      onClick={closeSidebar}
      to={url}
    >
      {title}
    </Link>
  );
};

NavLink.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
};

export default NavLink;
