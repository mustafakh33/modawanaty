import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 border-t">
      <div className="container">
        <p className="text-sm">جميع الحقوق محفوظة &copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;