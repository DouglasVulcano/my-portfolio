import React from "react";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

export default function MainLayout() {
  return (
    <React.Fragment>
      <AnimatedCursor color="104, 211, 145" />

      <Box
        style={{
          backgroundColor: "#0c121c",
          color: "#ffffff",
          height: "100%",
        }}
      >
        <Box style={{ padding: "6rem 0" }}>
          <Outlet />
        </Box>
      </Box>
    </React.Fragment>
  );
}
