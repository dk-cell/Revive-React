import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// React Element (object)

//React.createElement => ReactElement ->js Object -> HTMlElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Hello here");

// jsx -> transpiled before it reaches to JS - parcel - Babel(tranpiler (jsx->react))
//jsx element is also object end of the day
//JSX -> React.createElement->ReactElement ->js Object -> HTMlElement(render)
const jsxHeading = <h1 id="heading">Hello i'm jsx</h1>;

const Title = () => {
  return <h1>I'm title</h1>;
};

//Read about Babel

//Attribute will be in camel case only

const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      <Title />
      <Title></Title>
      {/* all above 3 statement are same they will include title component here */}
      {jsxHeading}
      {/* {} -> this excutes any piece of js variable or console.log */}
      <h1 className="heading">I'm heading</h1>;
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("div"));

root.render(<HeadingComponent />);
