// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

// console.log(heading);


const parent  = React.createElement("div", {id: "parent"}, 
 [React.createElement("div", {id: "child"}, 
    [React.createElement("h1",{}, "I'm the h1 tag"), React.createElement("h2",{}, "I'm the h2 tag")]
 ), React.createElement("div", {id: "child2"}, 
 [React.createElement("h1",{}, "I'm the h1 tag"), React.createElement("h2",{}, "I'm the h2 tag")]
)]
)


// const parent  = React.createElement("div", {id: "parent"}, 
//  [React.createElement("div", {id: "child", key: "child1"}, 
//     [React.createElement("h1",{key: "child11"}, "I'm the h1 tag"), React.createElement("h2",{key: "child12"}, "I'm the h2 tag")]
//  ), React.createElement("div", {id: "child2" , key: "child2"}, 
//  [React.createElement("h1",{key: "child21"}, "I'm the h1 tag"), React.createElement("h2",{key: "child22"}, "I'm the h2 tag")]
// )]
// )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);