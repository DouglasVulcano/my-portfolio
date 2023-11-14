import { Text, Box } from "@chakra-ui/react";
import SideTitle from "components/SideTitle";

export type AboutMeProps = {
  description: string[];
};

export default function AboutMe({ description }: AboutMeProps) {
  return (
    <Box>
      <SideTitle title="Sobre Mim" titleId="about-me-side" />
      {description.map((description, index) => (
        <Text pt="2" fontSize="sm" key={index}>
          {description}
        </Text>
      ))}
    </Box>
  );
}
