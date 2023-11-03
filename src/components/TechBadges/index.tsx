import { Badge, Stack, Text, Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { RiVuejsFill, RiReactjsFill } from "react-icons/ri";
import { FaPhp, FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandLaravel, TbBrandMysql, TbBrandNextjs } from "react-icons/tb";

export type IconType =
  | "vuejs"
  | "reactjs"
  | "nextjs"
  | "php"
  | "nodejs"
  | "typescript"
  | "laravel"
  | "mysql";

type TechBadgesProps = {
  icons: IconType[];
};

type IconComponents = {
  [key in IconType]: React.ComponentType;
};

const iconComponents: IconComponents = {
  vuejs: RiVuejsFill,
  reactjs: RiReactjsFill,
  nextjs: TbBrandNextjs,
  php: FaPhp,
  nodejs: FaNodeJs,
  typescript: BiLogoTypescript,
  laravel: TbBrandLaravel,
  mysql: TbBrandMysql,
};

export default function TechBadges({ icons }: TechBadgesProps) {
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
            <Icon as={iconComponents[icon]} fontSize={20} fontWeight="bold" />
            <Box ml={{ base: 1 }} p={1}>
              <Text fontWeight="bold">{icon}</Text>
            </Box>
          </Flex>
        </Badge>
      ))}
    </Stack>
  );
}
