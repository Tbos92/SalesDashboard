import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Menu = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Typography variant="h4">Welcome to the home page!</Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Menu;
