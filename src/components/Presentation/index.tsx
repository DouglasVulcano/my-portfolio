import { Box, Heading, Avatar, Text } from "@chakra-ui/react";
import useDeviceProportion from "utils/hooks/useDeviceProportion";
import styles from "./Presentation.module.scss";

export default function Presentation() {
  const { isMobile } = useDeviceProportion();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={isMobile ? "column" : "row"}
    >
      <Avatar
        name="Douglas da Silva Vulcano"
        src="https://github.com/DouglasVulcano.png"
        width={isMobile ? "200px" : "200px"}
        height={isMobile ? "200px" : "200px"}
        mb={isMobile ? 4 : 0}
      />
      <Box ml={isMobile ? 0 : 5} mt={isMobile ? 2 : 0}>
        <Heading as="h1" fontSize={isMobile ? "2.2rem" : "3rem"}>
          Olá! Eu sou o<br />
          Douglas Vulcano
        </Heading>
        <Text fontSize={isMobile ? "1.2rem" : "1.5rem"} mt={2}>
          <span className={styles.typing_animation}>
            Desenvolvedor Front-end
          </span>
        </Text>
      </Box>
    </Box>
  );
}
