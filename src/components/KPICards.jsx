import React from "react";
import Paper from "@mui/material/Paper";
import EuroIcon from "@mui/icons-material/Euro";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Stack } from "@mui/material";

const KPICards = () => {
  const kpiData = [
    {
      id: 1,
      title: "Sales",
      icon: <EuroIcon />,
      amount: "€12000",
      color: "purple",
      bgColor: "pink",
    },
    {
        id: 2,
        title: "Profit",
        icon: <ShoppingBasketIcon/>,
        amount: "€16000",
        color: "purple",
        bgColor: "pink",
      },
  ];
  return (
    <Stack justifyContent={"center"} alignItems={"center"} flexWrap={'wrap'}>
        {kpiData.map((item)=> (
            <Paper key={item.id} elevation={3}></Paper>
        ))}
      
    </Stack>
  );
};

export default KPICards;
