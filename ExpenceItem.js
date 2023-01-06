import ExpenceDate from "./ExpenceDate";
import "./ExpenceItem.css";
import ExpenceDetails from "./ExpenceDetails";
import React, { useState } from "react";
function ExpenceItem(props) {
const [amount,setAmount]=useState(props.amount);
const expenceChange=()=>{
  setAmount('100');
}

  

  return (
    <div className="expense-item">
      <ExpenceDate date={props.date} />
      <ExpenceDetails title={props.title} amount={amount} locationOfExpenditure={props.locationOfExpenditure}/>
            <button onClick={expenceChange}>Change Expence</button>
    </div>
  );
}
export default ExpenceItem;
