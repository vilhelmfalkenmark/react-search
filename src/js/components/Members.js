import React from "react";
import ReactDOM from "react-dom";
import Member from "./Member.js";
import Search from "./Search.js";
import Modal from "./Modal.js";



export default class Members extends React.Component {
 constructor() {
   super();
   this.state = {
     search: '',
     sex: 0,
     age: 0,
     title: 0
   };
  };
searchMember(event) {
 this.setState({search: event.target.value, sex: this.state.sex,age:this.state.age, title: this.state.title})
}
filterGender(sex) {
 this.setState({search: this.state.search, sex: sex, age:this.state.age, title: this.state.title})
}
filterAge(age) {
 this.setState({search: this.state.search, sex: this.state.sex, age:age, title: this.state.title })
}
filterTitle(title) {
 this.setState({search: this.state.search, sex: this.state.sex, age:this.state.sex, title: title })
}

 render() {
  let filteredMembers = this.props.members.filter(
   (member) => {
     return member.name.indexOf(this.state.search.toLowerCase()) != -1 &&
     (this.state.sex != 0 ? member.sex == this.state.sex : member.sex != this.state.sex) && // Boom!
     (this.state.age == 0 ? member.age > this.state.age : this.state.age == 1 ? member.age < 30 : member.age >= 30) &&
     (this.state.title == 0 ? member.title != this.state.title : this.state.title == 1 ? member.title == "chef" : member.title == "anställd")
   }
 );
  return (
   <div>
   <Search
    searchMember = {::this.searchMember}
    filterGender={::this.filterGender}
    filterAge ={::this.filterAge}
    filterTitle ={::this.filterTitle}
    />
    <div className="members-container row">
         { filteredMembers.map((member) => {
        return <Member member={member} key={member.id}/>
      })}
   </div>
  </div>
  )
 }
}
