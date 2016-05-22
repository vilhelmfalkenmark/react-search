import React from "react";
import ReactDOM from "react-dom";
import Members from "./Members.js";
import Search from "./Search.js";

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
     visible: true,
     image: "dude4.jpg"
    },
    {
     id: 3,
     name: "lars hansson",
     age: 15,
     sex: 1, // Male
     visible: true,
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
     visible: true,
     image: "girl3.jpg"
    },
    {
     id: 6,
     name: "vilhelm falkenmark",
     age: 29,
     sex: 1, // Male
     visible: true,
     image: "dude8.jpg"
    },
    {
     id: 7,
     name: "johanna falkenmark",
     age: 28,
     sex: 2,
     visible: true,
     image: "girl4.jpg"
    }
   ]
  }
 };

findMember(input , sex ) {
 // console.log(sex);
  let newArray = [];
  let oldArray = this.state.members;
  for (let i = 0; i < oldArray.length; i++) {
    newArray.push(oldArray[i]);
    if(oldArray[i].name.indexOf(input.toLowerCase()) >= 0 && ( oldArray[i].sex == sex || sex ==  0 ) )
    {
     // console.log("Kommer in på true "+ sex);
     oldArray[i].visible = true;
    }
    else {
     // console.log("Kommer in på false "+ sex);
     oldArray[i].visible = false;
    }
  }
  this.setState({
   members: newArray
  })
}



filterGender(sex) {
 // let newArray = [];
 // let oldArray = this.state.members;
 // for (let i = 0; i < oldArray.length; i++) {
 //   newArray.push(oldArray[i]);
 //   if(oldArray[i].sex != sex && sex != 0 )
 //   {
 //    oldArray[i].visible = false;
 //   }
 //   else {
 //    oldArray[i].visible = true;
 //   }
 // }
 // this.setState({
 //  members: newArray
 // })
}



 render() {
  return (
   <div className="app-container container">
    <h2>Sök medlemsregister</h2>
     <p>Antal träffar: </p>
    <Search members ={this.state.members} findMember = {::this.findMember} filterGender = {::this.filterGender}/>
    <Members members ={this.state.members} />
   </div>
  )
 }
}
