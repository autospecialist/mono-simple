import React, { Component } from "react";
import Hello from "@common/foo/Hello";
import SpanCreator from "@core/boo/SpanCreator";


class App extends Component {
  render() {
    return (
      <>
        <Hello level="1" title="Hello, Alice!"/>
        <Hello level="2" title="Yes, that's it! Said the Hatter with a sigh, it's always tea time." />
        <Hello level="3" title="Well, I never heard it before, but it sounds uncommon nonsense." />
        <SpanCreator text="Curioser and curioser..." />
      </>
    );
  }
}

export default App;
