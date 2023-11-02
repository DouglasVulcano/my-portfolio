import { Box } from "@chakra-ui/react";
import useDeviceProportion from "utils/hooks/useDeviceProportion";

type BoxWidth =
  | "90%"
  | "80%"
  | "70%"
  | "60%"
  | "50%"
  | "40%"
  | "30%"
  | "20%"
  | "10%";

type ContainerProps = {
  children: React.ReactNode;
  width: BoxWidth;
};

export default function Container({ children, width }: ContainerProps) {
  const { isMobile } = useDeviceProportion();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="justify"
    >
      <Box width={isMobile ? "90%" : `${width}`}>{children}</Box>
    </Box>
  );
}
