import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Paper,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { mockTransactions } from "./mockData.js";
import { LineChart } from "@mui/x-charts/LineChart";

function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);

  // Sales, Clients, Traffic stats
  const statistics = [
    { label: "Sales Obtained", value: "837", change: "+21%" },
    { label: "New Clients", value: "86,435", change: "+5%" },
    { label: "Traffic Received", value: "23,784,133", change: "+43%" },
  ];

  // Mock data from revenue chart
  const revenueData = [
    { date: "2021-09-01", revenue: 23495 },
    { date: "2022-04-01", revenue: 13895 },
    { date: "2022-11-05", revenue: 20095 },
    { date: "2022-11-02", revenue: 1355 },
    { date: "2019-04-15", revenue: 12420 },
  ];

  useEffect(() => {
    // Simulate fetching transactions from the mockData.js
    setTransactions(mockTransactions);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box>
      {/* Dashboard bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer(true)}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            The King's Restaurant Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for sidebar */}
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h5" sx={{ padding: "16px" }}>
            The King's Restaurant
          </Typography>
          <Typography variant="body2" sx={{ paddingLeft: "16px" }}>
            Dashboard Owner
          </Typography>
          <List>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="FAQ Page" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h4" gutterBottom>
              DASHBOARD
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Welcome to your dashboard
            </Typography>
          </Box>
        </Grid>

        {/* Rendering Sales, Clients, Traffic stats */}
        {statistics.map((stat, index) => (
          <Grid item xs={4} key={index}>
            <Paper elevation={3} style={{ padding: "16px" }}>
              <Typography variant="h6">{stat.value}</Typography>
              <Typography variant="body2">{stat.label}</Typography>
              {stat.change && (
                <Typography variant="caption" color="green">
                  {stat.change}
                </Typography>
              )}
            </Paper>
          </Grid>
        ))}

        {/* Revenue Generated */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">Revenue Generated</Typography>
            <Typography variant="h4" color="green">
              $271,434.63
            </Typography>
          </Paper>
        </Grid>

        {/* Recent Transactions rendered from mockData.js */}
        <Grid item xs={4}>
          <Paper elevation={3} style={{ padding: "16px", height: "200px", overflowY: "auto" }}>
            <Typography variant="h6">Recent Transactions</Typography>
            <Box mt={2}>
              {transactions.map((transaction, index) => (
                <Box mb={1} key={index}>
                  <Typography variant="body2">
                    {transaction.txId} - {transaction.user} - {transaction.date} - ${transaction.cost}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Revenue Generated Chart */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">Revenue Generated Over Time</Typography>
            <LineChart
              xAxis={[
                {
                  data: revenueData.map((data) => data.date),
                  scaleType: "band",
                },
              ]}
              series={[
                {
                  data: revenueData.map((data) => data.revenue),
                  label: "Revenue",
                },
              ]}
              height={300}
              width={600}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
