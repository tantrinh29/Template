import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="w-full overflow-x-hidden">
        <Header />
        <div className="w-full  pt-[30px] pb-[60px]">{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
