import React from "react";
import "./page.scss";
import { Button, Grid, css } from "@mui/material";
import Image from "next/image";
import trophy from "../../../../public/assets/img/trophy.png";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import PollIcon from "@mui/icons-material/Poll";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import gumroad from "../../../../public/assets/img/gumroad.png";
import mastercard from "../../../../public/assets/img/mastercard-label.png";
import striple from "../../../../public/assets/img/stripe.png";
import american from "../../../../public/assets/img/american-bank.png";
import citi from "../../../../public/assets/img/citi-bank.png";
import google from "../../../../public/assets/img/google.png";
import github from "../../../../public/assets/img/github.png";
import slack from "../../../../public/assets/img/slack.png";
import digital from "../../../../public/assets/img/digital-ocean.png";
import aws from "../../../../public/assets/img/aws.png";
const Dashboard = () => {
  return (
    <div className="home-container">
      <div className="box box1">
        <div className="left">
          <div className="top">
            <div className="title">Congratulations John! </div>
            <div className="descriptions">Best seller of the month</div>
          </div>
          <div className="result">$42.8k</div>
          <Button
            className="btn"
            variant="contained"
            sx={{ width: "80%", height: "25%" }}
          >
            View sales
          </Button>
        </div>
        <div className="right">
          <Image src={trophy} alt="trophy" width={65} height={90} />
        </div>
      </div>
      <div className="box box2">
        <div className="top">
          <div className="left">
            <div className="title">Statistics Card</div>
            <div className="descriptions">Total 48.5% growth this month</div>
          </div>
          <div className="right">
            <MoreVertRoundedIcon className="icon" />
          </div>
        </div>

        <div className="result">
          <div className="item">
            <div className="left" style={{ backgroundColor: "#9155fd" }}>
              <TrendingUpRoundedIcon className="icon" />
            </div>
            <div className="right">
              <span className="title">Sales</span>
              <span className="summary">245k</span>
            </div>
          </div>
          <div className="item">
            <div className="left" style={{ backgroundColor: "#56ca00" }}>
              <PersonRoundedIcon />
            </div>
            <div className="right">
              <span className="title">Customers</span>
              <span className="summary">245k</span>
            </div>
          </div>
          <div className="item">
            <div className="left" style={{ backgroundColor: "#ffb400" }}>
              <Inventory2RoundedIcon />
            </div>
            <div className="right">
              <span className="title">Sales</span>
              <span className="summary">245k</span>
            </div>
          </div>
          <div className="item">
            <div className="left" style={{ backgroundColor: "#16b1ff" }}>
              <AttachMoneyRoundedIcon />
            </div>
            <div className="right">
              <span className="title">Sales</span>
              <span className="summary">245k</span>
            </div>
          </div>
        </div>
      </div>
      <div className="box box3"></div>
      <div className="box box4"></div>
      <div className="box box5">
        <div className="left">
          <div className="icon">
            <PollIcon
              style={{
                backgroundColor: "#56ca00",
                borderRadius: "23px",
                padding: "3px",
                width: "35px",
                height: "35px",
              }}
            />
          </div>
          <div className="title">Total Profit</div>
          <div className="number">
            <span className="amount">$25.6k</span>
            <span className="percent">+42%</span>
          </div>
          <span className="time">Weekly Profit</span>
        </div>
        <div className="right">
          <div className="icon">
            <MoreVertRoundedIcon />
          </div>
        </div>
      </div>
      <div className="box box6">
        <div className="left">
          <div className="icon">
            <AttachMoneyRoundedIcon
              style={{
                backgroundColor: "#8a8d93",
                borderRadius: "23px",
                padding: "3px",
                width: "35px",
                height: "35px",
              }}
            />
          </div>
          <div className="title">Total Profit</div>
          <div className="number">
            <span className="amount">$25.6k</span>
            <span className="percent">+42%</span>
          </div>
          <span className="time">Weekly Profit</span>
        </div>
        <div className="right">
          <div className="icon">
            <MoreVertRoundedIcon />
          </div>
        </div>
      </div>
      <div className="box box7">
        <div className="left">
          <div className="icon">
            <BusinessCenterIcon
              style={{
                backgroundColor: "#9155fd",
                borderRadius: "23px",
                padding: "3px",
                width: "35px",
                height: "35px",
              }}
            />
          </div>
          <div className="title">Total Profit</div>
          <div className="number">
            <span className="amount">$25.6k</span>
            <span className="percent">+42%</span>
          </div>
          <span className="time">Weekly Profit</span>
        </div>
        <div className="right">
          <div className="icon">
            <MoreVertRoundedIcon />
          </div>
        </div>
      </div>
      <div className="box box8">
        <div className="left">
          <div className="icon">
            <HelpOutlineIcon
              style={{
                backgroundColor: "#ffb400",
                borderRadius: "23px",
                padding: "3px",
                width: "35px",
                height: "35px",
              }}
            />
          </div>
          <div className="title">Total Profit</div>
          <div className="number">
            <span className="amount">$25.6k</span>
            <span className="percent">+42%</span>
          </div>
          <span className="time">Weekly Profit</span>
        </div>
        <div className="right">
          <div className="icon">
            <MoreVertRoundedIcon />
          </div>
        </div>
      </div>
      <div className="box box9">
        <div className="top">
          <div className="left">
            <span className="title">Sales by Countries</span>
          </div>
          <div className="right">
            <MoreVertRoundedIcon className="icon" />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="avatar">avatar</span>
            <div className="content">
              <div className="amount">
                <span className="price">$8,656k </span>
                <span className="percent">^25.8%</span>
              </div>
              <div className="country">USA</div>
            </div>
          </div>
          <div className="right">
            <span className="result">894k</span>
            <span className="title">Sales</span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="avatar">avatar</span>
            <div className="content">
              <div className="amount">
                <span className="price">$2,415k </span>
                <span className="percent red">v 6.2%</span>
              </div>
              <div className="country">UK</div>
            </div>
          </div>
          <div className="right">
            <span className="result">645k</span>
            <span className="title">Sales</span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="avatar">avatar</span>
            <div className="content">
              <div className="amount">
                <span className="price">$856k </span>
                <span className="percent">^12.4%</span>
              </div>
              <div className="country">India</div>
            </div>
          </div>
          <div className="right">
            <span className="result">148k</span>
            <span className="title">Sales</span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="avatar">avatar</span>
            <div className="content">
              <div className="amount">
                <span className="price">$745k </span>
                <span className="percent red">v 11.9</span>
              </div>
              <div className="country">Japan</div>
            </div>
          </div>
          <div className="right">
            <span className="result">86kk</span>
            <span className="title">Sales</span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="avatar">avatar</span>
            <div className="content">
              <div className="amount">
                <span className="price">$45k </span>
                <span className="percent">^16.2%</span>
              </div>
              <div className="country">Korea</div>
            </div>
          </div>
          <div className="right">
            <span className="result">42k</span>
            <span className="title">Sales</span>
          </div>
        </div>
      </div>
      <div className="box box10">
        <Grid container spacing={2}>
          <Grid item xs={6} className="same">
          <div className="top">
          <div className="left">
            <span className="title">Deposit</span>
          </div>
          <div className="right">
            <span className="action">View all</span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <Image style={{marginRight: "5px"}} src={gumroad} alt="img" width={20} height={20}/>
            <div className="content">
              <div className="amount">
                <span className="price">Gumroad Account </span>
              </div>
              <div className="country">Sell UI Kit</div>
            </div>
          </div>
          <div className="right">
            <span className="result green">+$4,650</span>
            
          </div>
        </div>
        <div className="bottom">
          <div className="left">
          <Image style={{marginRight: "5px"}} src={mastercard} alt="img" width={20} height={20}/>
            <div className="content">
              <div className="amount">
                <span className="price">MasterCard </span>
                
              </div>
              <div className="country">Waller deposit</div>
            </div>
          </div>
          <div className="right">
            <span className="result green">+$92,705</span>
            
          </div>
        </div>
        <div className="bottom">
          <div className="left">
          <Image style={{marginRight: "5px"}} src={striple} alt="img" width={20} height={20}/>
            <div className="content">
              <div className="amount">
                <span className="price">Striple Account </span>
                
              </div>
              <div className="country">IOS Application</div>
            </div>
          </div>
          <div className="right">
            <span className="result green">+$957</span>
            
          </div>
        </div>
        <div className="bottom">
          <div className="left">
          <Image style={{marginRight: "5px"}} src={american} alt="img" width={20} height={20}/>
            <div className="content">
              <div className="amount">
                <span className="price">American Bank </span>
                
              </div>
              <div className="country">Bank Tranfer</div>
            </div>
          </div>
          <div className="right">
            <span className="result green">+$6,837</span>
           
          </div>
        </div>
        <div className="bottom">
          <div className="left">
          <Image style={{marginRight: "5px"}} src={citi} alt="img" width={20} height={20}/>
            <div className="content">
              <div className="amount">
                <span className="price">Bank Account </span>
                
              </div>
              <div className="country">Wallet deposit</div>
            </div>
          </div>
          <div className="right">
            <span className="result green">+$446</span>
            
          </div>
        </div>
          </Grid>
          
          <Grid item xs={6} className="same">
          <div className="top">
          <div className="left">
            <span className="title">Withdraw</span>
          </div>
          <div className="right">
            <span className="action">View all</span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
          <Image style={{marginRight: "5px"}} src={google} alt="img" width={20} height={20}/>
            <div className="content">
              <div className="amount">
                <span className="price">Google Adsense</span>
                
              </div>
              <div className="country">Paypal deposit</div>
            </div>
          </div>
          <div className="right">
            <span className="result red">-$145</span>
            
          </div>
        </div>
        <div className="bottom">
          <div className="left">
          <Image style={{marginRight: "5px"}} src={github} alt="img" width={20} height={20}/>
            <div className="content">
              <div className="amount">
                <span className="price">Github Enterprise </span>
                
              </div>
              <div className="country">Security & compliance</div>
            </div>
          </div>
          <div className="right">
            <span className="result red">-$1870</span>
            
          </div>
        </div>
        <div className="bottom">
          <div className="left">
          <Image style={{marginRight: "5px"}} src={slack} alt="img" width={20} height={20}/>
            <div className="content">
              <div className="amount">
                <span className="price">$Upgrade Slack Plan </span>
                
              </div>
              <div className="country">Debit card deposit</div>
            </div>
          </div>
          <div className="right">
            <span className="result red">-$450</span>
            
          </div>
        </div>
        <div className="bottom">
          <div className="left">
          <Image style={{marginRight: "5px"}} src={digital} alt="img" width={20} height={20}/>
            <div className="content">
              <div className="amount">
                <span className="price">Digital Ocean </span>
                
              </div>
              <div className="country">Cloud Hosting</div>
            </div>
          </div>
          <div className="right">
            <span className="result red">-$540</span>
            
          </div>
        </div>
        <div className="bottom">
          <div className="left">
          <Image style={{marginRight: "5px"}} src={aws} alt="img" width={20} height={20}/>
            <div className="content">
              <div className="amount">
                <span className="price">AWS Account </span>
                
              </div>
              <div className="country">Choosing a Cloud Plaform</div>
            </div>
          </div>
          <div className="right">
            <span className="result red">-$21</span>
            
          </div>
        </div>
          </Grid>
        </Grid>
      </div>
      <div className="box box11"></div>
    </div>
  );
};

export default Dashboard;
