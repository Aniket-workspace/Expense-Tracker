import React, { useContext, useEffect, useState } from "react";
import { Button, Typography, Grid } from "@mui/material";
import { GlobalContext } from "../../context/Context";
import Summary from "./Summary";
import ExpenseView from "./ExpenceView";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    totalExpense,
    allTransactions,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      paddingRight={5}
      paddingLeft={5}
      textAlign="center"
      bgcolor='#eceff1' 
         >
      <Grid
        item
        container
        alignItems="center"
        justifyContent="space-between"
        marginTop={5}
        marginBottom={3}
      >
        <Typography variant="h4" fontWeight="bold" color="primary">
          Expense Tracker
        </Typography>
        <Button onClick={handleOpen} variant="contained" color="primary" ml={4}>
          Add New Transaction
        </Button>
      </Grid>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={handleClose}
        
      />
      <Grid
        item
        container
        width="100%"
        alignItems="flex-start"
        justifyContent="space-evenly"
        flexDirection={{ xs: "column", md: "row" }}
        
      >
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "expense")}
          type={"expense"} 
        />
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "income")}
          type={"income"}
        />
      </Grid>
    </Grid>
  );
}
