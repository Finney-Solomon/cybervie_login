import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { getUsersData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const UsersPage = () => {
const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getUsersData(null));
  }, [dispatch])

  const users= useSelector((state) => state.users);
  console.log(users,"users")
  
  return (
    <>
      <Box
        style={{
         

          height: "91.11vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Paper sx={{ width:"100%",overflow: "hidden" }}>
          <TableContainer >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>

                  <TableCell>Full Name</TableCell>
                  <TableCell>Phone No</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {
users?.map((row)=>
  <TableRow
  key={row.name}
  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
  <TableCell>{row?.email}</TableCell>

  <TableCell>{row?.name}</TableCell>
  <TableCell>{row?.phoneNumber}</TableCell>
  </TableRow>
)
              }
              </TableBody>
            </Table>
          </TableContainer>
        
        </Paper>
      </Box>
    </>
  );
};
