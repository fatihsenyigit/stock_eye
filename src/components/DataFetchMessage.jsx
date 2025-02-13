import React from "react";
import Alert from "@mui/material/Alert";
import { Skeleton, Stack } from "@mui/material";

export const ErrorMessage = () => {
  return <Alert sx={{mt: 3}} severity="error"> hata olustu</Alert>;
};

export const NoDataMessage = () => {
  return <Alert sx={{mt: 3}} severity="warning"> veri yok</Alert>;
};

export const CardSkeleton = ({children}) => {
  return (
    <Stack spacing={1} sx={{mt: 3}}>
      <Skeleton variant="rectangular">
         {children}
      </Skeleton>
      
    </Stack>
);

}

const TableSkeleton = () => {
  return (
      <Stack spacing={1} sx={{mt: 3}}>
        <Skeleton variant="rectangular" width="100%" height={90} />
        <Skeleton variant="rectangular" width="100%" height={45} />
        <Skeleton variant="rectangular" width="100%" height={45} />
        <Skeleton variant="rectangular" width="100%" height={45} />
        <Skeleton variant="rectangular" width="100%" height={25} />
      </Stack>
  );
};

export default TableSkeleton;
 