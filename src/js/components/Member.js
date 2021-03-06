import React from "react";
import ReactDOM from "react-dom";


export default class Member extends React.Component {
 render() {
  return (
   <div className="single-member-container col-sm-4">
   <h4 className="capitalize">{ this.props.member.name}</h4>
   <div className="member-image-container">
    <img src = {"images/"+this.props.member.image} alt = {"bild på "+this.props.member.name} className="member-portrait" />
   </div>
    <div className="member-info-container">
     <p>{ this.props.member.age } år gammal</p>
     <p>{ this.props.member.sex == 1 ? "Man" : "Kvinna" }</p>
      <p className="capitalize">{ this.props.member.title }</p>
       <button type="button" className="btn readmore-btn">Läs mer</button>
    </div>
   </div>
  )
 }
}
