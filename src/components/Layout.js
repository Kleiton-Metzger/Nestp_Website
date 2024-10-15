import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 pb-8">
        <div className="container mx-auto px-4 min-h-[calc(100vh-theme(spacing.16)-theme(spacing.8)-theme(spacing.16))]">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
