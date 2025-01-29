import React, { useEffect, useSelector } from "react";
import useStockRequest from "../services/useStockRequest";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FirmCard from "../components/FirmCard";

const Firms = () => {
  const { getStock } = useStockRequest();
  const {firms} = useSelector((state)=>state.stock)

  useEffect(() => {
    getStock("firms");
  }, []);

  return (
    <div>
      <Typography
        variant="h4"
        color={"error"}
        mb={2}
      >
        Firms
      </Typography>

      <Button variant="contained">
        New Firm
      </Button>

      <Grid container gap={2} mt={3} justifyContent={'center'}>
        {firms.map((firm)=> (
          <Grid item key={firm._id}>
            <FirmCard firm={firm}></FirmCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
