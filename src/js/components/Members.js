import React from "react";
import ReactDOM from "react-dom";
import Member from "./Member.js";
import Search from "./Search.js";

export default class Members extends React.Component {
 constructor() {
   super();
   this.state = {
     search: '',
     sex: 0
   };
  };
//   updateSearch(event) {
//   this.setState({search: event.target.value, sex: 0})
// }

searchMember(event) {
 this.setState({search: event.target.value, sex: this.state.sex})
}
filterGender(sex) {
 this.setState({search: this.state.search, sex: sex})
}


 render() {
  let filteredMembers = this.props.members.filter(
   (member) => {
     return member.name.indexOf(this.state.search.toLowerCase()) != -1 &&
     (this.state.sex != 0 ? member.sex == this.state.sex : member.sex != this.state.sex); // Boom!
   }
 );
  return (
   <div>
   <Search searchMember = {::this.searchMember} filterGender={::this.filterGender}/>
    <div className="members-container row">
         { filteredMembers.map((member) => {
        return <Member member={member} key={member.id}/>
      })}
   </div>
  </div>
  )
 }
}
