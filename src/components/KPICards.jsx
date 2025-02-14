import React from "react";
import Paper from "@mui/material/Paper";
import EuroIcon from "@mui/icons-material/Euro";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Box, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";

const KPICards = () => {
  const kpiData = [
    {
      id: 1,
      title: "Sales",
      icon: <EuroIcon sx={{ fontSize: "2rem" }} />,
      amount: "€12000",
      color: deepOrange[600],
      bgColor: deepOrange[200],
    },
    {
      id: 2,
      title: "Profit",
      icon: <ShoppingBasketIcon sx={{ fontSize: "2rem" }} />,
      amount: "€16000",
      color: "purple",
      bgColor: "pink",
    },
  ];
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      direction={"row"}
      gap={2}
    >
      {kpiData.map((item) => (
        <Paper
          key={item.id}
          elevation={3}
          sx={{
            display: "flex",
            width: 280,
            p: 2,
            justifyContent: "space-between",
            gap: 2
          }}
        >
          <Avatar
            sx={{
              bgcolor: item.bgColor,
              color: item.color,
              width: 50,
              height: 50,
            }}
          >
            {item.icon}
          </Avatar>
          <Box>
            <Typography variant="button">{item.title}</Typography>
            <Typography variant="h5">{item.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default KPICards;
