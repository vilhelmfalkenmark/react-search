import React from "react";
import ReactDOM from "react-dom";


export default class Member extends React.Component {
 render() {
  return (
   <div className={this.props.visible == false ? "display-none" : "single-member-container col-sm-4"}>

   <h4 className="capitalize">{ this.props.name }</h4>
   <div className="member-image-container">
    <img src = {"images/"+this.props.portrait} alt = {"bild på "+this.props.name} className="member-portrait" />
   </div>
    <div className="member-info-container">
     <p>{ this.props.age } år gammal</p>
     <p>{ this.props.sex == 1 ? "Man" : "Kvinna" }</p>
    </div>
   </div>
  )
 }
}
