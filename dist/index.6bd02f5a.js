const heading = React.createElement("h1", {
    id: "heading"
}, "Heading1");
const paragraph = React.createElement("p", {
    id: "paragraph"
}, "Paragraph");
const heading2 = React.createElement("h2", {
    id: "heading2"
}, "Heading2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2,
    paragraph
]);
ReactDOM.render(container, document.getElementById("root"));

//# sourceMappingURL=index.6bd02f5a.js.map
