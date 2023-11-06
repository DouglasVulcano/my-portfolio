import { Box } from "@chakra-ui/react";
import SideTitle from "components/SideTitle";

export default function Projects() {
  return (
    <Box>
      <SideTitle title="Projetos" titleId="projects-side" />
      <Box pt="2" bg="gray.700" borderRadius={20} p={6}>
        Em breve!
      </Box>
    </Box>
  );
}
