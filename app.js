//  <div id="parent">
// // <div id="child">
// //     <h1>i  am h1 tag</h1>
// <h2>i  am h1 tag</h2>
// // </div>
// / <div id="child">
// //     <h1>i  am h1 tag</h1>
// <h2>i  am h1 tag</h2>
// // </div>
// // </div> 



const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" ,}, [
        React.createElement("h1", {}, "i am h1 tag")
        , React.createElement("h2", {}, "i am h2 tag")]),
    React.createElement("div", { id: "child2" , }, [
        React.createElement("h1", {}, "i am h3 tag"), 
        React.createElement("h2", {}, "i am h4 tag")])]
    )






 console.log(parent)

// const parent = React.createElement("h1", { id: "heading", xyz: "abc" }, "hello world from react !");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);