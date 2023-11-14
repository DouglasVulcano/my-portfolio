import { Box, Heading, Avatar, Code, Text } from "@chakra-ui/react";
import useDeviceProportion from "utils/hooks/useDeviceProportion";
import TypedString from "components/TypedString";

export type PresentationProps = {
  name: string;
  nickname: string;
  jobs: string[];
  profile_image: string;
};

export default function Presentation({
  name,
  nickname,
  jobs,
  profile_image,
}: PresentationProps) {
  const { isMobile } = useDeviceProportion();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={isMobile ? "column" : "row"}
    >
      <Avatar
        name={name}
        src={profile_image}
        width={isMobile ? "200px" : "200px"}
        height={isMobile ? "200px" : "200px"}
        mb={isMobile ? 4 : 0}
      />
      <Box ml={isMobile ? 0 : 5} mt={isMobile ? 2 : 0}>
        <Heading as="h1" fontSize={isMobile ? "2.2rem" : "3rem"}>
          <Box display="flex">
            <Text color={"green.200"}>Olá!</Text>
            <Text ml={2}>Eu sou o</Text>
          </Box>
          {nickname}
        </Heading>
        <Code mt={5} fontSize={20}>
          <TypedString strings={jobs} />
        </Code>
      </Box>
    </Box>
  );
}
