import React from "react";
import User from "../../components/User";
import Router from "next/router";

const authIndexPage = (props) => (
  <div>
    <button onClick={() => Router.push("/")}>Go to Main Page</button>
    <h1>The Auth Index Page - {props.appName}</h1>
    <User name={"Alejandro"} age={24} />
  </div>
);

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App (Auth)" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
