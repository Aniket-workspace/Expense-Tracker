import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
} from "@mui/material";
import { GlobalContext } from "../../context/Context";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";

export default function TransactionForm({ onClose, isOpen }) {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(formData);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add New Transaction</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <FormControl fullWidth>
            <FormLabel>Enter Description</FormLabel>
            <Input
              placeholder="Enter Transaction description"
              name="description"
              type="text"
              onChange={handleFormChange}
            />
          </FormControl>
          <FormControl fullWidth></FormControl>
          <FormControl fullWidth>
            <FormLabel>Enter Amount</FormLabel>
            <Input
              placeholder="Enter Transaction amount"
              name="amount"
              type="number"
              onChange={handleFormChange}
            />
          </FormControl>
          <RadioGroup
            aria-label="transaction-type"
            name="type"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <FormControlLabel
              value="income"
              control={<Radio color="primary" />}
              label="Income"
              checked={formData.type === "income"}
              onChange={handleFormChange}
            />
            <FormControlLabel
              value="expense"
              control={<Radio color="primary" />}
              label="Expense"
              checked={formData.type === "expense"}
              onChange={handleFormChange}
            />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            onClick={onClose}
            style={{ color: "white", backgroundColor: "#26a69a" }}
          >
            Add
          </Button>
          <Button
            onClick={onClose}
            style={{ color: "white", backgroundColor: "#26a69a" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
