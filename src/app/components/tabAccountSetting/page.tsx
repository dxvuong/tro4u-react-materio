// "use client"
// import {
//   Box,
//   Button,
//   Divider,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   SelectChangeEvent,
//   Tab,
//   TextField,
//   Typography,
// } from "@mui/material";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import avatar from "../../../../public/assets/img/1.png";
// import React from "react";
// import Image from "next/image";
// import "./page.scss";

// import pose from "../../../../public/assets/img/pose.png";
// import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// const TabAccountSetting = () => {
//   const [value, setValue] = React.useState("1");

//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };
//   const [role, setRole] = React.useState('');
//   const [status, setStatus] = React.useState('');

//   const handleChangeRole = (event: SelectChangeEvent) => {
//     setRole(event.target.value as string);
//   };
//   const handleChangeStatus = (event: SelectChangeEvent) => {
//     setStatus(event.target.value as string);
//   };
//   console.log("role selected:" , role);
  
//   return (
//     <Paper>
//       <Box sx={{ width: "100%", typography: "body1" }}>
//         <TabContext value={value}>
//           <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//             <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{
//                 '& .MuiTabs-indicator': {
//                     backgroundColor: 'rgb(128, 75, 223)',
//                 },
//             }} >
//               <Tab
//                 label="ACCOUNT"
//                 value="1"
                
//                 icon={<PersonOutlineOutlinedIcon />}
//                 iconPosition="start"
//                 style={{color: "rgb(128, 75, 223)"}}
//               />
//               <Tab
//                 label="SECURITY"
//                 value="2"
//                 icon={<LockOpenOutlinedIcon />}
//                 iconPosition="start"
//                 style={{color: "rgb(128, 75, 223)"}}
//               />
//             </TabList>
//           </Box>
//           <TabPanel value="1">
//             <div className="account-container">
//               <div className="img-info">
//                 <div className="avatar">
//                   <Image
//                     src={avatar}
//                     priority={true}
//                     alt="avatar"
//                     width={120}
//                     height={120}
//                     style={{ borderRadius: "5px" }}
//                   />
//                 </div>
//                 <div className="actions">
//                   <div className="top">
//                     <Button
//                       style={{
//                         backgroundColor: "#804BDF",
//                         color: "#fff",
                        
                        
//                         height: "36px",
                        
//                       }}
//                       className="btn-reponsive"
//                       variant="contained"
//                     >
//                       <span> Upload new photo</span>
                     
