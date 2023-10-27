import { Box, Heading, Avatar } from "@chakra-ui/react";

export default function Presentation() {
  return (
    <Box
      display="flex"
      alignItems="center"
      style={{
        justifyContent: "center",
      }}
    >
      <Avatar
        name="Douglas da Silva Vulcano"
        src="https://github.com/DouglasVulcano.png"
        style={{
          width: "200px",
          height: "200px",
        }}
      />
      <Box ml={4}>
        <Heading
          as="h1"
          style={{
            fontSize: "3rem",
          }}
        >
          Olá! Eu sou o
        </Heading>
        <Heading
          as="h1"
          style={{
            fontSize: "3rem",
          }}
        >
          Douglas Vulcano
        </Heading>
      </Box>
    </Box>
  );
}
