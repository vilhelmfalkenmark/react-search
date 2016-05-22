import React from "react";
import ReactDOM from "react-dom";

export default class Search extends React.Component {
constructor() {
  super();
  this.state = {
    value: ''
  };
 };

handleChange (e) {
 this.setState(
 {value: e.target.value}
 );
 this.props.searchMember(e);
};

filterGender(sex) {
 this.props.filterGender(sex);
}
filterAge(age) {
 this.props.filterAge(age);
}
filterTitle(title) {
 this.props.filterTitle(title);
}
 render() {
  return (
   <div>
    <div class="input-group offset-top-40">
     <span class="input-group-addon" id="basic-addon1">Sök medlemmar</span>
     <input type="text" class="form-control" placeholder="Sök register"
       value={this.state.value}
       onChange={::this.handleChange}
       aria-describedby="basic-addon1" />
    </div>
     <div class="row offset-top-40">
      <div class="col-sm-4">
       <h4>Sortera efter kön</h4>

       <div class="radio">
         <label>
           <input type="radio" name="filterGender"  onClick={() => this.filterGender(0)}/>
          Visa bägge kön
         </label>
       </div>

       <div class="radio">
         <label>
           <input type="radio" name="filterGender"  onClick={() => this.filterGender(1)}/>
           Visa endast män
         </label>
       </div>

       <div class="radio">
         <label>
           <input type="radio" name="filterGender" value={this.state.value} onClick={() => this.filterGender(2)}/>
          Visa endast kvinnor
         </label>
       </div>
       </div>
       {/*END col-sm-4*/}
       <div class ="col-sm-4">
        <h4>Sortera efter ålder</h4>
         <div class="radio">
           <label>
             <input type="radio" name="filterAge" onClick={() => this.filterAge(0)}/>
            Visa alla åldrar
           </label>
         </div>
        <div class="radio">
          <label>
            <input type="radio" name="filterAge" onClick={() => this.filterAge(1)}/>
           Yngre än 30
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="filterAge" onClick={() => this.filterAge(2)}/>
             Äldre än 30
          </label>
        </div>
       </div>
       <div class ="col-sm-4">
        <h4>Sortera efter Yrke</h4>
         <div class="radio">
           <label>
             <input type="radio" name="filterTitle" onClick={() => this.filterTitle(0)}/>
            Visa Alla
           </label>
         </div>
        <div class="radio">
          <label>
            <input type="radio" name="filterTitle" onClick={() => this.filterTitle(1)}/>
            Endast Chefer
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="filterTitle" onClick={() => this.filterTitle(2)}/>
             Endast Anställda
          </label>
        </div>
       </div>



    </div>
   </div>
  )
 }
}