//                     </Button>
//                     <Button
//                       style={{
//                         color: "red",
//                         border: "1px solid red",
//                         width: "90px",
//                         height: "36px",
//                       }}
//                       variant="outlined"
//                     >
//                       Reset
//                     </Button>
//                   </div>
//                   <div className="bottom">
//                     <Typography
//                       sx={{
//                         fontSize: 14,
//                         fontWeight: 400,
//                         lineHeight: 1.5,
//                         color: "rgba(58, 53, 65, 0.68)",
//                         marginTop: "20px",
//                       }}
//                     >
//                       Allowed PNG or JPEG. Max size of 800K.
//                     </Typography>
//                   </div>
//                 </div>
//               </div>
//               <div className="form-info">
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} lg={6} xl={6} className="form-left">
//                     <TextField
//                       sx={{ margin: "10px 0" }}
//                       id="outlined-basic"
//                       label="Username"
//                       variant="outlined"
//                     />
//                     <TextField
//                       sx={{ margin: "10px 0" }}
//                       id="outlined-basic"
//                       label="Email"
//                       variant="outlined"
//                     />
//                     <FormControl fullWidth sx={{margin: "10px 0"}}>
//                       <InputLabel id="demo-simple-select-label">Status</InputLabel>
//                       <Select
//                         labelId="demo-simple-select-label"
//                         id="demo-simple-select"
//                         value={status}
//                         label="Status"
//                         onChange={handleChangeStatus}
//                       >
//                         <MenuItem value={"active"}>Active</MenuItem>
//                         <MenuItem value={"inactive"}>Inactive</MenuItem>
//                         <MenuItem value={"pending"}>Pending</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>
//                   <Grid item xs={12} lg={6} xl={6} className="form-right">
//                     <TextField
//                       sx={{ margin: "10px 0" }}
//                       id="outlined-basic"
//                       label="Name"
//                       variant="outlined"
//                     />
//                     <FormControl fullWidth sx={{margin: "10px 0"}}>
//                       <InputLabel id="demo-simple-select-label">Role</InputLabel>
//                       <Select
//                         labelId="demo-simple-select-label"
//                         id="demo-simple-select"
//                         value={role}
//                         label="Role"
//                         onChange={handleChangeRole}
//                       >
//                         <MenuItem value={10}>Admin</MenuItem>
//                         <MenuItem value={20}>Author</MenuItem>
//                         <MenuItem value={30}>Editor</MenuItem>
//                         <MenuItem value={40}>Maintainer</MenuItem>
//                         <MenuItem value={50}>Subcriber</MenuItem>
//                       </Select>
//                     </FormControl>
//                     <TextField
//                       sx={{ margin: "10px 0" }}
//                       id="outlined-basic"
//                       label="Company"
//                       variant="outlined"
//                     />
//                   </Grid>
//                 </Grid>
//               </div>
//               <div className="btn-action">
//                 <Button
//                   style={{
//                     backgroundColor: "#804BDF",
//                     color: "#fff",
//                     width: "155px",
//                     height: "36px",
//                   }}
//                   variant="contained"
//                 >
//                   SAVE CHANGES
//                 </Button>
//                 <Button
//                   style={{
//                     border: "1px solid #ccc",
//                     color: "#8A8D93",
//                     width: "90",
//                     height: "36px",
//                   }}
//                   variant="outlined"
//                 >
//                   RESET
//                 </Button>
//               </div>
//             </div>
//           </TabPanel>
//           <TabPanel value="2">
//             <div className="security-container">
//               <div className="top">
//                 <Grid container>
//                   <Grid item xs={12} lg={6} xl={6}>
//                     <div className="left">
//                       <TextField
//                         sx={{ margin: "10px 0" }}
//                         id="outlined-basic"
//                         label="Current Password"
//                         variant="outlined"
//                         fullWidth
//                       />
//                       <TextField
//                         sx={{ margin: "10px 0" }}
//                         id="outlined-basic"
//                         label="New Password"
//                         variant="outlined"
//                         fullWidth
//                       />
//                       <TextField
//                         sx={{ margin: "10px 0" }}
//                         id="outlined-basic"
//                         label="Confirm New Password"
//                         variant="outlined"
//                         fullWidth
//                       />
//                     </div>
//                   </Grid>
//                   <Grid item xs={12} lg={6} xl={6}>
//                     <div className="right">
//                       <Image src={pose} width={183} height={256} alt="pose" priority={true} />
//                     </div>
//                   </Grid>
//                 </Grid>
//               </div>
//               <Divider />
//               <div className="bottom">
//                 <div className="access">
//                   <VpnKeyOutlinedIcon />
//                   <Typography sx={{ fontSize: "20px" }}>
//                     Two-factor authentication
//                   </Typography>
//                 </div>
//                 <div className="content">
//                   <LockOpenOutlinedIcon />
//                   <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
//                     Two factor authentication is not enabled yet.
//                   </Typography>
//                   <Typography
//                     sx={{ fontSize: "15px", color: "rgba(58, 53, 65, 0.68);" }}
//                   >
//                     Two-factor authentication adds an additional layer of <br />
//                     security to your account by requiring more than just a{" "}
//                     <br />
//                     password to log in. Learn more.
//                   </Typography>
//                 </div>
//                 <div className="actions">
//                   <Button
//                     style={{
//                       backgroundColor: "#804BDF",
//                       color: "#fff",
//                       width: "155px",
//                       height: "36px",
//                     }}
//                     variant="contained"
//                   >
//                     SAVE CHANGES
//                   </Button>
//                   <Button
//                     style={{
//                       border: "1px solid #ccc",
//                       color: "#8A8D93",
//                       width: "90",
//                       height: "36px",
//                     }}
//                     variant="outlined"
//                   >
//                     RESET
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </TabPanel>
//         </TabContext>
//       </Box>
//     </Paper>
//   );
// };

// export default TabAccountSetting;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page