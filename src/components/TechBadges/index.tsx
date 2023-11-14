import { Badge, Stack, Text, Box, Flex, Icon } from "@chakra-ui/react";
import useTechIcons, { IconType } from "utils/hooks/useTechIcons";

type TechBadgesProps = {
  icons: IconType[];
};

export default function TechBadges({ icons }: TechBadgesProps) {
  const { getTechIcons } = useTechIcons();

  return (
    <Stack
      direction="row"
      spacing={4}
      align="center"
      pt={3}
      flexWrap={{ base: "wrap", sm: "nowrap" }}
    >
      {icons.map((icon, index) => (
        <Badge key={index} colorScheme="green" p={2} borderRadius={"20px"}>
          <Flex align="center">
            <Icon as={getTechIcons(icon)} fontSize={20} fontWeight="bold" />
            <Box ml={{ base: 1 }} p={1}>
              <Text fontWeight="bold">{icon}</Text>
            </Box>
          </Flex>
        </Badge>
      ))}
    </Stack>
  );
}
