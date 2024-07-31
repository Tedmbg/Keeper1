import React from "react";

function Footer() {
  // get the year
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p> Copyright © {year}</p>
    </footer>
  );
}

export default Footer;
