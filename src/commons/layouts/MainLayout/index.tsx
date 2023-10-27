import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const styles = {
  backgroundColor: "#0c121c",
  color: "#ffffff",
  height: "100vh",
  width: "100vw",
  padding: "8rem 0 0 0 ",
};

export default function MainLayout() {
  return (
    <Box style={styles}>
      <Outlet />
    </Box>
  );
}
