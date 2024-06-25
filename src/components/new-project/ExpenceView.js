import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  alpha,
} from "@mui/material";

export default function ExpenseView({ type, data }) {
  return (
    <Box
      flex={1}
      width="100%"
      bgcolor="white"
      marginRight="4"
      marginTop="10"
      padding="5"
      paddingBottom="4"
      border="1px solid"
      borderColor="#e0e0e0"
      borderRadius="12"
    >
      <Typography 
      variant="h6" 
      color={type === "expense" ? "#bf360c" : "#00bfa5"}
      fontWeight="bold"
      marginTop={2}
      marginBottom={1}
      >
        {type === "income" ? "Income" : "Expense"}
      </Typography>
      {data.map((item, index) => (
        <Box
        component="div"
        boxShadow={1}
        bgcolor={type === "expense" ? alpha("#ffccbc", 0.8) : "#e0f2f1"}
        margin={2}
        padding={1}
        paddingLeft={3}
        paddingRight={3}
        
        borderRadius={2}
        border={type === "expense" ? "1px solid #ffab91" : "1px solid #80cbc4"}
      >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography fontWeight="bold" color="#37474f">
                {item.description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="#37474f">₹ {item.amount}</Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
