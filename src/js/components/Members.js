import React from "react";
import ReactDOM from "react-dom";
import Member from "./Member.js";

export default class Members extends React.Component {

 render() {
  return (
   <div className="members-container row">
         {
         this.props.members.map(function(members) {
         return <Member
          key = {members.id}
          id = {members.id}
          name = {members.name}
          sex = {members.sex}
          age = {members.age}
          visible = {members.visible}
          portrait = {members.image}
          />;
         }.bind(this))
        }
  </div>
  )
 }
}
