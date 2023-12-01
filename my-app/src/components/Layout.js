// src/components/Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import backgroundImage from "../assets/images/bg/spacestation.png";
//import littleBg from "../assets/images/bg/abstract-bg.png";
const Layout = ({ children }) => {
  // const backgroundColor = "#000";
  // const textColor = "#00bfff";
  // const borderColor = "#00bfff";
  // const boxShadowColor = "#00bfff";

  // const layoutStyle = {
  //   backgroundImage: `url(${backgroundImage})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   minHeight: "100vh", // Ensure it covers the whole viewport
  //   // Add more styles as needed
  // };

  // const mainContentStyle = {
  //   //backgroundColor: backgroundColor,
  //   //backgroundImage: `url(${littleBg})`,
  //   //backgroundRepeat: 'repeat',
  //   color: textColor,
  //   width: "100%",
  //   maxWidth: "1200px",
  //   margin: "0 auto",
  //   //border: `3px solid ${borderColor}`,
  //   //boxShadow: `0 0 15px ${boxShadowColor}`,
  //   display: "flex",
  //   flexWrap: "wrap",
  //   justifyContent: "space-around",
  //   padding: "0px",
  //   borderRadius: "10px",
  // };
  return (
    <Container fluid="md" className="bg-light">
      <Row>
        <Header />
      </Row>
      <Row>
        <main>{children}</main>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Layout;
