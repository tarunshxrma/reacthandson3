import React, { Component } from 'react'

export default class ClassCompo2 extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
    return (
      <>
      <div>
        <h1>EMPLOYEE FEEDBACK DATA</h1>
        <div className="parent-2">
        {this.props.value.map((item,index)=>{
          return(
            <>
            <div className="data-2">
            <p key={index}>Name : {item.name} | Department : {item.department} | Rating : {item.rating}</p>
            </div>
            </>
          )
        })}
        </div>
        <button onClick={this.props.toggleFunc}>Go Back</button>
      </div>
      </>
    )
  }
}