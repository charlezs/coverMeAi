import React from "react";
import Footer from "./Footer";
import Navigation from "./Navbar";

type Child = {
  children: any;
};

function Layout({ children }: Child) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
