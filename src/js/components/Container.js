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
     image: "dude4.jpg",
     title: "chef"
    },
    {
     id: 2,
     name: "lars hansson",
     age: 15,
     sex: 1,
     image: "dude5.jpg",
     title: "chef"
    },
    {
     id: 3,
     name: "mikaela åkerlund",
     age: 65,
     sex: 2, // Female
     visible: true,
     image: "girl4.jpg",
     title: "anställd"
    },
    {
     id: 4,
     name: "lina falkenberg",
     age: 48,
     sex: 2,
     image: "girl3.jpg",
     title: "chef"
    },
    {
     id: 5,
     name: "vilhelm falkenmark",
     age: 29,
     sex: 1,
     image: "dude8.jpg",
     title: "anställd"
    },
    {
     id: 6,
     name: "johanna falkenmark",
     age: 28,
     sex: 2,
     image: "girl4.jpg",
     title: "chef"
    },
    {
     id: 7,
     name: "lovisa bistrop",
     age: 16,
     sex: 2,
     image: "girl2.jpg",
     title: "anställd"
    },
    {
     id: 8,
     name: "Håkan Hellqvist",
     age: 33,
     sex: 1,
     image: "dude1.jpg",
     title: "chef"
    },
    {
     id: 9,
     name: "mikael fogelström",
     age: 37,
     sex: 1,
     image: "dude6.jpg",
     title: "anställd"
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
