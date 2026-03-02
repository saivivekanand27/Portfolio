import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
      © {new Date().getFullYear()} Vivek | Built with React & Tailwind
    </footer>
  );
};

export default Footer;