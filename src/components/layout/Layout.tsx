import React, { FC, Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface layoutProps {
  children: React.ReactElement;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>
      {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
