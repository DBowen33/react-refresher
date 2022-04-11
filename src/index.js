import React from "react";
import ReactDOM from "react-dom";

// Create a new component. This component should produce some html
const App = () => {
    return <div>Hi!</div>;
}
// Take component's generated html and put on page
ReactDOM.render(<App />, document.querySelector('.container')); //<App /> is instance of App class or component
