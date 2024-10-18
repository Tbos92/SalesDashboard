import * as React from "react";
import Box from "@mui/material/Box";

export default function BoxBasic() {
  return (
    <Box
      component="section"
      sx={{
        width: 400,
        height: 300,
        borderRadius: 1,
        bgcolor: "#fff",
        border: "1px solid grey",
        color: "#000",
      }}
    >
      Sales
    </Box>
  );
}
