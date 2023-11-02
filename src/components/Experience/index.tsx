import {
  Text,
  Box,
  Heading,
  Card,
  StackDivider,
  Stack,
} from "@chakra-ui/react";

export type ExperienceType = {
  title: string;
  company: string;
  period: string;
  description: string;
};

type ExperienceProps = {
  experiences: ExperienceType[];
};

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        Expenciencias
      </Heading>

      <Card>
        <Stack divider={<StackDivider />} spacing="4">
          {experiences.map((experience, index) => (
            <Box key={index} pt="2">
              <Text
                fontSize="sm"
                fontWeight="bold"
                textTransform="uppercase"
                color={"green.300"}
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
            </Box>
          ))}
        </Stack>
      </Card>
    </Box>
  );
}
