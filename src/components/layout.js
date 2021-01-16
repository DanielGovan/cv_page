import React from "react";
import PropTypes from "prop-types";
import MainWrap from "./MainWrap";

const Layout = ({ children }) => {
  return <MainWrap>{children}</MainWrap>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
