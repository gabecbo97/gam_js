import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main> {children} </main>
      <Footer />
    </div>
  );
}
Layout.protoType = {
  children: PropTypes.node.isRequired,
};
