import React from "react";
import ReactDOM from "react-dom";
// import Members from "./Members.js";
import Members from "./Members.js";
// import Search from "./Search.js";

export default class App extends React.Component {
 constructor() {
  super();
  this.state = {
   members: [
    {
     id: 1,
     name: "hans nilsson",
     age: 37,
     sex: 1, // Male
     image: "dude4.jpg"
    },
    {
     id: 3,
     name: "lars hansson",
     age: 15,
     sex: 1, // Male
     image: "dude5.jpg"
    },
    {
     id: 4,
     name: "mikaela åkerlund",
     age: 65,
     sex: 2, // Female
     visible: true,
     image: "girl4.jpg"
    },
    {
     id: 5,
     name: "lina falkenberg",
     age: 48,
     sex: 2, // Female
     image: "girl3.jpg"
    },
    {
     id: 6,
     name: "vilhelm falkenmark",
     age: 29,
     sex: 1, // Male
     image: "dude8.jpg"
    },
    {
     id: 7,
     name: "johanna falkenmark",
     age: 28,
     sex: 2,
     image: "girl4.jpg"
    }
   ]
  }
 };

 render() {
  return (
   <div className="app-container container">
    <h2>Sök medlemsregister</h2>
     {/*<p>Antal träffar: </p>*/}
    <Members members ={this.state.members} />


   </div>
  )
 }
}
