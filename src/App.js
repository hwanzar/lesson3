import React from "react";
import "./App.css";

const data = [
    {
        id: 0,
        name: "gia",
        age: 20,
    },
    {
        id: 1,
        name: "abc",
        age: 20,
    },
    {
        id: 2,
        name: "xyz",
        age: 20,
    },
];

function NameCard(props) {
    return (
        <div className="card">
            <div className="name">Name: {props.name}</div>
            <div className="age">Age: {props.age}</div>
        </div>
    );
}

const NameCard2 = (props) => {
    return (
        <div className="card">
            <div className="name">Name: {props.name}</div>
            <div className="age">Age: {props.age}</div>
        </div>
    );
};
// function NameCard(props) {
//     return (

//     );
// }
function App() {
    return (
        <div className="wrapper">
            <div>{data.map((item) => NameCard(item))}</div>
            <div>{data.map((item2) => NameCard2(item2))}</div>
        </div>
    );
}
// ReactDOM.render(
//     <div>
//         <NameCard name="zarr" age="20" />
//         <NameCard name="Bob" age="20" />
//         <NameCard name="Cris" age="20" />
//     </div>,
//     document.getElementById("root") //WHAT IS THIS
// );
export default App;
