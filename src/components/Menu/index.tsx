import { Stack, Button, Box } from "@chakra-ui/react";

import React from "react";
import useDeviceProportion from "utils/hooks/useDeviceProportion";
import useMenuSide from "utils/hooks/useMenuSide";

type MenuProps = {
  menuIds: {
    id: string;
    label: string;
  }[];
};

export default function Menu({ menuIds }: MenuProps) {
  const { isMobile } = useDeviceProportion();
  const { currentSide, redirectSide } = useMenuSide({ menus: menuIds });

  return !isMobile ? (
    <Box display="flex" justifyContent="end" mb={10}>
      <Stack direction="row" spacing={4} align="end">
        {menuIds.map((el, i) => (
          <Button
            key={i}
            colorScheme={"teal"}
            onClick={() => redirectSide(el.id)}
            variant={currentSide === el.id ? "solid" : "outline"}
          >
            {el.label}
          </Button>
        ))}
      </Stack>
    </Box>
  ) : (
    <></>
  );
}
