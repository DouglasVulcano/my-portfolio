import { Text, Box, Card, StackDivider, Stack } from "@chakra-ui/react";
import styles from "commons/styles/index.module.scss";
import SideTitle from "components/SideTitle";
import TechBadges from "components/TechBadges";

export type ExperienceType = {
  title: string;
  company: string;
  period: string;
  description: string;
  icons: any[];
};

type ExperienceProps = {
  experiences: ExperienceType[];
};

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <Box>
      <SideTitle title="Últimas Experiência" />
      <Card backgroundColor={"#0c121c"} color={"#ffffff"}>
        <Stack divider={<StackDivider />} spacing="4">
          {experiences.map((experience, index) => (
            <Box key={index} pt="2">
              <Text
                fontSize="sm"
                fontWeight="bold"
                textTransform="uppercase"
                className={styles["green"]}
              >
                {experience.title}
              </Text>
              <Text fontSize="sm" fontWeight="bold">
                {experience.company}
              </Text>
              <Text fontSize="sm" fontWeight="bold">
                {experience.period}
              </Text>
              <Text fontSize="sm" mt={2}>
                {experience.description}
              </Text>
              <TechBadges icons={experience.icons} />
            </Box>
          ))}
        </Stack>
      </Card>
    </Box>
  );
}
