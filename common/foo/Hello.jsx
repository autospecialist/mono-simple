import React from "react";

// Dummy component to play with monorepo

function Heading({ level = "1", title }) {
  let prefix = ' "'
  let postfix = '"'
  return React.createElement(`h${level}`, {}, level > 1 ? prefix + title + postfix : title);
}

export default Heading;
