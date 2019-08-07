import React from "react";

function SpanGenerator({ text }) {
  return React.createElement(`span`, {}, text);
}

export default SpanGenerator;
