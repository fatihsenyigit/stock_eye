import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridActionsCellItem,
  GridDeleteForeverIcon,
  GridToolbar
} from "@mui/x-data-grid";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";

export default function ProductTable() {
  const { deleteStock } = useStockRequest();
  const { products } = useSelector((state) => state.stock);
  const getRowId = (row) => row._id;

  const columns = [
    { field: "_id", headerName: "#", minwWidth: 100, flex: 1.2 },
    {
      field: "categoryId",
      headerName: "Categories",
      flex: 1,
      minwWidth: 100,
      valueGetter: (value, row) => row.categoryId?.name,
    },
    {
      field: "brandId",
      headerName: "Brands",
      headerAlign: 'center',
      width: 150,
      flex: 1.2,
      // editable: true,
      // valueGetter: (value, row) => row.brandId?.name, buda olur
      valueGetter: (value) => value?.name,
    },
    {
      field: "name",
      headerName: "Name",
      headerAlign: 'center',
      flex: 1,
      minwWidth: 100,
      // editable: true,
    },
    {
      field: "quantity",
      headerName: "Stock",
      // sortable: true, 
      headerAlign: 'center',
      align: 'center',
      width: 160,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Operations",
      getActions: (props) => [
        <GridActionsCellItem
          icon={<GridDeleteForeverIcon />}
          onClick={() => deleteStock("products", props.id)}
          label="delete"
        ></GridActionsCellItem>,
      ],
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{toolbar: GridToolbar}}
      />
    </Box>
  );
}
