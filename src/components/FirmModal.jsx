import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useStockRequest from "../services/useStockRequest";
import { modalStyle } from "../styles/globalStyles";
// import { useEffect } from "react";


export default function FirmModal({ open, handleClose, info, setInfo }) {
  // const [info, setInfo] = React.useState({
  //   name: "",
  //   phone: "",
//   image: "",
  //   address: "",
  // });

  // useEffect(() => {
  //   setInfo({
  //     name: "",
  //     phone: "",
  //     image: "",
  //     address: "",
  //   })
  // }, [open])
  

  const {postStock, putStock} = useStockRequest()
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]:e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(info._id) {
      putStock('firms', info)
    } else {
      postStock('firms', info)
    }

    handleClose()
  }
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
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
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
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
            />
            <Button variant="contained" type="submit">
              {info._id? 'Update Firm': 'Add Firm'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
