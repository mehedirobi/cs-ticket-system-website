import React from "react";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
  { name: "Changelog", path: "/changelog" },
  { name: "Blog", path: "/blog" },
  { name: "Download", path: "/download" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Brand */}
        <div className="text-lg font-bold">
          CS Ticket System © {new Date().getFullYear()}
        </div>

        {/* Center: Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="hover:text-gray-900 text-sm transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Social / Contact */}
        <div className="flex gap-4">
          <a
            href="mailto:contact@csticketsystem.com"
            className="hover:text-gray-900 text-sm transition"
          >
            Email
          </a>
          <a
            href="https://github.com/yourrepo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 text-sm transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;