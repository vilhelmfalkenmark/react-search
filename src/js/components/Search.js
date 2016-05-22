import React from "react";
import ReactDOM from "react-dom";

export default class Search extends React.Component {

constructor() {
  super();
  this.state = {
    sex: 0,
    value: ''
  };
 };

handleChange (e) {
 this.setState(
 {value: e.target.value}
 );
 this.props.findMember(this.state.value, this.state.sex);
};

filterGender(sex) {
 this.setState(
 {sex: sex}
 );
 this.props.findMember(this.state.value, sex);
}


 render() {
  return (
   <div>
    <div class="input-group">
     <span class="input-group-addon" id="basic-addon1">Sök medlemmar</span>
     <input type="text" class="form-control" placeholder="Username"
       value={this.state.value}
       onChange={::this.handleChange}

      aria-describedby="basic-addon1" />
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="filterGender" value={this.state.value} onClick={() => this.filterGender(0, this.state.value)}/>
       Visa bägge kön
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="filterGender" value={this.state.value} onClick={() => this.filterGender(1,this.state.value)}/>

        Visa endast män
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="filterGender" value={this.state.value} onClick={() => this.filterGender(2,this.state.value)}/>
       Visa endast kvinnor
      </label>
    </div>
   </div>
  )
 }
}
