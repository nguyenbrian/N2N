import React, { Component } from "react";

export default function UIKit(props) {
  // state = { ready: false };
  // componentDidMount = () => {
  //   if (typeof window !== "undefined") {
  //     const uikit = require("uikit");
  //     const icons = require("uikit/dist/js/uikit-icons.min");
  //     uikit.use(icons);
  //     this.setState({ ready: true });
  //   }
  // };

  if (typeof window !== "undefined") {
    const uikit = require("uikit");
    const icons = require("uikit/dist/js/uikit-icons.min");
    uikit.use(icons);
  }

  return <div>{props.children}</div>;
}
