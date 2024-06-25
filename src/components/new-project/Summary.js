import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import TransactionForm from "./AddTran";
import TransactionChartSummary from "./Chart";

export default function Summary({
  onClose,
  isOpen,
  totalExpense,
  totalIncome,
}) {
  return (
    <Box
      p="6"
      overflow="hidden"
      bgcolor="white"
      display="flex"
      width='100%'
      border='1px solid #e0e0e0'
        >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={7}
        marginLeft='50'

      >
        <Grid item xs={12} md={6} lg={5} xl={6}>
          <Box
            textAlign="center"
            marginBottom="20px"
          >
            <Typography variant="h5" fontWeight="bold" color="#546e7a" gutterBottom>
              Balance is ₹ {totalIncome - totalExpense}
            </Typography>
          </Box>
          <Paper
            variant="outlined"
            elevation={0}
            sx={{
              backgroundColor: "#fafafa",
              height: "100px",
              borderColor: "e0e0e0",
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Grid item>
                <Box textAlign="center">
                  <Typography fontWeight="bold" variant="h4" color="#37474f">
                    ₹ {totalIncome}
                  </Typography>
                  <Typography color="grey">Total Income</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            variant="outlined"
            elevation={0}
            sx={{
              backgroundColor: "#fafafa",
              height: "100px",
              borderColor: "#e0e0e0",
              marginTop: "10px",
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Grid item>
                <Box textAlign="center">
                  <Typography variant="h4" fontWeight="bold" color="#37474f">
                    ₹ {totalExpense}
                  </Typography>
                  <Typography color="grey">Total Expense</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={6}>
          <Box
            marginTop="20px"
            marginLeft="90px"
            marginRight="5px"
            width="300px"
            height="300px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Typography variant="h6" textAlign="center">
              <TransactionChartSummary expense={totalExpense} income={totalIncome} />
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <TransactionForm onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}
