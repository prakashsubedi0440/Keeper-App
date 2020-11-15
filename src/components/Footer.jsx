import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ by Prakash Subedi {year}</p>
    </footer>
  );
}

export default Footer;
