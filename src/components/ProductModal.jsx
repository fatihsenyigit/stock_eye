import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import useStockRequest from "../services/useStockRequest";
import { modalStyle } from "../styles/globalStyles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from "react-redux";


export default function ProductModal({ open, handleClose, info, setInfo }) {
  const { postStock } = useStockRequest();
  const {categories} = useSelector((state)=> state.stock)
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    postStock("products", info);

    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="categoryId">Categories</InputLabel>
              <Select
                labelId="categoryId"
                id="categoryId"
                name='categoryId'
                label="Categories"
                value={info.cateogryId}
                onChange={handleChange}
              >
                {categories.map = (item) => <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>}            
              </Select>
            </FormControl>

            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />

            <Button variant="contained" type="submit">
              Add Product
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
