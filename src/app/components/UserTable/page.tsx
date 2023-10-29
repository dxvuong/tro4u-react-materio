// import { TableContainer, Paper, Table, TableRow, TableCell, TableBody } from '@mui/material'
// import TableHead from '@mui/material/TableHead/TableHead'
// import React from 'react'
// import "./page.scss"
// function createData(
//     name: string,
//     email: string,
//     date: string,
//     salary: number,
//     age: number,
//   ) {
//     return { name, email, date, salary, age };
//   }
// const rows = [
//     createData('Sally Quinn', "eebsworth2m@sbwire.com", "09/27/2018", 19586.23, 27),
//     createData('Sally Quinn', "kocrevy0@thetimes.co.uk", "09/23/2016", 23896.35, 61),
//     createData('Minnie Roy', "ediehn6@163.com", "10/15/2017", 18991.67, 59),
//     createData('Ralph Leonard', "dfalloona@ifeng.com", "06/12/2018", 19252.12, 30),
//     createData('Annie Martin', "sganderton2@tuttocitta.it", "03/24/2018", 13076.28, 66),
//   ];
// const UserTable = () => {
//   return (
//     <div className='table-container'>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{fontWeight: "bold", }} className="fixed-cell" >NAME</TableCell>
//             <TableCell sx={{fontWeight: "bold", }} align="left">EMAIL</TableCell>
//             <TableCell sx={{fontWeight: "bold", }} align="left">DATE</TableCell>
//             <TableCell sx={{fontWeight: "bold", }} align="left">SALARY</TableCell>
//             <TableCell sx={{fontWeight: "bold", }} align="left">AGE</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.email}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell className="fixed-cell" component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="left">{row.email}</TableCell>
//               <TableCell align="left">{row.date}</TableCell>
//               <TableCell align="left">{row.salary}</TableCell>
//               <TableCell align="left">{row.age}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   )
// }

// export default UserTable
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page