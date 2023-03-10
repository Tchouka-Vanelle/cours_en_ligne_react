//est le composant principale de notre application (le composant qui englobe tous les autres)
import React from "react";
import "./layout.css";
import { GlobalStyles } from "../../styles/GlobalStyles";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
