import ExpenceDate from "../Expense/ExpenceDate";
import "../Expense/ExpenceItem.css";
import ExpenceDetails from "../Expense/ExpenceDetails";
import React, { createElement } from "react";
const ExpenseItem=(props)=> {
  
return(
      <div className="expense-item">
        <ExpenceDate date={props.date}/>
        <ExpenceDetails amount={props.amount}/>

      </div>

  ) }
export default ExpenseItem;
