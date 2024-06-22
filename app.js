const heading = React.createElement("div", { id: "greeting1" }, [
  React.createElement("div", { id: "greeting" }, [
    React.createElement("h1", { id: "ram" }, "I'm Ram1"),
    React.createElement("h2", { id: "ram" }, "I'm Ram2"),
  ]),
  React.createElement("div", { id: "greeting" }, [
    React.createElement("h1", { id: "ram" }, "I'm Ram1"),
    React.createElement("h2", { id: "ram" }, "I'm Ram2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("div"));
root.render(heading);
