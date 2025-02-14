import React, { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import { useSelector } from "react-redux";
import TableSkeleton, { ErrorMessage, NoDataMessage } from "../components/DataFetchMessage";

const Products = () => {
  const { getStock } = useStockRequest();
  const { error, loading, products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const initialState = { categoryId: "", brandId: "", name: "" };

  const [info, setInfo] = React.useState(initialState);

  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  useEffect(() => {
    getStock("products");
    getStock("categories");
    getStock("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={2}>
        Products
      </Typography>

      <Button
        variant="contained"
        onClick={handleOpen}
        disabled={error}
      >
        New Product
      </Button>

      {loading && <TableSkeleton/>}
      {!loading && products.lenght > 0 && <ProductTable></ProductTable>}
      {!products.lenght && <NoDataMessage/>}

      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      ></ProductModal>

      
      
    </div>
  );
};

export default Products;
