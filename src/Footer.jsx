import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        {length} List {length < 2 ? "Item" : "Items"}
      </p>
    </footer>
  );
};

export default Footer;
