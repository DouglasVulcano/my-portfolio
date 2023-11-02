import { Text, Box, Heading } from "@chakra-ui/react";

type AboutMeProps = {
  description: string[];
};

export default function AboutMe({ description }: AboutMeProps) {
  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        Sobre mim
      </Heading>
      {description.map((description, index) => (
        <Text pt="2" fontSize="sm" key={index}>
          {description}
        </Text>
      ))}
    </Box>
  );
}
