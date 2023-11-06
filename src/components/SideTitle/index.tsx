import { Heading } from "@chakra-ui/react";
import { BiSolidRightArrow } from "react-icons/bi";

type SideTitleProps = {
  title: string;
  titleId: string;
};

export default function SideTitle({ title, titleId }: SideTitleProps) {
  return (
    <Heading
      mb={2}
      size="xs"
      id={titleId}
      fontSize={20}
      display={"flex"}
      textTransform="uppercase"
    >
      <BiSolidRightArrow />
      <span style={{ marginLeft: 5, marginTop: -2 }}>{title}</span>
    </Heading>
  );
}
