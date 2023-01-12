import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpence=(props)=>{
    const saveExpenceDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
props.onAddExpence(expenseData);
    }
    return <div className="new-expense">
<ExpenseForm onSaveExpenceData={saveExpenceDataHandler}/>
    </div>
};
export default NewExpence;