import { Heading } from "@chakra-ui/react";
import { BiSolidRightArrow } from "react-icons/bi";

type SideTitleProps = {
  title: string;
};

export default function SideTitle({ title }: SideTitleProps) {
  return (
    <Heading
      size="xs"
      textTransform="uppercase"
      fontSize={20}
      display={"flex"}
      mb={2}
    >
      <BiSolidRightArrow />
      <span style={{ marginLeft: 5, marginTop: -2 }}>{title}</span>
    </Heading>
  );
}
